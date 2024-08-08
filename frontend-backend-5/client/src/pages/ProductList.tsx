import React, { useEffect, useState } from 'react'
import Banner from '../layout/Banner'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ListBullet from '../components/listBullet';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className='content'>
      <Banner title="ProductList" desc="Nisi tempor id velit esse irure velit deserunt ex qui magna nostrud qui."/>
       <div className="container mx-auto">
        <ListBullet/>
        <br />
        <hr/>
        <h1>Product List</h1>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <Link to={`/product/${product.id}`}>
                 
                  <h2>{product.name}</h2>
                  <p>{product.email}</p>
                 
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default ProductList