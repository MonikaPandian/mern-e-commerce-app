import React from 'react';
import { Row, Col, ListGroup, Button, Image, ListGroupItem, Form } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import Rating from "../components/Rating";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/shared/Loader';
import Message from '../components/shared/Message';
import { addToCart, addToWishlist } from '../actions/cartActions';
import toast, { Toaster } from 'react-hot-toast';

const ProductDetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(id));
    }, [dispatch, id]);

    const addToCartHandler = (e) => {
        dispatch(addToCart(id, qty));
        navigate("/cart");
    }

    const addToWishlistHandler = (e) => {
        dispatch(addToWishlist(id, qty));
        toast.success('Product added to wishlist')
    }

    return (
        <>
            {
                loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : <div>
                    <Link to="/" className='btn btn-light mb-2'><i className="fa-solid fa-arrow-left"></i> &nbsp;GO BACK</Link>
                    <Row style={{ caretColor: "transparent" }}>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid />
                        </Col>
                        <Col md={6}>
                            <ListGroup variant="flush">
                                <ListGroupItem>
                                    <h3>{product.name}</h3>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                                </ListGroupItem>
                                <ListGroupItem>
                                    Price: $ {product.price}
                                </ListGroupItem>
                                <ListGroupItem>
                                    {product.description}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Status : <b>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</b>
                                </ListGroupItem>
                                {
                                    product.countInStock > 0 && (
                                        <ListGroupItem>
                                            Quantity :
                                            <Form.Select value={qty} onChange={(e) => setQty(e.target.value)}>
                                                {[...Array(product.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </ListGroupItem>
                                    )
                                }
                                <ListGroupItem className='d-flex gap-3'>
                                    <Button className="btn" type="button"
                                        disabled={product.countInStock === 0} onClick={addToCartHandler}>Add to cart</Button>
                                    <Button className="btn-info" type="button"
                                        disabled={product.countInStock === 0} onClick={addToWishlistHandler}><i className="fa-solid fa-heart"></i>&nbsp;&nbsp;Add to wishlist</Button>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Toaster position="top-center"
                        reverseOrder={false} />
                </div>
            }
        </>
    )
}

export default ProductDetailsPage