import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Row, Col } from "react-bootstrap";
import ProductPage from "./ProductPage";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";

const HomePage = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row style={{ caretColor: "transparent" }}>
                    {products.map((product) => (
                        <Col key={product._id} md={3} className="mb-2">
                            <ProductPage product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
};

export default HomePage;