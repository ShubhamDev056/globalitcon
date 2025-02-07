import React from 'react';
import HeaderStyle5 from '../Components/Header/HeaderStyle5';
import Footer5 from '../Components/Footer/Footer5';

const layout = ({ children }) => {
    return (
        <div className='main-page-area3'>
            <HeaderStyle5></HeaderStyle5>
            {children}
            <Footer5></Footer5>
        </div>
    );
};

export default layout;