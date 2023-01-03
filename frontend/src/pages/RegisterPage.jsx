import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../components/shared/Loader';
import Message from '../components/shared/Message';
import { register } from "../actions/userActions";
import FormContainer from '../components/shared/FormContainer';
import { useState } from 'react';

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [userInfo, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        //dispatch
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password));
        }
    }

    return (
        <>
            <FormContainer>
                <h1>REGISTER</h1>
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader />}
                {message ? <Message variant="danger">{message}</Message> : ""}
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
                    <Button type="submit" variant="primary" className='mt-3'>REGISTER</Button>
                </Form>
                <Row className='mt-3'>
                    <Col>
                        Have an account ?
                        <Link to="/login">Login</Link>
                    </Col>
                </Row>
            </FormContainer>
        </>
    )
};

export default RegisterPage;
