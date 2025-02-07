import BreadCumb2 from '@/app/Components/Common/BreadCumb2';
import Cta2 from '@/app/Components/Cta/Cta2';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import ProjectDetailsCenter1 from '@/app/Components/ProjectDetails/ProjectDetailsCenter1';
import Service8 from '@/app/Components/Services/Service8';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb2 Title="Project Detail Center"></BreadCumb2>
            <MarqueeText></MarqueeText>
            <ProjectDetailsCenter1></ProjectDetailsCenter1>
            <Service8></Service8>
            <Cta2></Cta2>            
        </div>
    );
};

export default page;