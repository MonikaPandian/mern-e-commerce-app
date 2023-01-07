import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/shared/Loader';
import Message from '../components/shared/Message';
import ProductPage from './ProductPage';

const BeautyProducts = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const beautyProducts = products.filter(function (product) {
        return product.display === "beauty_products";
    });

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
                <h2>BEAUTY PRODUCTS</h2>
                <Row style={{ caretColor: "transparent" }}>
                    {beautyProducts.map((prod) => (
                        <Col key={prod._id} xxl={3} xl={4} md={4} sm={12} className="mb-2">
                            <ProductPage product={prod} />
                        </Col>
                    ))}
                </Row>
            </>)}
        </>
    )
}

export default BeautyProducts
