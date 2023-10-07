import React, { useEffect, useState } from 'react';
import JewelryTable from './JewelryTable';
import { FaSearch } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const AllJewelry = () => {
    useTitle('All Jewelry')
    const [loadJewelry, setLoadJewelry] = useState([]);

    const [showProducts, setShowProducts] = useState(20);
    const [searchProducts, setSearchProducts] = useState('')

    useEffect(() => {
        fetch(`https://jewelry-shop-client-side.vercel.app/all-jewelry?limit=${showProducts}&searchjewelry=${searchProducts}`)
            .then(res => res.json())
            .then(data => setLoadJewelry(data));
    }, [showProducts, searchProducts])

    const productsLimit = e => {
        setShowProducts(parseInt(e.target.value));
    }


    const searchBox = e => {
        const searchValue = e.target.value;
        setSearchProducts(searchValue);
    }

    return (
        <div>
            <section className='text-center text-5xl text-white font-semibold my-12 bg-[#e4132bd2] py-10 uppercase tracking-widest shadow-xl'>
                <span className="drop-shadow-md">
                    Our Luxury Jewels
                </span>
            </section>

            <section className='space-y-5'>
                <div className='grid lg:grid-cols-2 gap-2 px-4'>
                    <div className='relative'>
                        <input onChange={(searchBox)} type="text" placeholder="Search here" className="input input-bordered input-error w-full" />
                        <button>
                            <FaSearch className='text-2xl text-[#b60217d2] absolute inset-y-1/3 right-5'></FaSearch>
                        </button>
                    </div>
                    <div className='flex justify-end'>
                        <select onChange={productsLimit} className="select select-error w-full lg:w-fit">
                            <option value={20}>Products Loaded: 20</option>
                            <option value={5}>Products Loaded: 5</option>
                            <option value={30}>Products Loaded: 30</option>
                            <option value={50}>Products Loaded: 50</option>
                        </select>
                    </div>
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
                                loadJewelry.map(singleJewelry => <JewelryTable key={singleJewelry._id} singleJewelry={singleJewelry}></JewelryTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default AllJewelry;