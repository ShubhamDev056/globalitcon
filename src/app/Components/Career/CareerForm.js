"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import careerFormSchema from "./careerFormSchema";
import axios from "axios";

const CareerForm = () => {
  const [serverResponse, setServerResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null); // Ref to store the timeout ID

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(careerFormSchema),
  });

  const onSubmitHandler = async (data) => {
    setServerResponse(null);
    setLoading(true);

    // try {
    //   const response = await axios.post("/api/contact", data, {
    //     headers: { "Content-Type": "application/json" },
    //   });

    //   setServerResponse({
    //     type: "success",
    //     message:
    //       "Your request was successfully sent. Thank you for your interest in GLOBALITCON; you should receive a response within 48 hours!",
    //   });
    //   reset();

    //   // Clear previous timeout if any
    //   if (timeoutRef.current) {
    //     clearTimeout(timeoutRef.current);
    //   }

    //   // Set a new timeout to hide the alert after 5 seconds
    //   timeoutRef.current = setTimeout(() => {
    //     setServerResponse(null);
    //   }, 5000);
    // } catch (error) {
    //   setServerResponse({
    //     type: "error",
    //     message: error.response?.data?.message || "Something went wrong.",
    //   });

    //   // Clear previous timeout if any
    //   if (timeoutRef.current) {
    //     clearTimeout(timeoutRef.current);
    //   }

    //   // Set a new timeout to hide the alert after 5 seconds
    //   timeoutRef.current = setTimeout(() => {
    //     setServerResponse(null);
    //   }, 5000);
    // } finally {
    //   setLoading(false);
    // }
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
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="row">
            <legend>Personal Information</legend>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="First Name"
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
                />
                <p className="form-error-msg">{errors.address?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input {...register("city")} type="text" placeholder="City" />
                <p className="form-error-msg">{errors.city?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("country")}
                  type="text"
                  placeholder="Country"
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
                />
                <p className="form-error-msg">{errors.zipcode?.message}</p>
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
