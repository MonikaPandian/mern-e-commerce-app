import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveShippingAddress } from '../actions/cartActions'
import FormContainer from '../components/shared/FormContainer'
import CheckoutStep from '../components/shared/CheckoutStep'

const ShippingPage = () => {

    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart
    const dispatch = useDispatch();

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault();
        //dispatch
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        navigate('/payment')
    }

    return (
        <>
            <FormContainer>
                <CheckoutStep step1 step2 />
                <h1>Shipping Address</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="address" className='mt-3'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} required>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="city" className='mt-3'>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} required>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="postalCode" className='mt-3'>
                        <Form.Label>Postal code</Form.Label>
                        <Form.Control type="text" placeholder="Enter postal code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="country" className='mt-3'>
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" placeholder="Enter Country" value={country} onChange={(e) => setCountry(e.target.value)} required>
                        </Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="primary" className='mt-3'>CONTINUE</Button>
                </Form>
            </FormContainer>
        </>
    )
}

export default ShippingPage
