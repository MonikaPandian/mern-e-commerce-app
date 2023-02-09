import React from 'react';
import { Button, Form, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../components/shared/Loader';
import Message from '../components/shared/Message';
import { forgotPassword } from "../actions/userActions";
import FormContainer from '../components/shared/FormContainer';
import { useState } from 'react';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();
    const userForgotPassword = useSelector((state) => state.userForgotPassword)
    const { loading, error, success } = userForgotPassword

    const submitHandler = (e) => {
        e.preventDefault();
        setMessage('');
        if (!email) {
            setMessage('Please enter your email');
            return;
        }
        dispatch(forgotPassword(email));
        setEmail('');
    }

    return (
        <>
            <FormContainer>
                <h1>FORGOT PASSWORD</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Message variant="success">Password reset link sent successfully to your mail.</Message>}
                {loading && <Loader />}
                {message && <Message variant="danger">{message}</Message>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="email" className='mt-3'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="primary" className='mt-3' >SEND PASSWORD RESET MAIL</Button><br />
                </Form>
            </FormContainer>
        </>
    )
};

export default ForgotPasswordPage;
