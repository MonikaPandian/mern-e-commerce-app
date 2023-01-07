import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Form, Alert, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../components/shared/Loader';
import Message from '../components/shared/Message';
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { useState } from 'react';
import { listMyOrders } from "../actions/orderActions"
import { ORDER_CREATE_REQUEST } from '../constants/orderConstants';
import { LinkContainer } from "react-router-bootstrap";

const ProfilePage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const orderList = useSelector((state) => state.orderList)
    const { loading: loadingOrders, orders, error: errorOrders } = orderList

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else if (!user.name) {
            dispatch(getUserDetails('profile'));
            dispatch(listMyOrders());
        } else {
            setName(userInfo.name)
            setEmail(userInfo.email)

        }
    }, [userInfo, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        }
        //dispatch
        else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    return (
        <>
            <Row>
                <Col md={3}>
                    <h1>Profile Details</h1>
                    {error && <Message variant="danger">{error}</Message>}
                    {success && <Message variant="success">Profile Updated</Message>}
                    {loading && <Loader />}
                    {message && <Message variant="danger">{message}</Message>}
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="name" className='mt-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="email" className='mt-3'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="password" className='mt-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="confirmPassword" className='mt-3'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Re-enter password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button type="submit" variant="primary" className='mt-3'>UPDATE</Button>
                    </Form>
                </Col>
                <Col md={9} >
                    <h1 className='d-flex justify-content-center'>MY ORDERS</h1>
                    {
                        loadingOrders ? <Loader /> : errorOrders ? <Alert variant="danger">{errorOrders}</Alert> : (
                            <Table striped bordered hover responsive className="table-sm text-center">
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
                                                    <i className='fas fa-times' style={{ color: 'red' }}></i>)}</td>
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
        </>
    )
};

export default ProfilePage;
