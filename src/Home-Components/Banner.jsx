import React from 'react'
import BannerImg from "../assets/banner.jpeg"

const Banner = () => {
  return (
    <div className='w-full'>
        <img src={BannerImg} className='w-full' alt="" />
    </div>
  )
}

export default Banner