import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Pagination from 'src/components/Pagination';
import Card from '../Card/Card';

export default function ProductTable({ products, productsCount, filter, setFilter }) {
  return (
    <>
      <Row>
        {!!products &&
          products.map((product, index) => (
            <Col xs={6} md={3}>
              <Card key={index} product = {product} />
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
