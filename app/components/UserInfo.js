import React from 'react'

function UserInfo({userInfo}) {
    console.log(userInfo);
  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-[30px] font-semibold'>{userInfo.userName}</h2>
        <h2 className='text-gray-400'>{userInfo.email}</h2>

        <button className='bg-gray-200 p-2 px-3 font-semibold mt-5 rounded-full'>Share</button>
    </div>
  )
}

export default UserInfo