
import React from 'react'
import ProductItem from './ProductItem'

function PproductList({listOfProducts}) {
    console.log(listOfProducts)
  return (
    <div className='mt-7 px-2 md:px-5
    columns-2 md:columns-3
    lg:columns-4 mb-4
    xl:columns-5 space-y-6 mx-auto'>
      {listOfProducts.map((item,index)=>(
        <div key={index}>
          <ProductItem product={item}/>
        </div>
      ))}
    </div>
  )
}

export default PproductList