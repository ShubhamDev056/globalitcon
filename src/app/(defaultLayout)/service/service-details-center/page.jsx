import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import ServiceDetailsCenter3 from '@/app/Components/ServiceDetails/ServiceDetailsCenter3';
import Service7 from '@/app/Components/Services/Service7';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Service Detail Center"></BreadCumb>
            <MarqueeText></MarqueeText>
            <ServiceDetailsCenter3></ServiceDetailsCenter3>
            <Service7></Service7>
            <Cta1></Cta1>              
        </div>
    );
};

export default page;