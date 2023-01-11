import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Row, Col, Carousel } from "react-bootstrap";
import ProductPage from "./ProductPage";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import { Link } from "react-router-dom";

const HomePage = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const generalProducts = products.filter(function (product) {
        return product.display === "home";
    });

    const data = [
        {
            image: '/carousel/home.jpg',
            category: 'home-essentials'
        },
        {
            image: '/carousel/beauty.jpg',
            category: 'beauty-products'
        },
        {
            image: '/carousel/headphones.jpg',
            category: 'headphones'
        },

    ]

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (<>
                <Carousel variant="dark">
                    {data.map((item, index) => (
                        <Carousel.Item key={index} interval={3000}>
                            <Link to={`/${item.category}`}>
                                <img
                                    className="d-block w-100"
                                    src={item.image}
                                    alt="First slide"
                                />
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>

                <h2 className="mt-4">PRODUCTS</h2>
                <Row style={{ caretColor: "transparent" }}>
                    {generalProducts.map((product) => (
                        <Col key={product._id} xxl={3} xl={4} md={6} sm={12} className="mb-2">
                            <ProductPage product={product} />
                        </Col>
                    ))}
                </Row>
            </>
            )}
        </>
    );
};

export default HomePage;