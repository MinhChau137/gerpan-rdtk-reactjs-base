import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGetAllProducts,
  selectProducts,
  selectProductsCount
} from 'src/features/Product/productSlice';
import { Container } from 'react-bootstrap';
import ProductList from 'src/components/Product/ProductList';

const Product = () => {
  const dispatch = useDispatch();

  // local state
  const [filter, setFilter] = useState({
    page: 1,
    limit: 8,
    name: ''
  });

  // global state
  const productsCount = useSelector(selectProductsCount);
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchGetAllProducts(filter));
  }, [dispatch, filter]);

  return (
    <>
      <Helmet>
        <title>Product | Gerpan</title>
      </Helmet>
      <Container>
        {!!products && (
          <ProductList
            products={products}
            productsCount={productsCount}
            filter={filter}
            setFilter={setFilter}
          />
        )}
      </Container>
    </>
  );
};

export default Product;
