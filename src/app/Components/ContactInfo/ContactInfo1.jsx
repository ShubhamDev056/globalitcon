import Image from "next/image";
import ContactForm from "@/app/Components/contactForm";

const ContactInfo1 = () => {
  return (
    <div>
      <div className="space100"></div>
      <div className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-boxs">
                <div className="heading1">
                  <h2>Contact Information</h2>
                  <div className="space16"></div>
                  <p>
                    Thank you for your interest in GLOBALITCON and our services.
                    Please provide the following information about your needs to
                    help us serve you better. This information will enable us to
                    route your request to the appropriate person. You should
                    receive a response within 48 hours.
                  </p>
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
                    <a href="mailto:info@GLOBALITCON.com" className="text">
                      info@GLOBALITCON.com
                    </a>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="icon">
                    <Image
                      src="/assets/img/icons/contact-page-icon3.png"
                      alt="img"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="heading">
                    <h5>Office Location</h5>
                    <a href="tel:(124)555-6565" className="text">
                      103 Geet Mohini Phase 6<br /> Bhopal, MP (462041)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
            {/* <div className="col-lg-6">
              <div className="contact-form-details">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-input">
                        <input type="text" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input">
                        <input type="text" placeholder="Last Name" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="single-input">
                        <input type="email" placeholder="Email" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="single-input">
                        <input type="number" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input">
                        <input type="text" placeholder="Subject" />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="single-input">
                        <textarea
                          cols="30"
                          rows="5"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <button className="theme-btn1">
                        Submit{" "}
                        <span>
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="space100"></div>

      <div className="contact-map-page">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.91258276559!2d77.45934581151572!3d23.282625878904735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c698d0e9655ef%3A0x794d19d52d89995f!2sGeet%20Mohini%20Phase-6!5e0!3m2!1sen!2sin!4v1739089048106!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo1;
