import About6 from '@/app/Components/About/About6';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import Mission1 from '@/app/Components/Mission/Mission1';
import Vission1 from '@/app/Components/Mission/Vission1';
import Team2 from '@/app/Components/Team/Team2';
import Testimonial1 from '@/app/Components/Testimonial/Testimonial1';
import React from 'react';

const page = () => {
    return (
      <div>
        <BreadCumb Title="About Us"></BreadCumb>
        <About6
          image1="/assets/img/about/about2-img1.webp"
          image2="/assets/img/about/about2-img2.webp"
          image3="/assets/img/about/about2-img3.webp"
          experienceNum="25"
          experienceTitle="Years Of <br> Experience"
          subTitle="Our Service"
          title="Empower Your Business With Our Comprehensive IT Solutions"
          content="GLOBALITCON Inc is a fast growing, end-to-end information technology services and solutions provider working with leading Global 2000 organizations from the Banking & Financial Services, Healthcare, Telecommunications & Media, Technology, Energy & Utilities and Manufacturing & Retail domains. GLOBALITCON Inc delivers highly responsive and innovative solutions that help clients align their IT strategy with business goals to address the most important IT needs through a combination of consulting solutions, proprietary methodologies, assets based services and a Collaborative Engagement Model."
          counName1="IT Consulting"
          CounNum1="100%"
          counName2="Cyber Security"
          CounNum2="98%"
        ></About6>
        <Mission1></Mission1>
        <Vission1></Vission1>
        {/* <Testimonial1></Testimonial1> */}
        {/* <Team2></Team2> */}
        <Cta1></Cta1>
      </div>
    );
};

export default page;