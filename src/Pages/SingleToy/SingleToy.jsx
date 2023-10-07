import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SingleJewelry = () => {
    const loadJewelry = useLoaderData();
    const { picture, name, sellerName, sellerEmail, price, ratings, quantity, details } = loadJewelry;
    
    useTitle(name);

    return (
        <div className='custom-container mt-8 p-3 shadow-md rounded-lg'>
            <div className="grid lg:grid-cols-3 gap-8 justify-center py-2">
                <div>
                    <img src={picture} alt="" className='rounded-lg' />
                </div>
                <div className='space-y-4 lg:space-y-8 col-span-2 lg:pl-4'>
                    <h1 className='text-5xl text-slate-700 font-bold'>{name}</h1>
                    <h3 className='text-3xl font-semibold'>Price ${price}</h3>
                    <h4 className='text-2xl font-semibold'>In Stock: {quantity}</h4>
                    <div className='flex items-center gap-2'>
                        Ratings: {ratings}
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={ratings}
                            readOnly
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <button className='btn btn-error text-white tracking-widest w-full'>Buy Now</button>
                        <button className='btn btn-success text-white tracking-widest w-full'>Add To Cart</button>
                    </div>
                    <p>
                        <b>Description: </b>
                        {details}
                    </p>
                </div>
            </div>
            <div className='mt-5 pl-2 space-y-3'>
                <h2 className='text-4xl drop-shadow-xl'>Owner Details: </h2>
                <h5 className='text-xl font-semibold'>Name: {sellerName}</h5>
                <h5 className='text-xl font-semibold'>Email: {sellerEmail}</h5>
            </div>
        </div>
    );
};

export default SingleJewelry;