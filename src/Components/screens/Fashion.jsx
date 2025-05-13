// import React, { useState } from "react";
// import { FaCartPlus, FaTags } from "react-icons/fa";
// import { Collapse } from "react-bootstrap";

// const ShowFashion = () => {
//   const [openInfo, setOpenInfo] = useState(null);

//   const fashionItems = [
//     {
//       id: 1,
//       title: "Men's Leather Jacket",
//       category: "Men",
//       price: "₹2,499",
//       image: "https://via.placeholder.com/200x250",
//       offer: "20% OFF",
//       description: "High-quality leather jacket for winter wear.",
//     },
//     {
//       id: 2,
//       title: "Men's Casual Shirt",
//       category: "Men",
//       price: "₹799",
//       image: "https://via.placeholder.com/200x250",
//       offer: "Flat ₹100 OFF",
//       description: "Cotton shirt with a stylish checked pattern.",
//     },
//     {
//       id: 3,
//       title: "Women's Party Gown",
//       category: "Women",
//       price: "₹3,299",
//       image: "https://via.placeholder.com/200x250",
//       offer: "15% OFF",
//       description: "Elegant party gown with shimmer work.",
//     },
//     {
//       id: 4,
//       title: "Women's Denim Jacket",
//       category: "Women",
//       price: "₹1,299",
//       image: "https://via.placeholder.com/200x250",
//       offer: "₹200 Cashback",
//       description: "Trendy cropped denim jacket with stretch fit.",
//     },
//   ];

//   return (
//     <div className="container my-5">
//       <h2 className="mb-4 text-center text-primary">🛍 Fashion Picks for You</h2>

//       <div className="row g-4">
//         {fashionItems.map((item) => (
//           <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
//             <div className="card h-100 shadow-sm">
//               <div className="position-relative">
//                 <img
//                   src={item.image}
//                   className="card-img-top"
//                   alt={item.title}
//                 />
//                 <span className="badge bg-danger position-absolute top-0 start-0 m-2">
//                   <FaTags /> {item.offer}
//                 </span>
//               </div>
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <h5 className="card-title">{item.title}</h5>
//                 <p className="card-text fw-bold">{item.price}</p>

//                 <button
//                   className="btn btn-outline-secondary btn-sm mb-2"
//                   onClick={() =>
//                     setOpenInfo(openInfo === item.id ? null : item.id)
//                   }
//                   aria-controls={`collapse-${item.id}`}
//                   aria-expanded={openInfo === item.id}
//                 >
//                   {openInfo === item.id ? "Hide Details" : "More Info"}
//                 </button>

//                 <Collapse in={openInfo === item.id}>
//                   <div id={`collapse-${item.id}`}>
//                     <p className="text-muted small">{item.description}</p>
//                   </div>
//                 </Collapse>

//                 <button className="btn btn-primary w-100 mt-auto">
//                   <FaCartPlus /> Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShowFashion;







import React from "react";
import { FaCartPlus } from "react-icons/fa"; // Add this for the cart icon
import men1 from "../../vendors/M1.jpeg";
import men2 from "../../vendors/M2.jpeg";
import men3 from "../../vendors/M3.jpeg";
import women1 from "../../vendors/F1.jpeg";
import women2 from "../../vendors/F2.jpeg";
import women3 from "../../vendors/F3.jpeg";
import shirt1 from "../../vendors/shirt1.jpg"
import Anarkali1 from "../../vendors/Anarkali1.jpg"
import westerntop1 from "../../vendors/westerntop1.jpg"
import PartyGown1 from "../../vendors/PartyGown1.jpg"
import Denimj1 from "../../vendors/Denimj1.jpeg"
import blezer1 from "../../vendors/blezer1.jpg"

const ShowFashion = () => {
  const menData = [
    { img:shirt1 , title: "Casual Shirt", desc: "Comfortable cotton casual wear", price: 999, original: 1999 },
    { img: Denimj1, title: "Denim Jacket", desc: "Trendy denim for all seasons", price: 1299, original: 2599 },
    { img: blezer1, title: "Formal Blazer", desc: "Slim-fit party wear blazer", price: 1999, original: 3499 }
  ];

  const womenData = [
    { img: Anarkali1, title: "Anarkali Dress", desc: "Elegant ethnic wear", price: 899, original: 1799 },
    { img: westerntop1, title: "Western Top", desc: "Trendy wear for outings", price: 749, original: 1399 },
    { img: PartyGown1, title: "Party Gown", desc: "Perfect for festive events", price: 1499, original: 2999 }
  ];

  return (
    <div className="fashion-container">
      <header className="fashion-header">
        <h1 style={{}}>Fashion Deals</h1>
        <p>🔥Get up to 60% off on top brands!</p>
      </header>

      {/* <section className="banner-section">
        <div className="discount-banner"> Mega Fashion Sale - Up to 70% Off!</div>
      </section> */}

      <section className="category-section">
        <h2 style={{textAlign:"center", marginTop:15,marginBottom:40}}>Men's Collection</h2>
        <div className="product-grid">
          {menData.map((item, i) => (
            <div className="product-card" key={i}>
              <img src={item.img} alt={item.title} />
              <div className="card-info">
                <h5>{item.title}</h5>
                <p className="desc">{item.desc}</p>
                <p className="price">₹{item.price} <span className="original">₹{item.original}</span></p>
                <button className="btn btn-primary add-cart-btn">
                  <FaCartPlus className="me-2" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
           <div style={{justifyContent:"center",alignItems:'center',}}>
           <h2 style={{textAlign:"center", marginTop:15,marginBottom:40}}>Women's Collection</h2>

           </div>
        <div className="product-grid">
          {womenData.map((item, i) => (
            <div className="product-card" key={i}>
              <img src={item.img} alt={item.title} />
              <div className="card-info">
                <h5>{item.title}</h5>
                <p className="desc">{item.desc}</p>
                <p className="price">₹{item.price} <span className="original">₹{item.original}</span></p>
                <button className="btn btn-primary add-cart-btn">
                  <FaCartPlus className="me-2" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShowFashion;
