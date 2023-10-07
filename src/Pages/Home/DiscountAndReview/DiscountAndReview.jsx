import React, { useEffect } from 'react';
import bgImg from '../../../assets/bgImg.webp'
import img2 from '../../../assets/user3.png'
import img3 from '../../../assets/person2.png'
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import Aos from 'aos';
import 'aos/dist/aos.css'


const DiscountAndReview = () => {
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

            <div className='mt-24'>
                <div className='text-center my-10 space-y-4'>
                    <h1 className='text-3xl font-medium'>Our Customer's Word</h1>
                    <p className='md:w-1/2 mx-auto'>We are happy to get the valuable thoughts from our customers. Thanks for being with us. Keep shopping action figures and play. </p>
                </div>
                <div className='grid lg:grid-cols-2 justify-center items-center gap-8'>
                    <div data-aos="fade-down-right" data-aos-delay="10" data-aos-duration="2500" className='bg-[#f1eaea8f] rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg px-4 py-8 h-64 grid grid-cols-3 items-center gap-4'>
                        <div>
                            <img src={img2} alt="" className='h-full w-full opacity-75' />
                        </div>
                        <div className='col-span-2 space-y-2'>
                            <h2 className='text-2xl font-bold text-slate-600'>Hokwana Bakum</h2>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={4.9}
                                readOnly
                            />
                            <p className='text-lg font-light'>
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, fugiat."
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" data-aos-delay="10" data-aos-duration="2500" className='bg-[#f1eaea8f] rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg px-4 py-8 h-64 grid grid-cols-3 items-center gap-4'>
                        <div>
                            <img src={img3} alt="" className='h-full w-full opacity-75' />
                        </div>
                        <div className='col-span-2 space-y-2'>
                            <h2 className='text-2xl font-bold text-slate-600'>Gotia Mocha</h2>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={4.9}
                                readOnly
                            />
                            <p className='text-lg font-light'>
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, fugiat."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscountAndReview;