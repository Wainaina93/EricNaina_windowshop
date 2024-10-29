'use client'

import React, { useEffect, useState } from 'react'
import {doc, getDoc} from 'firebase/firestore'
import app from '../firebase'
import UserInfo from '../components/UserInfo'
import PproductList from '../components/Products/PproductList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

function Profile({params}) {
    const db=getFirestore(app);
    const [userInfo, setUserInfo]=useState();
    const [listOfProducts, setListOfProducts]=useState([])

    useEffect(()=>{console.log(params.userId.replace('%40','@'))
      if (params){
        getUserInfo(params.userId.replace('%40','@'))
      }
    },[params]);


    const getUserInfo=async(email)=>{
        const docRef = doc(db, "user",email);
        const docSnap = await getDoc(docRef);

       if (docSnap.exists()) {
      
       setUserInfo(docSnap.data())
       } else {
        // docSnap.data() will be undefined in this case
       console.log("No such document!");
       }
    }

    useEffect(()=>{
      if(userInfo)
      {
        getUserProducts();
      }
    },[userInfo]);

    const getUserProducts=async()=>{
      const q=query(collection(db,'nainaWshop-post'),
      where('email','==',userInfo.email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        
        setListOfProducts(listOfProducts=>[...listOfProducts,doc.data()])
      });
    }


  return (
    <div>
        {userInfo?
        <UserInfo userInfo={userInfo}/>
        
        :null}

        {userInfo?
        <PproductList listOfProducts={listOfProducts}/>
        :null}
        
        
    </div>
  )
}

export default Profile