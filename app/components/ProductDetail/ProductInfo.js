import React from 'react'


function ProductInfo() {
    
  return (
    <div>
    <h2 className='text-[30px] font-bold mb-10'>{productDetail.title}</h2>
    
    <h2 className='mt-10'>{productDetail.desc}</h2>
    <button className='p-2 bg-[#e9e9e9] px-5 text-[23px]
    mt-10 rounded-full hover:scale-105 transition-all'
    onClick={()=>window.open(productDetail.link)}>Open Url</button>
   </div>
  )
}

export default ProductInfo