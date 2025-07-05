import { useState } from 'react'
import './Card.css'

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
      <div className='card-component row'>
        <img className="col-2" src={imageUrl}/>
        <h1 className="text-start col-4">{name}</h1>
        <h2 className="col-4">${isOnSale ? previousPrice : currentPrice}</h2>
        <button 
          className="col-2"
          onClick={handleRemoveFromCartClick}
        >Remove from Cart</button>
      </div>
    </>
  )
}

export default CardCondensed
