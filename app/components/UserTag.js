'use client'
import React from 'react'
import { UserAuth } from '../context/AuthContext'

function UserTag() {
  const user = UserAuth()
  
  return (
    <div>
      {user?(
        <div>
           <p >{user.displayName} </p>
        </div>
      ):(
        <p>Wiwi</p>
      )

      }
         
    </div>
  )
}

export default UserTag

