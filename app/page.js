'use client'
import Image from 'next/image'

import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import app from './firebase';
import { useEffect, useState } from 'react';

import PproductList from './components/Products/PproductList';

export default function Home() {
  const db=getFirestore(app);
  const [listOfProducts,setListOfProducts]=useState([]);

  useEffect(()=>{
    getAllProducts();
  },[])
  const getAllProducts=async()=>{
    setListOfProducts([])
      const q=query(collection(db,
        'nainaWshop-post')
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {


      setListOfProducts((listOfProducts)=>
      [...listOfProducts,doc.data()]);
      });
  }

  return (
    <>
    <div className='p-3'>
      <PproductList listOfProducts={listOfProducts} />
      </div>
    </>
  )
}