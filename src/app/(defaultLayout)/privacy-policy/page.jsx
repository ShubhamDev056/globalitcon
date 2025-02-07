import Blog7 from "@/app/Components/Blog/Blog7";
import BlogDetailsCenter1 from "@/app/Components/BlogDetails/BlogDetailsCenter1";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import Cta1 from "@/app/Components/Cta/Cta1";
import MarqueeText from "@/app/Components/MarqueeText/MarqueeText";
import PrivacyPolicy from "@/app/Components/PrivacyPolicy";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb Title="Privacy Policy"></BreadCumb>
      <PrivacyPolicy />
      <Cta1></Cta1>
    </div>
  );
};

export default page;
