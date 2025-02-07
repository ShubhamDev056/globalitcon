import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import Team4 from '@/app/Components/Team/Team4';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Our Team"></BreadCumb>
            <MarqueeText></MarqueeText>
            <Team4></Team4>
            <Cta1></Cta1>            
        </div>
    );
};

export default page;