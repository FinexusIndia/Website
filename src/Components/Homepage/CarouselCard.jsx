import React from 'react'
import image from '../../assests/images/blogging-concept-illustration.png'
import { Link } from 'react-router-dom'



const CarouselCard = (props) => {
    return (
        <div className='grid lg:grid-cols-2  w-full mx-auto  justify-center  p-5 rounded-md items-center bg-gray-950  transition-all ease-in-out'>
            <div className=' lg:h-[500px] flex flex-col items-start mx-auto p-10 justify-center'>
                <h1 className='lg:text-[40px] text-[20px] text-gray-400 text-center lg:text-left '>{props.heading}  </h1>
                 
                
                <Link to='/contact' ><button className='p-2 bg-blue-500 rounded-md text-black text-[18px] mt-10 transition-all ease-in-out hover:bg-blue-600'>Contact Us</button></Link>
            </div>
            <div className=' lg:h-[400px] '><img src={props.image} alt="" className='' width={'50px'} /></div>
        </div>
    )
}

export default CarouselCard
