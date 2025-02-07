import Image from "next/image";
import Link from "next/link";

const About1 = ({image1,image2,supIcon,supTitle,supCon,subTitle,Title,content,featurelist,btnName,btnUrl}) => {
    return (
        <div className="about1 sp">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-image">
                  <div className="image1">
                  <Image src={image1} alt="img" width={100} height={321}   />
                  </div>
                  <div className="image2 image-anime">
                  <Image src={image2} alt="img" width={440} height={582}   />
                  </div>
                  <div className="icon-box">
                  <Image src={supIcon} alt="img" width={22} height={28}   />
                    <h4>{supTitle}</h4>
                    <p>{supCon}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="heading1">
                  <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                  <Image src="/assets/img/icons/span1.png" alt="img" width={18} height={16}   /> {subTitle}</span>
                  <h2 className="title tg-element-title">{Title}</h2>
                  <div className="space16"></div>
                  <p data-aos="fade-left" data-aos-duration="800">{content}</p>

                    <ul className="list" data-aos="fade-left" data-aos-duration="1100">
                    {featurelist?.map((item, index) => (
                      <li key={index}><span><i className="bi bi-check-lg"></i></span> {item}</li>
                    ))}
                    </ul>
                    <div className="space30"></div>
                    <div className="" data-aos="fade-left" data-aos-duration="900">
                      <Link className="theme-btn1" href={btnUrl}>{btnName} <span><i className="bi bi-arrow-right"></i></span></Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default About1;