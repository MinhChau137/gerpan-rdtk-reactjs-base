import React from 'react';
import './Card.css';

function Card({ product }) {
  return (
    <div className="product">
      <div className="wrapper">
        <div className="card">
          <a href='#' className="product__item">
            <div className="product-img">
              <img src="https://product.hstatic.net/200000182297/product/50_dae94e8fe445475cb4c3ef66000c0b59_1024x1024.jpg" />
              <div className="product-hover">
                <button>Tư vấn</button>
              </div>
            </div>
            <div className="infor-item">
              <div className="name">{product.title}</div>
              <div className="cost">{product.web_price}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
