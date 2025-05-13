import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import Basmati1 from "../../vendors/Basmati1.jpg"
import Wheat1 from "../../vendors/Wheat1.jpg"
import oil1 from "../../vendors/oil1.jpg"
import Amul1 from "../../vendors/Amul1.jpg"
import Tomato1 from "../../vendors/Tomato1.jpg"
import Potato1 from "../../vendors/Potato1.jpg"
import onion1 from "../../vendors/onion1.jpg"
import Tea1 from "../../vendors/Tea1.jpg"
import sugar1 from "../../vendors/sugar1.jpg"
import salt1 from "../../vendors/salt1.jpg"

const groceryItems = [
  { id: 1, name: "Basmati Rice 5kg", price: 449, image: Basmati1, discount: "10% OFF" },
  { id: 2, name: "Wheat Flour 10kg", price: 349, image: Wheat1, discount: "15% OFF" },
  { id: 3, name: "Sunflower Oil 1L", price: 149, image: oil1, discount: "12% OFF" },
  { id: 4, name: "Milk 1L", price: 59, image: Amul1, discount: "5% OFF" },
  { id: 5, name: "Fresh Tomatoes 1kg", price: 35, image: Tomato1, discount: "18% OFF" },
  { id: 6, name: "Potatoes 5kg", price: 99, image: Potato1, discount: "10% OFF" },
  { id: 7, name: "Onions 2kg", price: 49, image: onion1, discount: "7% OFF" },
  { id: 8, name: "Tea Powder 500g", price: 149, image: Tea1, discount: "14% OFF" },
  { id: 9, name: "Sugar 1kg", price: 45, image: sugar1, discount: "8% OFF" },
  { id: 10, name: "Salt 1kg", price: 20, image: salt1, discount: "5% OFF" },
];

const ShowGrocery = () => {
  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="container py-4">
      <h2 className="text-success fw-bold mb-3">Grocery Store</h2>

      <div className="alert alert-success fw-semibold">
        🍎 Flat discounts on daily essentials! Stock up now.
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {groceryItems.map((item) => (
          <div key={item.id} className="col">
            <div className="card h-100 shadow-sm">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title fw-bold">{item.name}</h6>
                <p className="mb-2">
                  <span className="text-success fw-bold">₹{item.price}</span>
                  <span className="badge bg-warning text-dark ms-2">{item.discount}</span>
                </p>
                <button
                  className="btn btn-outline-success mt-auto"
                  onClick={() => handleAddToCart(item)}
                >
                  <FaCartPlus className="me-1" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowGrocery;
