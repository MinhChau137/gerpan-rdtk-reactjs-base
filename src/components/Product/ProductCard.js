import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function ProductCard({ product }) {
  return (
    <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}
