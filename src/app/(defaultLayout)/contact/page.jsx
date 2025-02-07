import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo1 from '@/app/Components/ContactInfo/ContactInfo1';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Contact Us"></BreadCumb>
            <MarqueeText></MarqueeText>
            <ContactInfo1></ContactInfo1>
            <Cta1></Cta1>            
        </div>
    );
};

export default page;