import React from 'react';
import HeaderStyle2 from '../Components/Header/HeaderStyle2';
import Footer2 from '../Components/Footer/Footer2';

const DefalultLayout = ({ children }) => {
    return (
        <div className='comon-body tg-heading-subheading animation-style3'>
            <HeaderStyle2></HeaderStyle2>
            {children}
            <Footer2></Footer2>
        </div>
    );
};

export default DefalultLayout;