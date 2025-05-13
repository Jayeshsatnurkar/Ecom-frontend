import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    discount: '',
    rating: '',
    image: null,
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setProduct({
      ...product,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('discount', product.discount);
    formData.append('rating', product.rating);
    formData.append('image', product.image);

    let result
    try {
      result = await axios({
        method: "post",
        url: "http://localhost:2004/products",
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      console.log('Submitting product:', product);  // Check data before submission
      alert('Product added successfully');
    } catch (error) {
      console.error('There was an error uploading the product!', error);
    }
  };

  return (
    <div className='container text-center p-3 '>
      <h2>Add Product</h2>
      <div className="d-flex m-5 p-3">
        <form onSubmit={handleSubmit} className='form-control'>
          <input className='form-control mt-3' type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} />
          <input className='form-control mt-3' type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
          <input className='form-control mt-3' type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
          <input className='form-control mt-3' type="number" name="discount" placeholder="Discount (%)" value={product.discount} onChange={handleChange} required />
          <input className='form-control mt-3' type="number" name="rating" placeholder="Rating (out of 5)" value={product.rating} onChange={handleChange} required />
          <input className='form-control mt-3' type="file" name="image" onChange={handleImageChange} required />
          <button type="submit" className='btn btn-success mt-3 '>Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
