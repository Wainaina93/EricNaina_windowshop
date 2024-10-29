"use client"
import React, { useEffect, useState } from 'react'
import ProductImage from '@/app/components/ProductDetail/ProductImage'
import ProductInfo from '@/app/components/ProductDetail/ProductInfo'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import app from '@/app/firebase'
import { HiArrowSmallLeft } from "react-icons/hi2";
import { useRouter } from 'next/navigation'

function ProductDetail({}) {
  const router=useRouter();
  const db=getFirestore(app);
  const [productDetail, setProductDetail]=useState([]);

  useEffect(()=>{
  getProductDetail();
  },[]) 
  
 const getProductDetail=async()=>{
      const docRef = doc(db, 'user',email );
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {

        setProductDetail( docSnap.data())
      } else {

        console.log("There is No such document!");
      }
  }
  return (
    <div>
   {productDetail? 
     <div className=' bg-white p-3 md:p-12 rounded-2xl md:px-24 lg:px-36'>
       <HiArrowSmallLeft className='text-[60px] font-bold ml-[-50px] 
       cursor-pointer hover:bg-gray-200 rounded-full p-2 '
       onClick={()=>router.back()}/>

       <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-10 shadow-lg
         rounded-2xl p-3 md:p-7 lg:p-12 xl:pd-16 '>

          <ProductImage productDetail={productDetail} />
           <div className="">
             <ProductInfo productDetail={productDetail}/>
           </div>
        </div>

    </div>:null}
    </div>
    
  )
}

export default ProductDetail