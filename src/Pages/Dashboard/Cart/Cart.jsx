import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://jewelry-shop-client-side.vercel.app/cart?email=${user && user.email}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, []);

    console.log(cart);
    return (
        <div className="overflow-x-auto w-full px-4">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Jewelry Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // loadJewelry.map(singleJewelry => <JewelryTable key={singleJewelry._id} singleJewelry={singleJewelry}></JewelryTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Cart;