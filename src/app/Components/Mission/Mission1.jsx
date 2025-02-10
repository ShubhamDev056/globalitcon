import Image from "next/image";
import Link from "next/link";

const Mission1 = () => {
  return (
    <div className="solution sp bg1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading1">
              <span className="span">
                <Image
                  src="/assets/img/icons/span1.png"
                  alt="img"
                  width={18}
                  height={16}
                />
                Our Mission
              </span>
              <h2>Innovating for Success: Our Technology Mission</h2>
              <div className="space16"></div>
              <p>
                As a Global IT staffing and consulting firm, specializing in
                supporting all functional and technical requirements the levels
                of staff range from Consultant/Developer to Sr. Consultant/Team
                Lead to Project Manager / Strategic Architect level in the core
                competencies below
              </p>
              <div className="space16"></div>
              <ul>
                <li>
                  <i className="bi bi-dot"></i>
                  <span>
                    Business & IT Architecture: Process Redesign, Roadmap
                    Definition, Requirements
                  </span>
                </li>
                <li>
                  <i className="bi bi-dot"></i>
                  <span>PMO: ITIL/ITSM/BA/BSA</span>
                </li>
                <li>
                  <i className="bi bi-dot"></i>
                  <span>Business Intelligence / Data Warehousing</span>
                </li>
                <li>
                  <i className="bi bi-dot"></i>
                  <span>Security & Infrastructure</span>
                </li>
                <li>
                  <i className="bi bi-dot"></i>
                  <span>Database Administration</span>
                </li>
                <li>
                  <i className="bi bi-dot"></i>
                  <span>ERP Solutions</span>
                </li>
                <li>
                  <i className="bi bi-dot"></i>
                  <span>SAP All applications and Modules</span>
                </li>
                <li>
                  <i className="bi bi-dot"></i>
                  <span>CRMs</span>
                </li>
              </ul>
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

          <div className="col-lg-6">
            <div className="solution-images">
              <div className="image1">
                <Image
                  src="/assets/img/others/solution-img1.webp"
                  alt="img"
                  width={178}
                  height={134}
                />
              </div>
              <div className="image2">
                <Image
                  src="/assets/img/others/solution-img2.webp"
                  alt="img"
                  width={470}
                  height={400}
                />
              </div>
              <div className="image3">
                <Image
                  src="/assets/img/others/solution-img3.webp"
                  alt="img"
                  width={178}
                  height={134}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission1;
