import React from 'react';

const CartTable = ({ singleCart, handleDelete }) => {
    const { picture, name, subCategory, price, _id } = singleCart;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td className='flex gap-2'>
                <button className='btn btn-sm btn-error text-white'>
                    Buy Now
                </button>
                <button className='btn btn-sm btn-success text-white' onClick={()=>handleDelete(_id)}>
                    Remove Item
                </button>
            </td>
        </tr>
    );
};

export default CartTable;