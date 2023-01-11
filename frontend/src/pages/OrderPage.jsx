import React, { useEffect } from 'react';
import { useState } from 'react';
import { Alert, Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { ORDER_PAY_RESET } from "../constants/orderConstants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import Loader from "../components/shared/Loader";
import { getOrderDetails, payOrder } from '../actions/orderActions';
import Message from '../components/shared/Message';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PayPalButton } from "react-paypal-button-v2";

const OrderPage = () => {
    const { orderId } = useParams();
    const dispatch = useDispatch();
    const [sdkReady, setSdkReady] = useState(false);
    const orderPay = useSelector((state) => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay
    const orderDetails = useSelector((state) => state.orderDetails)
    const { order, loading, error } = orderDetails
    const navigate = useNavigate();

    if (!loading) {
        //calculate price
        const addDecimal = (num) => {
            return (Math.round(num * 100) / 100).toFixed(2);
        }
        order.itemsPrice = addDecimal(order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0))
    }

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(orderId, paymentResult))
    }

    useEffect(() => {
        dispatch(getOrderDetails(orderId));
    }, [dispatch, orderId])

    useEffect(() => {
        const addPayPalScript = async () => {
            const { data: clientId } = await axios.get('/api/config/paypal');
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.async = true

            script.onload = () => {
                setSdkReady(true)
            }
            document.body.appendChild(script)
        }
        if (!order || successPay) {
            dispatch(getOrderDetails(orderId));
            dispatch({ type: ORDER_PAY_RESET });
        }
        else if (!order.isPaid) {
            if (!window.paypal) {
                addPayPalScript()
            } else {
                setSdkReady(true)
            }
        }
    }, [dispatch, orderId, order, successPay])

    return (

        loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> :
            <>
                <h2>Order Id {order._id}</h2>
                <Row>
                    <Col md={8}>
                        <Card className='p-3'>
                            <ListGroup.Item variant="flush">
                                <h2>Shipping</h2>
                                <p><strong>Name : </strong>{order.user.name}</p>
                                <p><strong>Email : </strong>{order.user.email}</p>
                                <p>
                                    <strong>Address :</strong>&nbsp;
                                    {order.shippingAddress.address}&nbsp;&nbsp;
                                    {order.shippingAddress.city}&nbsp;&nbsp;
                                    {order.shippingAddress.postalCode}&nbsp;&nbsp;
                                    {order.shippingAddress.country}&nbsp;&nbsp;
                                </p>
                                {order.isDelivered ? (
                                    <Alert variant="success">{order.isDelivered}</Alert>
                                ) : (
                                    <Alert variant="danger">Not Delivered</Alert>
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h2>Payment Method</h2>
                                <p><strong>{order.paymentMethod}</strong></p>
                                {
                                    order.isPaid ? <Alert variant="success">Paid On {order.paidAt}</Alert> : <Alert variant="danger">Not Paid</Alert>
                                }
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h2>Order Items</h2>
                                {order.orderItems.length === 0 ? (<Message>Your cart is Empty !!</Message>) :
                                    (<ListGroup variant="flush">
                                        {order.orderItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={2} sm={5}>
                                                        <Image src={item.image} alt={item.name} fluid />
                                                    </Col>
                                                    <Col>
                                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty}  X  ${item.price} = ${item.qty * item.price}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>)}
                            </ListGroup.Item>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h2>Order Summary</h2>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Items</Col>
                                        <Col>$ &nbsp;{order.itemsPrice}</Col>
                                    </Row>
                                    <Row>
                                        <Col>Shipping</Col>
                                        <Col>$ &nbsp;{order.shippingPrice}</Col>
                                    </Row>
                                    <Row>
                                        <Col>Tax</Col>
                                        <Col>$ &nbsp;{order.taxPrice}</Col>
                                    </Row>
                                    <Row>
                                        <Col>Total</Col>
                                        <Col>$ &nbsp;{order.totalPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup>
                        </Card>
                        {!order.isPaid && (<ListGroup.Item>
                            {loadingPay && <Loader />}
                            {!sdkReady ? (<Loader />) : (
                                <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler} />
                            )}
                        </ListGroup.Item>)}
                        <div className="d-flex align-items-center justify-content-center mt-5 h-25">
                            <Button variant="primary" onClick={() => navigate("/profile")}>view all orders</Button>
                        </div>
                    </Col>
                </Row>
            </>
    )
}

export default OrderPage
