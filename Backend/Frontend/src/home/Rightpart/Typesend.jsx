import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../../context/useSendMessage.js';

function Typesend() {
  const [message, setMessage] =useState("");
  const  {loading, sendMessages } = useSendMessage();

  const handleSubmit = async(e)=>{
    console.log(e)
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex space-x-1 h-[8vh] bg-gray-800'>
        <div className='w-[70%] mx-3'>
      <input type="text" placeholder="Type here" value={message} onChange={(e)=>setMessage(e.target.value)} className="border border-gray-700 rounded-xl outline-none w-full px-4 py-2 ml-1 mt-1" />
    </div>
    <button>
        <IoMdSend  className='text-3xl'/>
    </button>
    </div>
    </form>
  )
}

export default Typesend
