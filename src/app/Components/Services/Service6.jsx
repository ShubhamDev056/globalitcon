import Link from 'next/link';
import data from '../../Data/sercicePage.json';
import Image from 'next/image';

const Service6 = () => {
    return (
        <div className="servcie2 service-page-sec">
            <div className="space100"></div>
        <div className="container">
          <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="">
                <div className="servcie2-box">
                  <div className="icon">
                  <Image src={item.icon} alt="img" width={24} height={24}   />
                  </div>
                  <Link href={item.btnLink} className="arrow"><i className="bi bi-arrow-right"></i></Link>
                  <div className="heading1">
                    <h4><Link href={item.btnLink}>{item.title}</Link></h4>
                    <div className="space16"></div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
            ))}

          </div>
        </div>
      </div>
    );
};

export default Service6;