import Image from "next/image";
import Link from "next/link";
import React from "react";
import CareerForm from "./CareerForm";

const index = () => {
  return (
    <div>
      <div className="space100"></div>
      <div className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-boxs">
                <div className="heading1">
                  <div className="details-post-area">
                    <div className="space30"></div>
                    <div className="heading1">
                      <h2>Apply Today</h2>
                      <div className="space16"></div>
                      <div className="space16"></div>
                      <h3>Connect With GLOBALITCON to Boost Your Career</h3>
                      <div className="space16"></div>
                      <p>
                        GLOBALITCON is a high-energy, technology-driven global
                        software employer with people-centered values fostering
                        continuous learning. We are a rapidly growing company.
                        To support our expansion plans and achieve our growth
                        objectives we are always seeking highly talented IT
                        professionals.
                      </p>
                      <div className="space16"></div>
                      <p>
                        We believe an outstanding company to work for is an
                        exceptional company to work with. By combining a great
                        environment with great minds, we produce great results.
                        The key to our success is the relationships – the
                        relationship with clients and the relationship with
                        candidates. We work hard to get to know and understand
                        our clients and our IT consultants to ensure the best
                        fit possible.
                      </p>
                      <div className="space16"></div>
                      <p>
                        Designed to reduce operational costs while complementing
                        your unique technical and business objectives,
                        GLOBALITCON’s scalable solutions address the
                        multifaceted challenges of mega-corporations and smaller
                        companies around the world within the following
                        industries:
                      </p>
                      <div className="space16"></div>
                      <h3>Mutual Growth & Benefits</h3>
                      <div className="space16"></div>
                      <p>
                        Our team of dedicated account managers and recruiters
                        work closely together to translate the client’s
                        technical requirement in to a complete business
                        requirement. Recruiters are then able to arrange for the
                        best fit technically while keeping a close eye on the
                        business fit as well. The team also works closely with
                        each candidate to draw their career path to make sure
                        that they grow mutually with the company. The team
                        invests time to understand the candidate’s key strengths
                        and weaknesses, their needs and career goals and their
                        personal preferences.
                      </p>
                      <div className="space16"></div>
                      <h3>GLOBALITCON offers many benefits, including:</h3>
                      <div className="space16"></div>
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                          <ul>
                            <li>
                              <i className="bi bi-dot"></i>
                              <span>Health Insurance</span>
                            </li>
                            <li>
                              <i className="bi bi-dot"></i>
                              <span>Dental Insurance</span>
                            </li>
                            <li>
                              <i className="bi bi-dot"></i>
                              <span>Vision Insurance</span>
                            </li>
                            <li>
                              <i className="bi bi-dot"></i>
                              <span>Life Insurance Plan</span>
                            </li>
                            <li>
                              <i className="bi bi-dot"></i>
                              <span>Long Term Disability</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                          <ul>
                            <li>
                              <i className="bi bi-dot"></i>
                              <span>Short Term Disability</span>
                            </li>
                            <li>
                              <i className="bi bi-dot"></i>
                              <span>401K Retirement Plan</span>
                            </li>
                            <li>
                              <i className="bi bi-dot"></i>
                              <span>Employee Referral</span>
                            </li>
                            <li>
                              <i className="bi bi-dot"></i>
                              <span> Transit Check</span>
                            </li>
                            <li>
                              <i className="bi bi-dot"></i>
                              <span>Employee Training</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <ul>
                            <li>
                              <i className="bi bi-dot"></i>
                              <span>
                                Green card processing (we enjoy an excellent
                                record)
                              </span>
                            </li>
                            <li>
                              <i className="bi bi-dot"></i>
                              <span>
                                In-house, US-licensed immigration attorney
                              </span>
                            </li>
                            <li>
                              <i className="bi bi-dot"></i>
                              <span>
                                Excellent online portal where you can access all
                                the legal, HR and payroll-related information in
                                real time
                              </span>
                            </li>
                            <li>
                              <i className="bi bi-dot"></i>
                              <span>
                                Excellent turnaround time for all administrative
                                queries (we respond within 24 hours)
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="space16"></div>
                      <p>
                        Post your resume today to put your career on a path to
                        success. Visit our Job Postings to check out our many
                        available IT staffing assignments with our trusted
                        partners and clients. Also you can drop your resume with
                        complete details and job preference to{" "}
                        <a href="mailto:hr@GLOBALITCON.com" className="text">
                          hr@GLOBALITCON.com.
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="icon">
                    <Image
                      src="/assets/img/icons/contact-page-icon1.png"
                      alt="img"
                      width={40}
                      height={38}
                    />
                  </div>
                  <div className="heading">
                    <h5>Contact Us</h5>
                    <a href="tel:8888535798" className="text">
                      +91 8888535798
                    </a>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="icon">
                    <Image
                      src="/assets/img/icons/contact-page-icon2.png"
                      alt="img"
                      width={34}
                      height={32}
                    />
                  </div>
                  <div className="heading">
                    <h5>Send Us a Mail</h5>
                    <a href="mailto:info@globalitcon.com" className="text">
                      info@globalitcon.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <CareerForm />
          </div>
        </div>
      </div>

      <div className="space100"></div>
    </div>
  );
};

export default index;
