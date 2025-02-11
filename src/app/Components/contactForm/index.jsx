"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contactFormSchema from "./contactFormSchema";
import axios from "axios";

const Index = () => {
  const [serverResponse, setServerResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null); // Ref to store the timeout ID

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
    setLoading(true);

    try {
      const response = await axios.post("/api/contact", data, {
        headers: { "Content-Type": "application/json" },
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

export default Index;
