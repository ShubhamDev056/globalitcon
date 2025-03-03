"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import careerFormSchema from "./careerFormSchema";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CareerForm = () => {
  const [serverResponse, setServerResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null); // Ref to store the timeout ID

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(careerFormSchema),
  });
  // Handle phone number input change
  const handlePhoneChange = (value) => {
    setValue("phoneNumberHome", value); // Update phone number in form state
  };

  const onSubmitHandler = async (data) => {
    console.log("form submitted", data);
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("zipcode", data.zipcode);
    formData.append("state", data.state);
    formData.append("phoneNumberHome", data.phoneNumberHome);
    formData.append("phoneNumberWork", data.phoneNumberWork);
    formData.append("workAuthorization", data.workAuthorization);
    formData.append("iTExperience", data.iTExperience);
    formData.append("primarySkill", data.primarySkill);
    formData.append("USExperience", data.USExperience);
    formData.append("skillSets", data.skillSets);
    formData.append("resume", data.resume[0]); // Append first file

    setServerResponse(null);
    setLoading(true);

    try {
      const response = await axios.post("/api/applynow", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setServerResponse({
        type: "success",
        message:
          "Your request was successfully sent. Thank you for your interest in GLOBALITCON; you should receive a response within 48 hours!",
      });
      reset();

      // Clear previous timeout if any
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set a new timeout to hide the alert after 5 seconds
      timeoutRef.current = setTimeout(() => {
        setServerResponse(null);
      }, 5000);
    } catch (error) {
      setServerResponse({
        type: "error",
        message: error.response?.data?.message || "Something went wrong.",
      });

      // Clear previous timeout if any
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set a new timeout to hide the alert after 5 seconds
      timeoutRef.current = setTimeout(() => {
        setServerResponse(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-lg-6">
      <div className="space30"></div>
      <div className="space30"></div>
      <div className="space30"></div>
      <div className="space16"></div>
      <h2>Submit the form below and we will contact you soon!</h2>
      <div className="space16"></div>
      <div className="contact-form-details">
        {/* Success/Error Alert */}
        {serverResponse && (
          <div
            className={`alert ${
              serverResponse.type === "success"
                ? "alert-success"
                : "alert-danger"
            }`}
            role="alert"
          >
            {serverResponse.message}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off">
          <div className="row">
            <legend>Personal Information</legend>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="First Name"
                  className={`${
                    errors.firstName
                      ? "error-border"
                      : watch("firstName")
                      ? "success-border"
                      : ""
                  }`}
                />
                <p className="form-error-msg">{errors.firstName?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Last Name"
                  className={`${
                    errors.lastName
                      ? "error-border"
                      : watch("lastName")
                      ? "success-border"
                      : ""
                  }`}
                />
                <p className="form-error-msg">{errors.lastName?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className={`${
                    errors.email
                      ? "error-border"
                      : watch("email")
                      ? "success-border"
                      : ""
                  }`}
                />
                <p className="form-error-msg">{errors.email?.message}</p>
              </div>
            </div>

            <legend>Contact Information</legend>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("address")}
                  type="text"
                  placeholder="Address"
                  className={`${
                    errors.address
                      ? "error-border"
                      : watch("address")
                      ? "success-border"
                      : ""
                  }`}
                />
                <p className="form-error-msg">{errors.address?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("city")}
                  type="text"
                  placeholder="City"
                  className={`${
                    errors.city
                      ? "error-border"
                      : watch("city")
                      ? "success-border"
                      : ""
                  }`}
                />
                <p className="form-error-msg">{errors.city?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("country")}
                  type="text"
                  placeholder="Country"
                  className={`${
                    errors.country
                      ? "error-border"
                      : watch("country")
                      ? "success-border"
                      : ""
                  }`}
                />
                <p className="form-error-msg">{errors.country?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("zipcode")}
                  type="text"
                  placeholder="Zip Code"
                  className={`${
                    errors.zipcode
                      ? "error-border"
                      : watch("zipcode")
                      ? "success-border"
                      : ""
                  }`}
                />
                <p className="form-error-msg">{errors.zipcode?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("state")}
                  type="text"
                  placeholder="State"
                  className={`${
                    errors.state
                      ? "error-border"
                      : watch("state")
                      ? "success-border"
                      : ""
                  }`}
                />
                <p className="form-error-msg">{errors.state?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <PhoneInput
                  country={"in"} // Default country (India)
                  enableSearch={false} // Allows searching for countries
                  disableCountryCode={false} // Ensures country code is visible
                  inputClass={`phone-input-custom ${
                    errors.phoneNumberHome ? "error-borders" : ""
                  }`}
                  containerClass="phone-input-container"
                  dropdownClass="custom-dropdown"
                  value={watch("phoneNumberHome")} // Track changes
                  onChange={handlePhoneChange} // Set value in form
                />
                {/* <input
                  {...register("phoneNumberHome")}
                  type="text"
                  placeholder="Phone (Home)"
                  className={`${
                    errors.phoneNumberHome
                      ? "error-border"
                      : watch("phoneNumberHome")
                      ? "success-border"
                      : ""
                  }`}
                /> */}
                <p className="form-error-msg">
                  {errors.phoneNumberHome?.message}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("phoneNumberWork")}
                  type="text"
                  placeholder="Phone (Work)"
                  className={`${
                    errors.phoneNumberWork
                      ? "error-border"
                      : watch("phoneNumberWork")
                      ? "success-border"
                      : ""
                  }`}
                />
                <p className="form-error-msg">
                  {errors.phoneNumberWork?.message}
                </p>
              </div>
            </div>

            <legend>Work Experience</legend>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("workAuthorization")}
                  type="text"
                  placeholder="Work Authorization"
                  className={`${
                    errors.workAuthorization
                      ? "error-border"
                      : watch("workAuthorization")
                      ? "success-border"
                      : ""
                  }`}
                />
                <p className="form-error-msg">
                  {errors.workAuthorization?.message}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("iTExperience")}
                  type="text"
                  placeholder="IT Experience"
                  className={`${
                    errors.iTExperience
                      ? "error-border"
                      : watch("iTExperience")
                      ? "success-border"
                      : ""
                  }`}
                />
                <p className="form-error-msg">{errors.iTExperience?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("primarySkill")}
                  type="text"
                  placeholder="Primary Skill"
                  className={`${
                    errors.primarySkill
                      ? "error-border"
                      : watch("primarySkill")
                      ? "success-border"
                      : ""
                  }`}
                />
                <p className="form-error-msg">{errors.primarySkill?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("USExperience")}
                  type="text"
                  placeholder="US Experience"
                  className={`${
                    errors.USExperience
                      ? "error-border"
                      : watch("USExperience")
                      ? "success-border"
                      : ""
                  }`}
                />
                <p className="form-error-msg">{errors.USExperience?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("skillSets")}
                  type="text"
                  placeholder="Skill Sets"
                  className={`${
                    errors.skillSets
                      ? "error-border"
                      : watch("skillSets")
                      ? "success-border"
                      : ""
                  }`}
                />
                <p className="form-error-msg">{errors.skillSets?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  type="file"
                  {...register("resume", {
                    required: "Resume file is required.",
                    validate: (files) =>
                      files.length > 0 || "Please upload a resume file.",
                  })}
                  accept=".pdf,.doc,.docx"
                  className={`${
                    errors.resume
                      ? "error-border"
                      : watch("resume")
                      ? "success-border"
                      : ""
                  }`}
                  // className={`${
                  //   errors.resume
                  //     ? "error-border"
                  //     : watch("resume")
                  //     ? "success-border"
                  //     : ""
                  // }`}
                />
                <p className="form-error-msg">{errors.resume?.message}</p>
              </div>
            </div>

            <div className="col-lg-12">
              <button className="theme-btn1" type="submit" disabled={loading}>
                {loading ? (
                  <span>
                    <div
                      className="spinner-border spinner-border-sm"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>{" "}
                    Sending...
                  </span>
                ) : (
                  <span>
                    Submit <i className="bi bi-arrow-right"></i>
                  </span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
