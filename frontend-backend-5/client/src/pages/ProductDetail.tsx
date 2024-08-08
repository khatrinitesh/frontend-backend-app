import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Banner from '../layout/Banner'
import BtnPrimary from '../components/BtnPrimary';

const ProductDetail = () => {
  const navigate = useNavigate();
  const btnBack= () => {
    navigate('/')
  }
  const { id } = useParams();
  console.log(id)
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;
  return (
    <div className='content'>
      <Banner title="ProductDetail" desc="Nisi tempor id velit esse irure velit deserunt ex qui magna nostrud qui."/>
      <BtnPrimary onClick={btnBack} label='Back'/>
       <div className="container mx-auto">
           <h1>{product.name}</h1>
          <p>{product.email}</p>
          <img src={product.thumbnail} alt="" />
        </div>
    </div>
  )
}

export default ProductDetail