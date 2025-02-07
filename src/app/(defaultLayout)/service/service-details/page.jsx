import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import ServiceDetailsLeft1 from '@/app/Components/ServiceDetails/ServiceDetailsLeft1';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Service Details Left"></BreadCumb>
            <MarqueeText></MarqueeText>
            <ServiceDetailsLeft1></ServiceDetailsLeft1>
            <Cta1></Cta1>            
        </div>
    );
};

export default page;