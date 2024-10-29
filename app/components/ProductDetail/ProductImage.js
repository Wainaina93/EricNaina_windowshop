import React from 'react'
import Image from 'next/image'

function ProductImage({productDetail}) {
  return (
    <div>
      <Image src={productDetail.image}
      alt={productDetail.title}
      width={1000}
      height={1000}

      className='rounded-2xl'
      />

    </div>
  )
}

export default ProductImage 