import BreadCumb2 from '@/app/Components/Common/BreadCumb2';
import Cta2 from '@/app/Components/Cta/Cta2';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import ProjectDetailsRight1 from '@/app/Components/ProjectDetails/ProjectDetailsRight1';
import Service8 from '@/app/Components/Services/Service8';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb2 Title="Project Details Right"></BreadCumb2>
            <MarqueeText></MarqueeText>
            <ProjectDetailsRight1></ProjectDetailsRight1>
            <Service8></Service8>
            <Cta2></Cta2>            
        </div>
    );
};

export default page;