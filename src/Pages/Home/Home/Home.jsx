import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import DiscountAndReview from '../DiscountAndReview/DiscountAndReview';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
            <DiscountAndReview></DiscountAndReview>
        </div>
    );
};

export default Home;