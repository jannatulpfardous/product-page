import React from 'react';
// import Review from '../../Components2/Review/Review';



import Carousel from '../Carousel/Carousel';
import Naill from '../Naill/Naill';
import Product from '../Product/Product';


const Header = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Product></Product>
            <Naill></Naill>
            {/* <Review></Review> */}
            
      
            
           
        </div>
    );
};

export default Header;