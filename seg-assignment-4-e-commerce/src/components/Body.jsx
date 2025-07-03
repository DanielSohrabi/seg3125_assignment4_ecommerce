import Card from './Card'

import { placeholderCardData, testArray } from '../ItemData'


function Body() {
  return (
    <>
      <div>
        <div className="row gx-3 gy-3">
          {testArray.map((currItemData) => <div className='col-3'><Card cardData={currItemData}/></div>)}
        </div>
        
      </div>

    </>
  )
}

export default Body
