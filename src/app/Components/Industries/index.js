import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="service-details-area-all sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="service-details-post">
              <article>
                <div className="details-post-area">
                  <div className="space30"></div>
                  <div className="heading1">
                    <h2>Industry Experience to Power Your Project</h2>
                    <div className="space16"></div>
                    <p>
                      GLOBALITCON has dedicated decades to envisioning and
                      developing solutions designed to help our partners and
                      clients get the most out of the latest technology. Over
                      the years, we’ve built a rich and varied industry
                      experience with clients coming from an arena of business
                      sectors ranging from health care and manufacturing to
                      retail, technology and finance.
                    </p>
                    <div className="space16"></div>
                    <p>
                      Combining boundless innovation and the depth of our
                      multidisciplinary team of professionals with our “go
                      beyond” approach to service, GLOBALITCON has the right
                      resources to help companies like yours cultivate real
                      business value at the right price.
                    </p>
                    <div className="space16"></div>
                    <p>
                      Designed to reduce operational costs while complementing
                      your unique technical and business objectives,
                      GLOBALITCON’s scalable solutions address the multifaceted
                      challenges of mega-corporations and smaller companies
                      around the world within the following industries:
                    </p>
                    <div className="space16"></div>
                    <ul>
                      <li>
                        <i className="bi bi-dot"></i>
                        <span>BFSI</span>
                      </li>
                      <li>
                        <i className="bi bi-dot"></i>
                        <span>Consumer Goods</span>
                      </li>
                      <li>
                        <i className="bi bi-dot"></i>
                        <span>Entertainment & Media</span>
                      </li>
                      <li>
                        <i className="bi bi-dot"></i>
                        <span>Government</span>
                      </li>
                      <li>
                        <i className="bi bi-dot"></i>
                        <span>Health Care & Pharmaceuticals</span>
                      </li>
                      <li>
                        <i className="bi bi-dot"></i>
                        <span>Information Technology</span>
                      </li>
                      <li>
                        <i className="bi bi-dot"></i>
                        <span>Manufacturing</span>
                      </li>
                      <li>
                        <i className="bi bi-dot"></i>
                        <span>Publishing</span>
                      </li>
                      <li>
                        <i className="bi bi-dot"></i>
                        <span>Retail</span>
                      </li>
                      <li>
                        <i className="bi bi-dot"></i>
                        <span>Telecommunications</span>
                      </li>
                      <li>
                        <i className="bi bi-dot"></i>
                        <span>Tourism</span>
                      </li>
                      <li>
                        <i className="bi bi-dot"></i>
                        <span>Transportation & Distribution</span>
                      </li>
                    </ul>
                    <div className="space16"></div>
                    <p>
                      Our operational approach and commitment to quality provide
                      our clients with the peace of mind that comes with
                      time-tested project management techniques, customized
                      engagement models and a proven track record of exceptional
                      service and tangible business results.
                    </p>
                    <div className="space16"></div>
                    <p>
                      <Link href="/contact">Contact</Link> us today to find out
                      how we can help your business with our industry expertise
                      and innovative{" "}
                      <Link href="/service">solutions and services</Link>.
                    </p>
                  </div>
                </div>
              </article>

              <div className="space50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
