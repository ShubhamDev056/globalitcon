import Image from 'next/image';
import data from '../../Data/Home1/award1.json';

const Award1 = () => {
    return (
        <div className="">
          <div className="container">
            <div className="row hero-bottom-area">
            {data.map((item, i) => (
              <div key={i} className="col-lg-3">
                <div className="single-box">
                  <div className="icon">
                  <Image src={item.img} alt="img" width={28} height={28}   />
                  </div>
                  <div className="headding">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
    );
};

export default Award1;