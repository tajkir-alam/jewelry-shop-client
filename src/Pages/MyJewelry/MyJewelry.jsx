import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import MyJewelryTable from './MyJewelryTable';

const MyJewelry = () => {
    useTitle('My Toys');
    const [showProducts, setShowProducts] = useState(1);

    const [loadJewelry, setLoadJewelry] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://jewelry-shop-client-side.vercel.app/all-jewelry?email=${user && user.email}&sorttoys=${showProducts}`)
            .then(res => res.json())
            .then(data => setLoadJewelry(data));
    }, [showProducts])

    const productsLimit = e => {
        setShowProducts(e.target.value);
    }


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#e4132bd2',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://jewelry-shop-client-side.vercel.app/all-jewelry/${id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Deleted Successfully',
                                    showConfirmButton: false,
                                    timer: 2000
                                })
                                const remainingToys = loadJewelry.filter(toys => toys._id !== id);
                                setLoadJewelry(remainingToys);
                            }
                        })
                }
            })
    }


    return (
        <div className='py-5'>
            <section className='text-center text-5xl text-white font-semibold my-12 bg-[#e4132bd2] py-10 uppercase tracking-widest shadow-xl'>
                <span className="drop-shadow-md">
                    My Jewelries
                </span>
            </section>

            <section className='space-y-5'>
                <div className='flex justify-end px-4'>
                    <select onChange={productsLimit} className="select select-error w-full lg:w-fit">
                        <option value={20}>Sort By</option>
                        <option value={1}>Ascending</option>
                        <option value={-1}>Descending</option>
                    </select>
                </div>

                <div className="overflow-x-auto w-full px-4">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Jewelry Name</th>
                                <th>Seller Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loadJewelry.map(singleJewelry => <MyJewelryTable key={singleJewelry._id} singleJewelry={singleJewelry} handleDelete={handleDelete}></MyJewelryTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default MyJewelry;