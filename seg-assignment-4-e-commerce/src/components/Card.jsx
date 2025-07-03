import { useState } from 'react'
import './Card.css'

function Card(
    {
        cardData
    }
) {
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
      <div className='card-component'>
        <img src={imageUrl}/>
        <h1 className="text-start">{name}</h1>
        <h2>${isOnSale ? previousPrice : currentPrice}</h2>
        <button>Add to Cart</button>
      </div>
    </>
  )
}

export default Card
