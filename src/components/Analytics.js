import React from 'react'
import Laptop from '../asset/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
       <img src={Laptop} alt="/"  className='w-[500px] mx-auto my-4'/>
       <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] fon-bold '>DATA ANALYTICS DASHBOARD</p>
        <h1 className='mx:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
        <p>Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Repudiandae et nobis sequi a consectetur, 
          eaque odio laboriosam optio quasi culpa rem reiciendis quisquam 
          provident pariatur qui voluptas deleniti iusto quis?</p>
          <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Get Started</button>
       </div>
      </div>
    </div>
  )
}

export default Analytics
