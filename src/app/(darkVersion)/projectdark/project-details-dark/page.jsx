import BreadCumb2 from '@/app/Components/Common/BreadCumb2';
import Cta2 from '@/app/Components/Cta/Cta2';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import ProjectDetailsLeft1 from '@/app/Components/ProjectDetails/ProjectDetailsLeft1';
import Service8 from '@/app/Components/Services/Service8';
import React from 'react';

const page = () => {
    return (
        <div>
             <BreadCumb2 Title="Project Details Left"></BreadCumb2>
            <MarqueeText></MarqueeText>
            <ProjectDetailsLeft1></ProjectDetailsLeft1>
            <Service8></Service8>
            <Cta2></Cta2>           
        </div>
    );
};

export default page;