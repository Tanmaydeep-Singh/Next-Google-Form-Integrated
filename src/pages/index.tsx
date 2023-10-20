import React, { useRef, useState } from 'react'
import Image from 'next/image';
import Form from '@/components/form';

function Index() {


  return (
    <div>
      <div className=' flex items-center justify-center'>
        hello form
      </div>
      <Form/>
      <div className='flex justify-center w-screen m-10'>
      </div>
    </div>
  )
}

export default Index
