import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselCard from './CarouselCard';
import image from '../../assests/images/businessloan.png'
import image1 from '../../assests/images/banking-industry-concept-illustration.png'
import image2 from '../../assests/images/flat-design-installment-illustration.png'
import image3 from '../../assests/images/businessman-pushing-credit-score-speedometer-from-poor-good-tiny-person-improving-personal-credit-history-with-efforts-flat-vector-illustration-business-reputation-customer-lo.png'
import image4 from '../../assests/images/doctor.png'

const CarouselSec = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} swipeable={true} showThumbs={false} showArrows={false} className='mb-10'>
            <CarouselCard heading={'Personal Loan Loaded with benifit! '} desc={''}  image={image}/>
            <CarouselCard heading={'Home with Simpler Faster Friendlier Home Loans '} desc={''} image={image2}/>
            <CarouselCard heading={' Score & Report worth ₹500  Absolutely FREE'} desc={''}  image={image3}/>
            <CarouselCard heading={'Bussiness Loan '} desc={'hello'}  HighLight={"Bussiness Loan"} image={image1}/>
            <CarouselCard heading={'Loan against Property '} desc={'hello'} image={image4}/>
        </Carousel>
    )
}

export default CarouselSec
