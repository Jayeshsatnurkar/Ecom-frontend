// import React from "react";

// const ShowElectronics =()=>{
//     return(
//         <>
//         <h1>This is Electronics page !</h1>
//         </>
//     )
// }

// export default ShowElectronics



import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import headphonew1 from "../../vendors/headphonew1.jpeg"
import tv43 from "../../vendors/tv43.jpg"
import speaker1 from "../../vendors/speaker1.jpg"
import laptop1 from "../../vendors/laptop1.jpg"


const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 1999,
    oldPrice: 2999,
    image: headphonew1,
    discount: '33% OFF',
  },
  {
    id: 2,
    name: 'Smart LED TV 43"',
    price: 24999,
    oldPrice: 31999,
    image: tv43,
    discount: '22% OFF',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 1499,
    oldPrice: 1999,
    image: speaker1,
    discount: '25% OFF',
  },
  {
    id: 4,
    name: 'Laptop 15.6" i5',
    price: 45999,
    oldPrice: 55999,
    image: laptop1,
    discount: '18% OFF',
  },
];

const ShowElectronics = () => {
  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
    // Your actual add-to-cart logic here
  };

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h2 className="text-primary fw-bold">Electronics Deals</h2>
        <div className="alert alert-warning fw-semibold">
          🔥 Up to 40% OFF on top electronics! Limited Time Offers!
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((item) => (
          <div className="col" key={item.id}>
            <div className="card shadow-sm h-100">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <p className="card-text">
                  <span className="text-success fw-bold">₹{item.price}</span>
                  <span className="text-muted ms-2 text-decoration-line-through">₹{item.oldPrice}</span>
                  <span className="badge bg-danger ms-2">{item.discount}</span>
                </p>
                <button className="btn btn-primary mt-auto" onClick={() => handleAddToCart(item)}>
                  <FaCartPlus className="me-2" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowElectronics;
