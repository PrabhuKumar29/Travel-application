import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      
      <h1
      className='font-extrabold text-[50px] text-center mt-16'
      >
        <span className='text-[#f56551]'>Unleash the Ultimate Adventure with AI:</span> Wildly Personalized Itineraries Just for You!</h1>
      <p className='text-xl text-gray-500 text-center'>Your AI-powered travel genie crafts epic journeys tailored to your passions and budget—because your next adventure should be as extraordinary as you are!</p>
   
      <Link to={'/create-trip'}>
        <Button> Get Started, It's Free </Button>
      </Link>

      <img src='/landing.png' className='' />
    </div>
  )
}

export default Hero