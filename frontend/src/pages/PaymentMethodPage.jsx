import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutStep from "../components/shared/CheckoutStep";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/shared/FormContainer'

const PaymentMethodPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { shippingAddress, paymentMethod } = cart;

    const [paymentMethodName, setPaymentMethod] = useState(paymentMethod || 'PayPal');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethodName));
        navigate("/place-order")
    }

    useEffect(() => {
        if (!shippingAddress) {
            navigate('/shipping');
        }
    }, [shippingAddress, navigate]);

    return (
        <>
            <FormContainer>
                <CheckoutStep step1 step2 step3 />
                <h1>Payment Method</h1>
                <Form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <Form.Check
                            type="radio"
                            id="PayPal"
                            label="PayPal"
                            value="PayPal"
                            checked={paymentMethodName === 'PayPal'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <Form.Check
                            type="radio"
                            id="PayOnDelivery"
                            label="Pay On Delivery"
                            value="Pay On Delivery"
                            checked={paymentMethodName === 'Pay On Delivery'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <Button type="submit">Continue</Button>
                    </div>
                </Form>
            </FormContainer>
        </>
    )
}

export default PaymentMethodPage


