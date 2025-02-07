import Link from 'next/link';
import data from '../../Data/Home1/choose1.json';
import Image from 'next/image';

const Choose1 = () => {

    const mainContent = {
        subTitle:'Best It Solution',
        title:'Lets Elevate Your Business With Strategic IT Solutions',
        Content:'At TechXen, we understand that every business is unique, which is why we offer a range of flexible IT solutions designed to address your specific challenges and goals.',
        btnName:'Discover More',
        btnUrl:'/contact',
        img1:'/assets/img/work/work-img1.png',
        img2:'/assets/img/work/work-img3.png',
        img3:'/assets/img/work/work-img2.png',
      }

    return (
        <div className="work sp">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="heading1">
                  <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                  <Image src="/assets/img/icons/span1.png" alt="img" width={18} height={16}   />{mainContent.subTitle}</span>
                  <h2 className="title tg-element-title">{mainContent.title}</h2>
                  <div className="space16"></div>
                  <p data-aos="fade-right" data-aos-duration="700">{mainContent.Content}</p>

                  {data.map((item, i) => (
                  <div key={i} className="single-items" data-aos="fade-right" data-aos-duration="700">
                    <div className="">
                      <div className="icon">
                      <Image src={item.img} alt="img" width={24} height={20}   />
                      </div>
                    </div>
                    <div className="">
                      <h4><Link href="/service/service-details">{item.title}</Link></h4>
                      <div className="space10"></div>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
                </div>
                <div className="space30"></div>
                <div className="" data-aos="fade-right" data-aos-duration="800">
                  <Link className="theme-btn1" href={mainContent.btnUrl}>{mainContent.btnName} <span><i className="bi bi-arrow-right"></i></span></Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="work-images">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="image image-anime">
                      <Image src={mainContent.img1} alt="img" width={306} height={363}   />
                      </div>
                      <div className="image image-anime">
                      <Image src={mainContent.img2} alt="img" width={306} height={363}   />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="image image-anime">
                      <Image src={mainContent.img3} alt="img" width={306} height={340}   />
                      </div>
                    </div>
                  </div>
                  <Image src="/assets/img/bg/work-bg.png" alt="img" className="bg-image shape-animaiton4" width={536} height={494}   />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Choose1;