import React ,{useState} from "react";
import { FaStar, FaCartPlus } from 'react-icons/fa';
import iphone14 from "../../vendors/iphone14.jpg"
import sansungultra1 from "../../vendors/sansungultra1.jpg"
import oneplus11 from  "../../vendors/oneplus11.jpg"
import vivo31 from "../../vendors/vivo31.jpg"
import opporeno2 from "../../vendors/opporeno2.jpg"
import redminote11 from "../../vendors/redminote11.jpg"

const mobilesData = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    price: 129999,
    rating: 4.9,
    brand: 'Apple',
    image: iphone14,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23 Ultra',
    price: 99999,
    rating: 4.7,
    brand: 'Samsung',
    image: sansungultra1,
  },
  {
    id: 3,
    name: 'OnePlus 11R',
    price: 39999,
    rating: 4.2,
    brand: 'OnePlus',
    image: oneplus11,
  },
  {
    id: 4,
    name: 'Vivo Y31',
    price: 129999,
    rating: 4.9,
    brand: 'Vivo',
    image: vivo31,
  },
  {
    id: 5,
    name: 'oppo Reno2',
    price: 99999,
    rating: 4.7,
    brand: 'oppo',
    image:opporeno2,
  },
  {
    id: 6,
    name: 'Redmi note 11',
    price: 39999,
    rating: 4.3,
    brand: 'Xiomi',
    image: redminote11,
  },
 
];

const ShowMobiles = () => {
  const [sort, setSort] = useState('default');

  const sortedMobiles = [...mobilesData].sort((a, b) => {
    if (sort === 'low') return a.price - b.price;
    if (sort === 'high') return b.price - a.price;
    if (sort === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="mobiles-container p-4">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <h2 className="text-primary fw-bold">Mobiles</h2>
        <select className="form-select w-auto" onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="row g-4">
        {sortedMobiles.map((mobile) => (
          <div key={mobile.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card shadow-sm border-0 h-100">
              <img src={mobile.image} alt={mobile.name} className="card-img-top object-fit-contain p-3" height="180" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{mobile.name}</h5>
                <p className="card-text fw-semibold text-success">₹{mobile.price.toLocaleString()}</p>
                <div className="mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color={i < Math.floor(mobile.rating) ? '#ffc107' : '#e4e5e9'} />
                  ))}
                  <span className="ms-2 text-muted">({mobile.rating})</span>
                </div>
                <button className="btn btn-outline-primary mt-auto">
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

export default ShowMobiles;
