import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Button, Image, ListGroupItem, Form, Card, Alert } from "react-bootstrap";
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;
    const navigate = useNavigate();

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkOut = () => {
        navigate('/login?redirect=/shipping');
    }

    let cartItemsNumber = cartItems.reduce((acc, item) => acc + Number(item.qty), 0)

    return (
        <>
            <Row>
                <Col md={8}>
                    <h3>Shopping cart</h3>
                    {
                        cartItems.length === 0 ? (
                            <Alert>Your cart is empty !! <Link to="/">start shopping</Link></Alert>
                        ) : (<ListGroup variant="flush">
                            {cartItems.map((item) => (
                                <ListGroupItem key={item.productId}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.productId}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>${item.price}</Col>
                                        <Col md={2}>
                                            <Form.Select
                                                value={item.qty}
                                                onChange={(e) => dispatch(addToCart(item.productId, Number(e.target.value)))}
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                            <Button
                                                type="button"
                                                variant="light" className='mt-2'
                                                onClick={() => removeFromCartHandler(item.productId)}
                                            >
                                                <i
                                                    className="fa fa-trash text-danger"
                                                    aria-hidden="true"
                                                ></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                        )}
                </Col>
                <Col md={4} className="mt-5">
                    <Card>
                        <ListGroup>
                            <ListGroupItem>
                                <h2>Subtotal ${cartItems.reduce((acc, item) => acc + Number(item.qty) * Number(item.price), 0).toFixed(2)}</h2>
                            </ListGroupItem>
                            <Button type="button" className='btn-block btn-large' disabled={cartItems.length === 0} onClick={checkOut}>PROCEED TO BUY ({cartItemsNumber} {cartItemsNumber > 1 ? 'items' : 'item'})</Button>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default CartPage

