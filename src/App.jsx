import React from 'react'
import ImageSlide from './components/ImageSlide'
import Textslide from './components/Textslide'

function App() {
  

  return (
    <div className='bg-primary-cream containerOne w-screen h-screen flex justify-center items-center'>
      <div className='w-2/4 h-4/5 md:flex rounded-3xl'>
        <ImageSlide/>
        <Textslide/>
      </div>
    </div>
  )
}

export default App
