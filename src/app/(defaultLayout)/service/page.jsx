import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import Vission1 from '@/app/Components/Mission/Vission1';
import Service6 from '@/app/Components/Services/Service6';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Our Services"></BreadCumb>
            <MarqueeText></MarqueeText>
            <Service6></Service6>
            <Vission1></Vission1>
            <Cta1></Cta1>            
        </div>
    );
};

export default page;