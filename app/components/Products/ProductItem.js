import React from 'react'
import UserTag from '../UserTag'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import ProductDetail from '@/app/product/[productId]/page';


function ProductItem({product}) {
  const router=useRouter();
    const user={
        name:product?.userName,
        
    }

  return (
    
    <div className=''>
       <div class="relative 
       before:absolute
       before:h-full before:w-full
       before:rounded-3xl
       before:z-10
       hover:before:bg-gray-600 
       before:opacity-50
       cursor-pointer
       "onClick={()=>router.push("/product-builder"+ product.title)}>

        <Image src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className='rounded-3xl 
        cursor-pointer relative z-0'
        />
        <h2 className='font-bold 
        text-[18px] mb-1 mt-2 line-clamp-2'>{product.title}</h2>
       </div>
        
       <UserTag user={user} />
    
  

    </div>
  )
}

export default ProductItem