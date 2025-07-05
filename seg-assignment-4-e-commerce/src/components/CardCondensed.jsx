import { useState } from 'react'
import './Card.css'
import Button from 'react-bootstrap/Button';
import PlaceholderImage from '../assets/placeholder.png'

function CardCondensed(
    {
        cardData,
        removeFromCart,
    }
) {

    function handleRemoveFromCartClick() {
      removeFromCart(cardData)
    }

    const name = cardData.name;
    const categories = cardData.categories;
    const imageUrl = cardData.imageUrl;
    const manufacturers = cardData.manufacturers;
    const countryOfProduction = cardData.countryOfProduction;
    const currentPrice = cardData.currentPrice;
    const isOnSale = cardData.isOnSale;
    const previousPrice = cardData.previousPrice;
  
  return (
    <>
      <div className='card-component-x row justify-content-center align-items-center'>
        <img className="col-2 card-img" src={imageUrl}/>
        <h1 className="text-start col-8">{name}</h1>
        <h2 className="col-2">${isOnSale ? previousPrice : currentPrice}</h2>
        <Button 
          className="col-2 button-2"
          onClick={handleRemoveFromCartClick}
        ><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="black" class="bi bi-dash-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg></Button>
      </div>
    </>
  )
}

export default CardCondensed
