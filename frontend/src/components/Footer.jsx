import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col className='text-center'>
                            <span className='text-center'>Copyright &copy; E-Shoppers</span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer
