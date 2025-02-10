import BreadCumb from "@/app/Components/Common/BreadCumb";
import Cta1 from "@/app/Components/Cta/Cta1";
import Faq2 from "@/app/Components/Faq/Faq2";
import HomeFaq1 from "@/app/Components/Faq/HomeFaq1";
import MarqueeText from "@/app/Components/MarqueeText/MarqueeText";
import Testimonial5 from "@/app/Components/Testimonial/Testimonial5";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb Title="Frequently asked questions"></BreadCumb>
      <MarqueeText></MarqueeText>
      <Faq2></Faq2>
      <Cta1></Cta1>
    </div>
  );
};

export default page;
