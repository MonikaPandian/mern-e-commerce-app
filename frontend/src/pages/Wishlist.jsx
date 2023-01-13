import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Button, Image, ListGroupItem, Form, Alert } from "react-bootstrap";
import { addToCart, removeFromWishlist } from '../actions/cartActions';
import { Link, useNavigate } from 'react-router-dom';

const Wishlist = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)
    const { wishlist } = cart;
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);

    const addToCartHandler = (id) => {
        dispatch(addToCart(id, qty));
        navigate("/cart");
    }

    const removeFromWishlistHandler = (id) => {
        dispatch(removeFromWishlist(id))
    }

    return (
        <>
            <Row className='d-flex'>
                <Col md={8}>
                    <h3>Wishlist</h3>
                    {
                        wishlist.length === 0 ? (
                            <Alert variant="info">Your wishlist is empty !! <Link to="/">start shopping</Link></Alert>
                        ) : (<ListGroup variant="flush">
                            {wishlist.map((item) => (
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
                                                value={qty}
                                                onChange={(e) => setQty(e.target.value)}
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                        <Col md={3}>
                                            <Button
                                                type="button"
                                                variant="primary" className='mt-2'
                                                onClick={() => addToCartHandler(item.productId, qty)}
                                            >
                                                Add to Cart
                                            </Button>
                                            <Button
                                                type="button"
                                                variant="light" className='mt-2'
                                                onClick={() => removeFromWishlistHandler(item.productId)}
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

            </Row>
        </>
    )
}

export default Wishlist
