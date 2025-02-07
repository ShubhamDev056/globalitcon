import Link from 'next/link';
import data from '../../Data/projectPage.json';
import Image from 'next/image';

const Project4 = () => {
    return (
        <div className="project-boxs-area sp">
            <div className="container">
                <div className="row">
                {data.map((item, index)=>(
                    <div  key={index} className="col-lg-4 col-md-6">
                        <div className="project-page-box">
                            <div className="image">
                            <Image src={item.icon} alt="img" width={416} height={416}   />
                            </div>
                            <div className="heading2">
                                <h4><Link href="/project/project-details">{item.title}</Link></h4>
                                <Link href="/project/project-details" className="learn">Learn More <span><i className="bi bi-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default Project4;