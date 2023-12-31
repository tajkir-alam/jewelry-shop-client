import { Rating } from '@smastrom/react-rating';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const SingleJewelry = () => {
    const loadJewelry = useLoaderData();
    const { user } = useContext(AuthContext);
    const { picture, name, sellerName, sellerEmail, price, ratings, quantity, details, subCategory, _id } = loadJewelry;
    useTitle(name);

    const handleCart = () => {
        const itemInfo = {
            picture,
            name,
            sellerName,
            sellerEmail,
            price,
            ratings,
            details,
            id: _id,
            subCategory,
            userEmail: user.email
        }

        fetch('https://jewelry-shop-client-side.vercel.app/cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(itemInfo),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Item Added to Cart',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }

    return (
        <div className='custom-container py-8'>
            <div className="shadow-md p-3 rounded-lg">
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
                        {/* <div className='grid grid-cols-2 gap-3'> */}
                        <button className='btn btn-success hover:opacity-80 text-white tracking-widest w-full' onClick={handleCart}>
                            Add To Cart
                        </button>
                        {/* </div> */}
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
        </div>
    );
};

export default SingleJewelry;