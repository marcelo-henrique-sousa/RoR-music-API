import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { Container } from './styles';
import FavoriteService from '../../../services/favorites';

function Favorite(props) {

  const [favored, setFavored] = useState(props.favored);

  async function disfavor() {
    await FavoriteService.delete(props.kind, props.id);
    setFavored(false);
  }
  
  async function favor() {
    await FavoriteService.create(props.kind, props.id);
    setFavored(true);
  }

  var FavoredButton;
  if(favored)
    FavoredButton = <FaHeart size='25px' className='has-text-white' onClick={() => disfavor()}/>
  else
    FavoredButton = <FaRegHeart size='25px' className='has-text-white' onClick={() => favor()}/>

  return (
    <div>
      { FavoredButton }
    </div>
  );
}

export default Favorite;