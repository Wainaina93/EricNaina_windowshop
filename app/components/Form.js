import React, { useState } from 'react'
import UploadImage from './UploadImage'
import { UserAuth } from '../context/AuthContext'
import UserTag from './UserTag';
import app from '../firebase';
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
import { doc, getFirestore, setDoc } from 'firebase/firestore';




function Form() {

    const {user}=UserAuth();
    const [title, setTitle]=useState();
    const [desc, setDesc]=useState();
    const [file, setFile]=useState();

    const storage = getStorage(app);
    const db=getFirestore(app)
    const postId=Date.now().toString();

    const onSave=()=>{
        console.log("Title:",title,"Desc:",desc)
        console.log("File:", file)
        uploadFile();
    }

    const uploadFile=()=>{
         const storageRef=ref(storage,'nainaWshop/'+file.name);
         uploadBytes(storageRef, file).then((snapshot)=>{
            console.log("File Uploaded ")
         }).then(resp=>{
            getDownloadURL(storageRef).then(async(url)=>{
                console.log("DownloadUrl",url)
                
                const postData={
                    title:title,
                    desc:desc,
                    image:url,
                    userName:user.displayName,
                    email:user.email,
                    id:postId
                   
                }

                await setDoc(doc(db,'nainaWshop-post', postId),
                postData).then(resp=>{
                    console.log('saved',resp)
                })
              
            })
         })

        
    }



  return (
    <div className='bg-white p-6 rounded-2xl'>
        <div className='flex justify-end mb-6'>
            <button onClick={()=>onSave()}
            className='bg-green-700 p-2 text-white font-semibold px-3 rounded-lg'>Save</button>
        </div>
        

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <UploadImage setFile={(file)=>setFile(file)}/>

            <div className='col-span-2'>
                <div className='w-[100%]'>
                    <input type='text' placeholder='Add your Title'
                        onChange={(e)=>setTitle(e.target.value)}
                    className='text-[35px] outline-none font-bold w-full
                    border-b0[2px] border-gray-400 placeholder-gray-400' />
                    <h2 className='text-[12px] w-full text-gray-400'>
                        The first 40 characters are usually what show up in feeds
                    </h2>

                   <UserTag />
                  

                    <textarea type="text"
                        onChange={(e)=>setDesc(e.target.value)}
                     placeholder="Tell everyone what your product is about"
                     className="outline-none w-full pb-4 mt-[90px]
                     border-b-[2px] border-gray-400 placeholder-gray-400"/>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Form