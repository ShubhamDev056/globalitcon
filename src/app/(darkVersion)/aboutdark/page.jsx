import About2 from '@/app/Components/About/About2';
import Choose2 from '@/app/Components/Choose/Choose2';
import BreadCumb2 from '@/app/Components/Common/BreadCumb2';
import Cta2 from '@/app/Components/Cta/Cta2';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import Team1 from '@/app/Components/Team/Team1';
import Testimonial2 from '@/app/Components/Testimonial/Testimonial2';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb2 Title="About Us"></BreadCumb2>
            <MarqueeText></MarqueeText>
            <About2
                image1="/assets/img/about/about2-img1.png"
                image2="/assets/img/about/about2-img2.png"
                image3="/assets/img/about/about2-img3.png"
                experienceNum="25"
                experienceTitle="Years Of <br> Experience"
                subTitle="Our Service"
                title="Empower Your Business With Our Comprehensive IT Solutions"
                content="Welcome to TechXen, your premier destination for cutting-edge technology solutions and IT services. At TechXen, we are passionate about harnessing the power of technology to empower businesses a like."
                counName1="IT Consulting"
                CounNum1="100%"
                counName2="Cyber Security"
                CounNum2="98%"
            ></About2>
            <Choose2></Choose2>
            <Testimonial2></Testimonial2>
            <Team1></Team1>
            <Cta2></Cta2>            
        </div>
    );
};

export default page;