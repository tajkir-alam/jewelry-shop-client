import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
// import ExtraSection from '../ExtraSection/ExtraSection';
// import useTitle from '../../../hooks/useTitle';

const Home = () => {
    // useTitle('Home')

    return (
        <div>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
            {/* <ExtraSection></ExtraSection> */}
        </div>
    );
};

export default Home;