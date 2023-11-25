import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import "../components/textSlide.css"

function Textslide() {
  return (
    <div className="bg-neutral-white md:h-full md:w-1/2 rounded-lg p-10 flex flex-col justify-around">
        <p className='headingOne'>PERFUME</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
            A floral, solar and voluptuous intrepretation 
            composed by Oliver Polge, Perfumer-creatorfor the House of CHANEL.
        </p>
        <div className='flex justify-between'>
            <h2 className='text-primary-darkcyan'>$149.99</h2>
            <span>$169.99</span>
        </div>
        <button className='flex rounded-xl hover:bg-neutral-daekGrayishBlue text-lg font-bold bg-primary-darkcyan w-full p-5 text-neutral-white justify-center items-center'> <IoCartOutline /><span className='px-2'>Add to cart</span></button>
    </div>
  )
}

export default Textslide