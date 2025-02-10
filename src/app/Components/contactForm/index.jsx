"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contactFormSchema from "./contactFormSchema";
//import { submitContactForm } from "@/app/action/form";

const Index = () => {
  const [serverResponse, setServerResponse] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmitHandler = async (data) => {
    setServerResponse(null);

    // Convert data to FormData (required for Server Actions)
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    // const response = await submitContactForm(formData); // Call server action

    // if (!response.success) {
    //   setServerResponse({ error: response.errors });
    // } else {
    //   setServerResponse({ success: response.message });
    // }
    //reset();
  };

  return (
    <div className="col-lg-6">
      <div className="contact-form-details">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="row">
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

            <div className="col-lg-6">
              <div className="single-input">
                <input
                  {...register("phoneNumber")}
                  type="number"
                  placeholder="Phone"
                />
                <p className="form-error-msg">{errors.phoneNumber?.message}</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="single-input">
                <input
                  {...register("subject")}
                  type="text"
                  placeholder="Subject"
                />
                <p className="form-error-msg">{errors.subject?.message}</p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="single-input">
                <textarea
                  {...register("message")}
                  cols="30"
                  rows="5"
                  placeholder="Message"
                ></textarea>
                <p className="form-error-msg">{errors.message?.message}</p>
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

export default Index;
