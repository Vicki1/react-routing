import React from 'react';

import './Product.css';
import {Link} from 'react-router-dom';

export default function Product( { title, img, id } ) {
  return (
    <Link  to={ `/details/${id}` } id="CartProduct__navLink">
    <div id="CartProduct__container">
      <Link to={ `/details/${id}` }>
      <img alt="Product" src={ img } width="70px" height="70px" />
      </Link>
      <Link className='StoreProduct_navLink'  to={`/details/${ id }`}>
      <span id="CartProduct__title"> { title } </span>
      </Link>
   </div>
   </Link>
  )
}