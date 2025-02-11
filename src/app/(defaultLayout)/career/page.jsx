import React from "react";
import CareerContent from "@/app/Components/Career";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import Cta1 from "@/app/Components/Cta/Cta1";
import MarqueeText from "@/app/Components/MarqueeText/MarqueeText";

const page = () => {
  return (
    <div>
      <BreadCumb Title="Career"></BreadCumb>
      <MarqueeText></MarqueeText>
      <CareerContent />
      <Cta1></Cta1>
    </div>
  );
};

export default page;
