import React from 'react';
import '../ProductList.css';


function ProductList() {
  const products = [
    { id: 1, name: 'Product 1', price: 100, image: "product1.jpg" },
    { id: 2, name: 'Product 2', price: 200, image: "product1.jpg"},
    { id: 3, name: 'Product 3', price: 300, image: "product1.jpg" },
    { id: 4, name: 'Product 4', price: 400, image: "product1.jpg" },
    { id: 5, name: 'Product 5', price: 500, image: "product1.jpg" },
    { id: 6, name: 'Product 6', price: 600, image: "product1.jpg" },
    { id: 7, name: 'Product 7', price: 700, image: "product1.jpg" },
    { id: 8, name: 'Product 8', price: 800, image: "product1.jpg" },
    { id: 9, name: 'Product 9', price: 900, image: "product1.jpg" },

  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="price">Rs.{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
