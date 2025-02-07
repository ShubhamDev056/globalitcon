import React from 'react';
import HeaderStyle2 from '../Components/Header/HeaderStyle2';
import Footer2 from '../Components/Footer/Footer2';

const layout = ({ children }) => {
    return (
        <div className='main-page-area2 body2'>
            <HeaderStyle2></HeaderStyle2>
            {children}
            <Footer2></Footer2>
        </div>
    );
};

export default layout;