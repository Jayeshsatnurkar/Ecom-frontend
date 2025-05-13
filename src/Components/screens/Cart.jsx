import React, { useState } from 'react';
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import headphonew1 from "../../vendors/headphonew1.jpeg"
import oneplus11 from "../../vendors/oneplus11.jpg"

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      brand: "AudioMax",
      price: 1499,
      quantity: 1,
      image: headphonew1
    },
    {
      id: 2,
      name: "OnePlus 11R",
      brand: "OnePlus",
      price: 24999,
      quantity: 1,
     image: oneplus11
    }
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">
        <FaShoppingCart /> Your Cart
      </h2>

      {cartItems.map(item => (
        <div key={item.id} className="card mb-3 shadow-sm">
          <div className="row g-0 align-items-center">
            <div className="col-md-2 p-2">
              <img src={item.image} alt="product" className="img-fluid rounded" />
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">Brand: {item.brand}</p>
                <p className="card-text">Price: ₹{item.price}</p>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <label className="form-label">Quantity</label>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-outline-secondary me-2"
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  -
                </button>
                <input
                  type="number"
                  className="form-control text-center"
                  value={item.quantity}
                  readOnly
                  style={{ width: "60px" }}
                />
                <button
                  className="btn btn-outline-secondary ms-2"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <button className="btn btn-outline-danger mt-4" onClick={() => handleRemove(item.id)}>
                <FaTrash /> Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Cart Summary */}
      <div className="card mt-5 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">Cart Summary</h4>
          <p className="card-text">Total Items: {totalItems}</p>
          <p className="card-text">Total Price: ₹{totalPrice.toLocaleString()}</p>
          <Link to="/checkout" className="btn btn-success w-100" disabled={cartItems.length === 0}>
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
