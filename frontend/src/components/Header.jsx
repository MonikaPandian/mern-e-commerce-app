import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import "../App.css"

const Header = () => {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        navigate("/")
    }

    return (
        <>
            <Navbar bg="primary" expand="lg" variant="dark" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>E-SHOP SPOT</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto"
                            style={{ maxHeight: '150px' }}
                            navbarScroll
                        > <LinkContainer to="/">
                                <Nav.Link>
                                    <i className="fa-solid fa-house"></i>&nbsp;&nbsp;HOME
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <i className="fa-solid fa-cart-shopping"></i><span className="badge">{cartItems.length}</span>CART
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id="username">
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>
                                            Profile
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/my-orders'>
                                        <NavDropdown.Item>
                                            My Orders
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/wishlist'>
                                        <NavDropdown.Item>
                                            Wishlist
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (<LinkContainer to="/login">
                                <Nav.Link>
                                    <i className="fa-solid fa-user"></i>&nbsp;&nbsp;SIGN IN</Nav.Link>
                            </LinkContainer>)}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
