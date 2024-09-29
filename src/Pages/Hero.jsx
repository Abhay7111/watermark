import React from 'react'
import Footer from '../CopyrightComponents/Footer'

function Hero() {
  return (
    <div>
        <div className='w-full h-screen bg-gradient-to-br from-rose-400 to-blue-300 flex items-center justify-center'>
            <h1 className='text-[8vw] sm:text-[4vw] uppercase font-bold text-center'>Watermark by separatedigital.com</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default Hero