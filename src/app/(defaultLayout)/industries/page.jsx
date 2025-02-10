import React from "react";
import IndustriesContent from "@/app/Components/Industries";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import Cta1 from "@/app/Components/Cta/Cta1";

const page = () => {
  return (
    <div>
      <BreadCumb Title="Industries"></BreadCumb>
      <IndustriesContent />
      <Cta1></Cta1>
    </div>
  );
};

export default page;
