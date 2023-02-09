import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../components/shared/Loader';
import Message from '../components/shared/Message';
import { resetPassword } from "../actions/userActions";
import FormContainer from '../components/shared/FormContainer';
import { useState } from 'react';

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const { id, token } = useParams();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('')

    const dispatch = useDispatch();
    const userResetPassword = useSelector((state) => state.userResetPassword)
    const { loading, error, success, userResetPasswordInfo } = userResetPassword

    const submitHandler = (e) => {
        e.preventDefault();
        setMessage('');
        if (!password || !confirmPassword) {
            setMessage('Please fill all the fields');
            return;
        }
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }
        dispatch(resetPassword(password, id, token));
        setPassword('')
        setConfirmPassword('');
    }

    return (
        <>
            <FormContainer>
                <h1>RESET PASSWORD</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Message variant="success">Password updated !!</Message>}
                {loading && <Loader />}
                {message && <Message variant="danger">{message}</Message>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="password" className='mt-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="confirm-password" className='mt-3'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Repeat password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="primary" className='mt-3 w-50'>UPDATE PASSWORD</Button><br />
                </Form>
            </FormContainer>
        </>
    )
};

export default ResetPasswordPage;
