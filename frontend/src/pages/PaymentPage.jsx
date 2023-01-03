import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutStep from "../components/shared/CheckoutStep";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('Paypal');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if (!shippingAddress) {
        navigate('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate("/place-order")
    }

    return (
        <>
            <CheckoutStep step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as="legend">
                        Select Payment Method
                    </Form.Label>
                    <Col>
                        <Form.Check type="radio" label="Paypal or Credit Card" id="paypal" name="paymentMethod" value="paypal" checked onChange={(e) => setPaymentMethod(e.target.value)}>
                        </Form.Check>
                        <Form.Check type="radio" label="Strip" id="strip" name="paymentMethod" value="stripe" onChange={(e) => setPaymentMethod(e.target.value)}>
                        </Form.Check>
                    </Col>
                </Form.Group>
                <Button type="submit" variant="primary" className='mt-3'>Continue</Button>
            </Form>
        </>
    )
}

export default PaymentPage
