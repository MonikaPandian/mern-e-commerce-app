import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Form, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../components/shared/Loader';
import Message from '../components/shared/Message';
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { useState } from 'react';
import FormContainer from '../components/shared/FormContainer';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
        else {
            if (!user.name) {
                dispatch(getUserDetails("profile"));
            } else {
                setName(userInfo.name);
                setEmail(userInfo.email);
            }
        }
    }, [userInfo, navigate, dispatch, user])

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
        <FormContainer>
            <Row>
                <Col md={9}>
                    <h1>Profile Details</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
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
            </Row>
        </FormContainer>
    )
};

export default ProfilePage;
