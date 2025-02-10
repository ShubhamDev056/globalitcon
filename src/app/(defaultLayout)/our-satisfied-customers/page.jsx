import BreadCumb from "@/app/Components/Common/BreadCumb";
import Cta1 from "@/app/Components/Cta/Cta1";
import MarqueeText from "@/app/Components/MarqueeText/MarqueeText";
import Testimonial1 from "@/app/Components/Testimonial/Testimonial1";
import React from "react";
import OurClientContent from "@/app/Components/OurClients";

const page = () => {
  return (
    <div>
      <BreadCumb Title="Our Client"></BreadCumb>
      <OurClientContent />
      <MarqueeText></MarqueeText>
      <Testimonial1></Testimonial1>
      <Cta1></Cta1>
    </div>
  );
};

export default page;
