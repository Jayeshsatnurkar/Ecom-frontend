
import React, { useState } from 'react';
import { FaCartPlus, FaTrashAlt } from 'react-icons/fa';
import sofa1 from "../../vendors/sofa1.jpg"
import Dining1 from "../../vendors/Dining1.jpg"
import Bed1 from "../../vendors/Bed1.jpg"
import chair1 from "../../vendors/chair1.jpg"
import shelf1 from "../../vendors/shelf1.jpg"


const furnitureItems = [
  {
    id: 1,
    name: "Modern Sofa Set",
    price: 15999,
    discount: "20% OFF",
    image: sofa1
  },
  {
    id: 2,
    name: "Dining Table 6-Seater",
    price: 12499,
    discount: "15% OFF",
    image: Dining1
  },
  {
    id: 3,
    name: "King Size Bed",
    price: 18999,
    discount: "25% OFF",
    image: Bed1
  },
  {
    id: 4,
    name: "Office Chair",
    price: 3499,
    discount: "10% OFF",
    image: chair1
  },
  {
    id: 5,
    name: "Bookshelf Wooden",
    price: 5999,
    discount: "18% OFF",
    image: shelf1
  },
];

const ShowFurniture = () => {
  const [cart, setCart] = useState([]);

  const toggleCart = (item) => {
    if (cart.includes(item.id)) {
      setCart(cart.filter((id) => id !== item.id));
    } else {
      setCart([...cart, item.id]);
    }
  };

  return (
    <div className="container py-4 furniture-page">
      <h2 className="text-primary fw-bold mb-4">🪑 Premium Furniture</h2>
      <div className="alert alert-info animate-fade-in shadow-sm">
        🛋️ Stylish furniture now at up to 25% OFF! Upgrade your home today.
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {furnitureItems.map((item) => (
          <div key={item.id} className="col">
            <div className="card h-100 shadow furniture-card animate-scale-in">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold">{item.name}</h5>
                <p className="mb-2">
                  <span className="text-success fw-bold">₹{item.price}</span>{' '}
                  <span className="badge bg-warning text-dark ms-2">{item.discount}</span>
                </p>
                <button
                  className={`btn ${cart.includes(item.id) ? 'btn-danger' : 'btn-outline-primary'} mt-auto`}
                  onClick={() => toggleCart(item)}
                >
                  {cart.includes(item.id) ? (
                    <>
                      <FaTrashAlt className="me-1" /> Remove from Cart
                    </>
                  ) : (
                    <>
                      <FaCartPlus className="me-1" /> Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowFurniture;
