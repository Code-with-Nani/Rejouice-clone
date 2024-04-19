import React from 'react'
import MySwiper from './MySwiper'


const SLider = () => {
  return (
    <div className='w-screen h-screen relative bg-bgWhite text-textBlack py-20'>
      <h1 className='text-[10vw] heading leading-[10.5vw] tracking-tight border-b-[1px] border-b-black border-opacity-35  w-[96%] ml-[1.3%]'>Get in touch.</h1>
      <div className="swiper relative lg:-translate-y-8 cursor-grab">
        <MySwiper/>
      </div>
    </div>
  )
}

export default SLider
