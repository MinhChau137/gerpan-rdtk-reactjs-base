import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Pagination from 'src/components/Pagination';

export default function ProductTable({ products, productsCount, filter, setFilter }) {
  return (
    <>
      <Row>
        {products.length &&
          products.map((product, index) => (
            <Col xs={6} md={3}>
              <ProductCard key={index} product={product} />
            </Col>
          ))}
      </Row>
      <Row style={{ marginTop: '30px' }}>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            page={filter.page}
            pagesCount={Math.floor(productsCount / filter.limit)}
            setPage={(newPage) => setFilter((filter) => ({ ...filter, page: newPage }))}
          />
        </Col>
      </Row>
    </>
  );
}
