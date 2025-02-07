import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import ServiceDetailsRight2 from '@/app/Components/ServiceDetails/ServiceDetailsRight2';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Service Details Right"></BreadCumb>
            <MarqueeText></MarqueeText>
            <ServiceDetailsRight2></ServiceDetailsRight2>
            <Cta1></Cta1>            
        </div>
    );
};

export default page;