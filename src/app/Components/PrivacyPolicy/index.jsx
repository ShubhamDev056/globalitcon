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
                    <h2>Who We Are</h2>
                    <div className="space16"></div>
                    <p>
                      Our website address is:{" "}
                      <Link href="/">http://localhost:3000</Link>
                    </p>
                    <p>
                      GlobalItCon ("us", "we", or "our") is a tax preparation
                      and consulting service provider. This privacy policy
                      outlines how we collect, use, disclose, and protect your
                      personal information when you use our services.
                    </p>
                  </div>
                </div>
              </article>

              <div className="space50"></div>
              <article>
                <div className="details-post-area">
                  <div className="heading1">
                    <h5>Information We Collect</h5>
                    <div className="space16"></div>
                    <p>
                      We may collect personal information from you when you:
                    </p>
                    <ul>
                      <li>Visit our website</li>
                      <li>Contact us for services</li>
                      <li>Interact with us through social media</li>
                    </ul>
                    <p>The information we collect may include:</p>
                    <ul>
                      <li>
                        <strong>Personal Information:</strong> Name, address,
                        email address, phone number, date of birth, financial
                        information (income, deductions, tax returns), and other
                        personal identifiers.
                      </li>
                      <li>
                        <strong>Device Information:</strong> Information about
                        your computer, mobile device, or other device used to
                        access our services, including IP address, browser type,
                        and operating system.
                      </li>
                      <li>
                        <strong>Usage Information:</strong> Information about
                        how you use our services, including pages visited,
                        features used, and links clicked.
                      </li>
                    </ul>
                  </div>

                  <div className="space40"></div>
                  <div className="heading1">
                    <h5>How We Use Information</h5>
                    <div className="space16"></div>
                    <p>We may use your personal information to:</p>
                    <ul>
                      <li>Provide tax preparation and consulting services</li>
                      <li>
                        Communicate with you about your account and services
                      </li>
                      <li>Respond to your inquiries and requests</li>
                      <li>Improve our services and website</li>
                      <li>Protect against fraud and abuse</li>
                      <li>Comply with legal and regulatory requirements</li>
                    </ul>
                    <p>
                      You will always have the opportunity to opt-out of
                      receiving direct communications. Reply 'Stop' to opt-out.
                    </p>
                  </div>
                </div>
              </article>

              <h2>Sharing Your Information</h2>
              <p>
                No mobile information will be shared with third
                parties/affiliates for marketing/promotional purposes. All other
                categories exclude text messaging opt-in data and consent.
              </p>

              <h2>Data Security</h2>
              <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, use, disclosure, alteration, or
                destruction. However, no method of transmission over the
                internet or electronic storage is completely secure.
              </p>

              <h2>Your Rights</h2>
              <ul>
                <li>Access and review your personal information</li>
                <li>Correct inaccuracies in your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Restrict processing of your personal information</li>
              </ul>

              <h2>Children’s Privacy</h2>
              <p>
                Our services are not intended for children under the age of 18.
                We do not knowingly collect personal information from children.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will
                notify you of any material changes by posting the updated policy
                on our website.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about this privacy policy,
                please contact us at: [Email Address]
              </p>

              <div className="space50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
