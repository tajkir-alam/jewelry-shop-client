import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const MyJewelryTable = ({ singleJewelry, handleDelete }) => {

    const { sellerName, name, subCategory, price, quantity, picture, _id } = singleJewelry;

    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <LazyLoad>
                                    <img src={picture} alt="Avatar Tailwind CSS Component" />
                                </LazyLoad>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td>{sellerName}</td>
                <td>{subCategory}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td className='grid grid-cols-2 gap-2'>
                    <Link to={`/update-jewelry/${_id}`} className="btn btn-success text-white tracking-wide">
                        Update
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-error text-white tracking-wide">
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
};

export default MyJewelryTable;