import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Button, Alert, Table, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../components/shared/Loader';
import { listMyOrders } from "../actions/orderActions";
import { LinkContainer } from "react-router-bootstrap";

const MyOrdersPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const orderList = useSelector((state) => state.orderList)
    const { loading: loadingOrders, orders, error: errorOrders } = orderList

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
        else {
            dispatch(listMyOrders())
        }
    }, [userInfo, navigate, dispatch])

    return (
        <Row className='d-flex justify-content-center'>
            <Col md={9}>
                <h1 className='d-flex justify-content-center'>MY ORDERS</h1>
                {orders.length === 0 ? <Alert variant="info">Your Order list is empty!!</Alert> :
                    loadingOrders ? <Loader /> : errorOrders ? <Alert variant="danger">{errorOrders}</Alert> : (
                        <Table striped bordered hover responsive className="table-sm text-center mt-3">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>DATE</td>
                                    <td>TOTAL</td>
                                    <td>PAID</td>
                                    <td>DELIEVERED</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order) => (
                                        <tr key={order._id}>
                                            <td>{order._id}</td>
                                            <td>{order.createdAt.substring(0, 10)}</td>
                                            <td>{order.totalPrice}</td>
                                            <td>{order.isPaid ? order.paidAt.substring(0, 10) : (
                                                <p style={{ color: "red" }}>Not Paid</p>)}</td>
                                            <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : (
                                                <p style={{ color: "red" }}>Not Delievered</p>)}</td>
                                            <td>
                                                <LinkContainer to={`/order/${order._id}`}>
                                                    <Button variant="light">Details</Button>
                                                </LinkContainer>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    )
                }
            </Col>
        </Row>
    )
}

export default MyOrdersPage
