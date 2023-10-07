import React, { useEffect } from 'react';
import bgImg from '../../../assets/bgImg.webp'
import img2 from '../../../assets/user3.png'
import img3 from '../../../assets/person2.png'
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import Aos from 'aos';
import 'aos/dist/aos.css'


const ExtraSection = () => {
    useEffect(() => {
        Aos.init();
    },[])

    return (
        <section className='custom-container my-20 lg:my-28 '>
            <div className='p-0 h-80 relative rounded-xl'>
                <img src={bgImg} alt="" className='absolute h-full w-full rounded-xl' />
                <div className='bg-gradient-to-r from-[rgba(41,38,38,0.64)] to-[rgba(39,38,38,0.2)] absolute w-full h-full rounded-xl'></div>
                <h3 className='text-white text-4xl lg:text-5xl text-center h-full w-full absolute top-1/4 space-y-12'>
                    <span className='animate-pulse font-bold tracking-wider'>
                        <i>25% off </i>
                        <span>For Your First Purchase</span>
                    </span>
                    <br />
                    <Link to='/all-jewelry' className='text-sm btn btn-error animate-bounce text-white tracking-widest font-bold m-0 drop-shadow-md'>Buy Now</Link>
                </h3>
            </div>

        </section>
    );
};

export default ExtraSection;