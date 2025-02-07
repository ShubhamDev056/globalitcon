import Image from "next/image";
import Link from "next/link";

const HeroBanner2 = ({subTitle,title,featureList,image1,image2,image3}) => {
    return (
        <div className="hero2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="main-heading">
                    <span className="span" data-aos="zoom-in-right" data-aos-duration="700">
                    <Image src="/assets/img/icons/span2.png" alt="img" width={18} height={16}   />
                        {subTitle}</span>
                    <h1 className="title tg-element-title">{title}</h1>
                </div>

                <div className="row _relative">
                    <div className="col-lg-9">
                        <div className="hero2-tags">
                            <ul>
                            {featureList?.map((item, index) => (
                                <li key={index}><Link href="#">{item}</Link></li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="circle-shapes">
                            <div className="shape1 shape-animaiton4">
                            <Image src={image1} alt="img" width={125} height={125}   />
                            </div>
                            <div className="shape2">
                                <Link href="/service">
                                <Image src="/assets/img/shapes/hero2-shape2.png" alt="img" width={31} height={32}   />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero2-main-imges">
                    <div className="image1">
                    <Image src={image2} alt="img" width={362} height={383}   />
                    </div>
                </div>
              </div>

            </div>
          </div>

          <div className="hero2-main-imge2">
          <Image src={image3} alt="img" width={894} height={705}   />
          </div>
        </div>

    );
};

export default HeroBanner2;