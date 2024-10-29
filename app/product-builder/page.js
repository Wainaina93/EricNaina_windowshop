"use client"
import React from 'react'
import Form from './../components/Form'
import { UserAuth } from '../context/AuthContext';


function ProductBuilder() {
  const {user}= UserAuth()
  return (
     <div className='bg-[#e9e9e9] min-h-screen p-8 
     px-[10px] md:px-[160px]'>
      {user? (<Form/>):(
        <p>You must be logged In to view this page - Protected route</p>
      )}
      
    </div>
  )
}

export default ProductBuilder