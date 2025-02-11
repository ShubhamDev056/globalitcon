import React from "react";

const CareerForm = () => {
  return (
    <div className="col-lg-6">
      <div className="space30"></div>
      <div className="space30"></div>
      <div className="space30"></div>
      <div className="space16"></div>
      <h2>Submit the form below and we will contact you soon!</h2>
      <div className="space16"></div>
      <div className="contact-form-details">
        <form action="#">
          <div className="row">
            <legend>Personal Information</legend>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="text" placeholder="First Name" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="email" placeholder="Email" />
              </div>
            </div>

            <legend>Contact Information</legend>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="text" placeholder="Address" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="text" placeholder="City" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="text" placeholder="Country" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="text" placeholder="Zip Code" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="text" placeholder="State" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="text" placeholder="Phone (Home)" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="text" placeholder="Phone (Work)" />
              </div>
            </div>

            <legend>Work Experience</legend>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="text" placeholder="Work Authorization" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="text" placeholder="IT Experience" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="text" placeholder="Primary Skill" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="text" placeholder="US Experience" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="text" placeholder="Skill Sets" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input type="file" placeholder="IT Experience" />
              </div>
            </div>

            <div className="col-lg-12">
              <button className="theme-btn1">
                Submit{" "}
                <span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
