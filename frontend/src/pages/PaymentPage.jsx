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

    const handlePayment = (e) => {
        setPaymentMethod(e.target.value)
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
                <Form.Label as="legend">
                    Select Payment Method
                </Form.Label>
                <div>
                    <Form.Check type="radio" label="Paypal or Credit Card" id="paypal" name="payment" value="Paypal" checked onChange={handlePayment}>
                    </Form.Check>
                    <Form.Check type="radio" label="Pay on Delievery" id="payOnDelivery" name="payment" value="pay On Delivery" onChange={handlePayment}>
                    </Form.Check>
                </div>
                <Button type="submit" variant="primary" className='mt-3'>Continue</Button>
            </Form>
        </>
    )
}

export default PaymentPage
