import Image from "next/image";
import Link from "next/link";

const Vission1 = () => {
  return (
    <div className="solution about-solution sp">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="images">
              <div className="row">
                <div className="col-lg-12">
                  <div className="image">
                    <Image
                      src="/assets/img/about/visiton-img1.webp"
                      alt="img"
                      width={636}
                      height={357}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="space30"></div>
                  <div className="image">
                    <Image
                      src="/assets/img/about/visiton-img2.webp"
                      alt="img"
                      width={306}
                      height={283}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="space30"></div>
                  <div className="image">
                    <Image
                      src="/assets/img/about/visiton-img3.webp"
                      alt="img"
                      width={306}
                      height={283}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="heading1">
              <span className="span">
                <Image
                  src="/assets/img/icons/span1.png"
                  alt="img"
                  width={18}
                  height={16}
                />
                Our Vision
              </span>
              <h2>What we do</h2>
              <div className="space16"></div>
              <p>
                At GLOBALITCON Inc, our team has multiple years of experience
                helping our clients find the right talent for their needs. We
                are locally owned, HQ at Virginia, and focus almost exclusively
                on the Information Technology market. We provide direct
                placement, contract to hire, and contract only services, and
                provide a great deal of flexibility within our services. We
                partner with our customers to learn their environment,
                processes, and goals, so that we can serve them better. Our goal
                is to help find the right talent in order to meet business
                objectives. We are part of your solution!
              </p>
              <div className="space16"></div>
              <p>
                For candidates, we help better your career by offering
                challenging work at our client companies. We understand not
                every job is right for every person, and we take the time to
                listen to your personal preferences in order to find the best
                fit. We tailor our compensation packages to the individual so
                that each person is getting the benefits that are most important
                to them. We are here to help you improve your skill set and your
                career!
              </p>

              <div className="item-box">
                <div className="icon">
                  <div className="">
                    <Image
                      src="/assets/img/icons/about-solution-iocn1.png"
                      alt="img"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
                <div className="">
                  <h3>
                    <a href="#">Network Infrastructure Solutions</a>
                  </h3>
                  <div className="space10"></div>
                  <p>
                    Build a reliable and secure network infrastructure that{" "}
                    <br /> supports your business operations enables seamless
                  </p>
                </div>
              </div>

              <div className="item-box">
                <div className="icon">
                  <div className="">
                    <Image
                      src="/assets/img/icons/about-solution-iocn2.png"
                      alt="img"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
                <div className="">
                  <h3>
                    <a href="#">Managed It Services</a>
                  </h3>
                  <div className="space10"></div>
                  <p>
                    Focus on your core business activities while we take <br />{" "}
                    care of your IT needs with our managed IT services.
                  </p>
                </div>
              </div>

              <div className="space30"></div>
              <div className="">
                <Link className="theme-btn1" href="/contact">
                  Get A Quote{" "}
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vission1;
