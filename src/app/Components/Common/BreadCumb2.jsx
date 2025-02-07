import Image from "next/image";
import Link from "next/link";

const BreadCumb2 = ({Title}) => {
    
    return (

      <div className="common-hero" >
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-lg-6 m-auto">
            <div className="main-heading">
              <h1>{Title}</h1>
                <div className="space16"></div>
                <span className="span"><Image src="/assets/img/icons/span2.png" alt="img" width={18} height={16}   /> <Link href="/">Home</Link><span className="arrow"><i className="bi bi-chevron-right"></i></span> {Title}</span>
            </div>
          </div>

        </div>
      </div>
    </div>

    );
};

export default BreadCumb2;