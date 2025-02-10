import Image from "next/image";
import Link from "next/link";

const Footer1 = () => {
  return (
    <div className="footer1 _relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-footer-items footer-logo-area">
              <div className="footer-logo">
                <a href="">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/assets/img/logo/globalitcon-logo.jpeg"
                      alt="globalitcon-logo"
                      width={40}
                      height={10}
                      className="me-2"
                    />
                    <span className="fw-bold company-name-text">
                      GlobalITCon
                    </span>
                  </div>
                </a>
              </div>
              <div className="space20"></div>
              <div className="heading1">
                <p>
                  GlobalITCon is a trusted and highly accredited organisation
                  that provides IT consultancy services and technology
                  solutions.
                </p>
              </div>
              <ul className="social-icon">
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/globalitconllc/"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/global_it_con_llc"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Service We Offer</h3>

              <ul className="menu-list">
                <li>
                  <Link href="/service/service-details">
                    It Consulting & Support
                  </Link>
                </li>
                <li>
                  <Link href="/service/service-details">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link href="/service/service-details">
                    Mobile Application
                  </Link>
                </li>
                <li>
                  <Link href="/service/service-details">Web Design</Link>
                </li>
                <li>
                  <Link href="/service/service-details">Devops</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Useful Links</h3>

              <ul className="menu-list">
                <li>
                  <Link href="/service">Our Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/about">About Us </Link>
                </li>
                {/* <li>
                  <Link href="/blog">Blog & News</Link>
                </li>
                <li>
                  <Link href="/project">Project</Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Contact Us</h3>

              <div className="contact-box">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/footer1-icon1.png"
                    alt="img"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="pera">
                  <a href="tel:0500222333">0500 222 333</a>
                </div>
              </div>

              <div className="contact-box">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/footer1-icon2.png"
                    alt="img"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="pera">
                  <a href="tel:0356588547">8888535798</a>
                </div>
              </div>

              <div className="contact-box">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/footer1-icon3.png"
                    alt="img"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="pera">
                  <a href="mailto:info@GLOBALITCON.com">info@GLOBALITCON.com</a>
                </div>
              </div>

              <div className="contact-box">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/footer1-icon4.png"
                    alt="img"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="pera">
                  <a href="mailto:info@GLOBALITCON.com">
                    https://globalitcon.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space40"></div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="coppyright">
                <p>Copyright @{new Date().getFullYear()} GlobalITCon All Rights Reserved</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="coppyright right-area">
                <Link href="terms-and-conditions">Terms & Conditions</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
