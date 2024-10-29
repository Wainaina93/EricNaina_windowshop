"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import {HiSearch, HiBell, HiChat } from "react-icons/hi";
import { UserAuth } from '../context/AuthContext';
import {  useRouter } from 'next/navigation';
import { doc, getFirestore, setDoc } from "firebase/firestore";
import app from '../firebase';


function Header() {
 const router= useRouter();

 const{user, googleSignIn, logOut} = UserAuth()

 const db = getFirestore(app);

 useEffect(()=>{
  saveUserInfo();
 },
 [user]
 )

 

 const saveUserInfo =async()=>{
  try{
    await setDoc(doc(db, "user", user.email),{
      userName: user.displayName,
      email:  user.email,
      image: user.photoURL
    })
  }catch(error){
    console.log(error)
  }
 }


 const handleSignIn = async () => {
  try{
    await googleSignIn()
  }catch(error) { 
    console.log(error)
  }
 };

 const handleSignOut = async () => {
  try{
    await logOut()
  }catch(error) {
    console.log(error)
  }
 }

    
  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
        <Image src='/nainalogo.png' alt='logo' width={50} height={50} priority={true} 
        className='rounded-full cursor-pointer'
        onClick={()=>router.push('/')}/>

        <button className='font-semibold p-2 px-4 cursor-pointer 
          bg-green-700 text-white rounded-full'
          onClick={()=>router.push('/')} >Home
          </button>
       
        <button className='font-semibold p-2 px-4 rounded-full'  
            onClick={()=> router.push('/product-builder')}>AddProduct
            </button>

          <div className='bg-neutral-200 p-3 gap-3 items-center rounded-full w-full hidden md:flex'>
            <HiSearch className='text-[25px] text-neutral-600 ' />
            <input type= 'text' placeholder='Search' className='bg-transparent outline-none w-full '/>
            
          </div>
              <HiSearch className='text-[25px]
               text-neutral-600 md:hidden '/>
              <HiBell className='text-[40px] text-neutral-600'/>
              <HiChat className='text-[40px] text-neutral-600'/>
              
              {!user ? ( <div className='flex'>
              <button onClick={handleSignIn} className='font-semibold p-2 px-4 cursor-pointer bg-green-700 text-white rounded-full'>Login</button>
              <button onClick={handleSignIn} className='font-semibold p-2 px-4 cursor-pointer bg-green-700 text-white rounded-full'>SignUp</button>
              </div>
              ) : (
                <div className='cursor-pointer flex'>
                  <p onClick={()=>router.push('/'+user?.email)}>{user.displayName} </p> 
                   
                  <p onClick={handleSignOut} className='bg-green-700 text-white p-2 px-4 rounded-full'>SignOut</p>
                </div>
              )}
             
    </div>
  )
};

export default Header