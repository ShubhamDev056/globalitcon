import BreadCumb2 from '@/app/Components/Common/BreadCumb2';
import Cta2 from '@/app/Components/Cta/Cta2';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import ServiceDetailsLeft1 from '@/app/Components/ServiceDetails/ServiceDetailsLeft1';
import Service8 from '@/app/Components/Services/Service8';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb2 Title="Service Details Left"></BreadCumb2>
            <MarqueeText></MarqueeText>
            <ServiceDetailsLeft1></ServiceDetailsLeft1>
            <Service8></Service8>
            <Cta2></Cta2>
        </div>
    );
};

export default page;