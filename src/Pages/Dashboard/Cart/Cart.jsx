import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import CartTable from './CartTable';
import Swal from 'sweetalert2';

const Cart = () => {
    const [loadCart, setLoadCart] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://jewelry-shop-client-side.vercel.app/cart?email=${user && user.email}`)
            .then(res => res.json())
            .then(data => setLoadCart(data))
    }, []);

    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#e4132bd2',
            confirmButtonText: 'Yes, remove from cart!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://jewelry-shop-client-side.vercel.app/cart/${id}`, {
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
                                const remainingCart = loadCart.filter(jewelry => jewelry._id !== id);
                                setLoadCart(remainingCart);
                            }
                        })
                }
            })
    }

    return (
        <div className="overflow-x-auto w-full px-4">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Jewelry Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loadCart.map(singleCart => <CartTable key={singleCart._id} singleCart={singleCart} handleDelete={handleDelete}></CartTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Cart;