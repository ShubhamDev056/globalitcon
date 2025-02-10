import React from "react";
import CareerContent from "@/app/Components/Career";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import Cta1 from "@/app/Components/Cta/Cta1";

const page = () => {
  return (
    <div>
      <BreadCumb Title="Career"></BreadCumb>
      <CareerContent />
      <Cta1></Cta1>
    </div>
  );
};

export default page;
