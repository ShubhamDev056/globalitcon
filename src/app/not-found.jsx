import BreadCumb from "@/app/Components/Common/BreadCumb";
import ContactInfo1 from "@/app/Components/ContactInfo/ContactInfo1";
import Cta1 from "@/app/Components/Cta/Cta1";
import React from "react";
import Header1 from "./Components/Header/Header1";
import Footer1 from "./Components/Footer/Footer1";
import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <div>
      <div className="main-page-area">
        <Header1></Header1>
        <div className="common-hero error">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="space80" />
                <div className="error-image">
                  <Image height={600} width={600} src="assets/img/others/error.png" alt="page-not-found" />
                </div>
                <div className="space40" />
                <div className="heading1">
                  <h2>Page Not Found!</h2>
                  <div className="space16" />
                  <p>
                    Sorry, the page you are looking for doesn’t exist or has{" "}
                    <br /> been moved. Here are some helpful links.
                  </p>
                  <div className="space30" />
                  <Link className="theme-btn1" href="/">
                    Back To Home{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Cta1></Cta1>
        <Footer1></Footer1>
      </div>
    </div>
  );
}
