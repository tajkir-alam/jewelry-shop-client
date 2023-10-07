import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';


const JewelryUpdate = () => {
    const loadToys = useLoaderData();
    useTitle(loadToys.name);

    const navigate = useNavigate()

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.price = parseFloat(data.price);
        fetch(`https://trov-titans-server-data-tajkir-alam.vercel.app/alltoys/${loadToys._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Updated Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    reset();
                    navigate(`/toy/${loadToys._id}`);
                }
            })
    };

    return (
        <div className='custom-container my-14'>
            <h1 className='text-4xl text-slate-600 text-center font-medium italic'>Update Your Product Info</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='mt-12 drop-shadow-md'>
                <div className="space-y-5">
                    <div className='grid lg:grid-cols-2 gap-3 items-center'>
                        <div className="space-y-2">
                            <label htmlFor="price" className='block font-medium ml-1'>Enter the product price</label>
                            <input type="text" required {...register("price")} id="" placeholder='Enter the price' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="quantity" className='block font-medium ml-1'>Enter the product quantity</label>
                            <input type="text" required {...register("quantity")} id="" placeholder='Enter the quantity' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="details" className='block font-medium ml-1'>Enter product details</label>
                        <textarea {...register("details")} required id="" cols="30" rows="8" placeholder='Product details...' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full resize-none'></textarea>
                    </div>
                </div>

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Update Product" className='btn btn-error w-full text-white font-semibold tracking-widest mt-8 drop-shadow-xl' />
            </form>
        </div>
    );
};

export default JewelryUpdate;