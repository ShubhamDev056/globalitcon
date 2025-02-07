"use client"
import parse from 'html-react-parser';
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from 'next/link';
import Image from 'next/image';

const HeroBanner3 = ({bgImg,title,conetnt,mainImage,shape1,shape2,footerTitle,footerContent}) => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="hero3" data-background={bgImg}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 m-auto text-center">
                <div className="main-heading _relative">
                    <h1 className="title tg-element-title">{parse(title)}<span>
                    <Image src="/assets/img/icons/main-heading-span3.png" alt="img" width={31} height={30}   />
                        </span> </h1>
                    <div className="space16"></div>
                    <p>{parse(conetnt)}</p>
                    <Image className="arrow-shape" src="/assets/img/shapes/hero3-arrow-shape.png" alt="img" width={114} height={144}   />
                    <div className="space50"></div>
                    <div className="hero3-main-images _relative"> 
                        <div className="main-image">
                        <Image src={mainImage} alt="img" width={966} height={499}   />
                        </div>
                            <div className="circle-shape">
                            <Image className="shape1 shape-animaiton4" src={shape1} alt="img" width={125} height={125}   />
                                <a href="#">
                                <Image src="/assets/img/shapes/hero2-shape2.png" className="shape2" alt="img" width={31} height={32}   />
                                </a>
                            </div>
                            <div className="image-shape shape-animaiton3">
                            <Image src={shape2} alt="img" width={299} height={162}   />
                            </div>
                            <div className="support-box">
                                <div className="icon">
                                    <Link href="/service/service-details"><i className="bi bi-arrow-right"></i></Link>
                                </div>
                                <div className="heading3-w">
                                    <h4><Link href="/service/service-details">{footerTitle}t</Link></h4>
                                    <p>{parse(footerContent)}</p>
                                </div>
                            </div>

                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    );
};

export default HeroBanner3;