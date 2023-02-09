import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../components/shared/Loader';
import Message from '../components/shared/Message';
import { login } from "../actions/userActions";
import FormContainer from '../components/shared/FormContainer';
import { useState } from 'react';

const LoginPage = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const submitHandler = (e) => {
        e.preventDefault();
        //dispatch
        dispatch(login(email, password));
    }

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    return (
        <>
            <FormContainer>
                <h1>SIGN IN</h1>
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="email" className='mt-3'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="password" className='mt-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="forgot-password-link" className='mt-3' align="right">
                        <Row className='mt-3' onClick={() => navigate("/forgot-password")}>
                            <Col>
                                <Link to="/register"> Forgot Password ?</Link>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Button type="submit" variant="primary" className='mt-3 w-50' >SIGN IN</Button><br />
                    <Button type="button" variant="info" className='mt-3 w-50' onClick={() => { setEmail("guest@example.com"); setPassword("123456") }}>Get guest user credentials</Button>
                </Form>
                <Row className='mt-3'>
                    <Col>
                        New User ?&nbsp;
                        <Link to="/register">Register</Link>
                    </Col>
                </Row>
            </FormContainer>
        </>
    )
};

export default LoginPage;
