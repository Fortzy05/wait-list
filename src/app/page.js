"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./components/Footer";
import Link from "next/link";
import logo from "../assets/menu-nav-logo-1.png"
export default function Page() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    countryCity: "",
    email: "",
    socialHandle: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = "Full Name is required";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone Number is required";
    if (!formData.countryCity) errors.countryCity = "Country/City is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.socialHandle)
      errors.socialHandle = "Social Handle is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="w-screen min-h-screen overflow-hidden">
      <div className="bg-[#E3B522] gap-4 w-[100vw] h-[104px] items-center flex pl-[92px]">
        <Image src={logo} height={80} width={80} alt="" />
        <h1 className="uppercase font-display font-bold text-[25px] leading-[4rem] text-[#14BDE3]">
          Kgf cause shop
        </h1>
      </div>

      {isSubmitted ? (
        <div className="px-24 py-8 my-8">
          <div className="flex justify-center items-center">
            <div className="w-[300px] h-[300px] bg-[#94D9B9]/15 rounded-full relative flex justify-center items-center ">
              <div className="absolute w-[200px] h-[200px] bg-[#94D9B9]/45 rounded-full">
                <div className="flex h-full mx-auto justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#00A859"
                    className="size-[89.25px]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <h1 className="font-bold my-8 font-display text-[2rem] text-[#000000] text-center mt-4">
            Congratulations!
          </h1>
          <h1 className="text-[20px] font-display text-[#6E6363] text-center mt-4">
            You have been successfully added to the waiting list
          </h1>
          <Link className="h-full flex" href="/">
            <button className="px-5 py-2.5 font-display bg-[#E3B522] rounded-[50px] text-[#f1f1f1f1] text-[20px] mt-11 mx-auto">
              Go to the KGF Cause Shop
            </button>
          </Link>
        </div>
      ) : (
        <section className="px-24 pt-24 font-display">
          <h1 className="my-4 font-display font-bold text-[4rem] leading-[4rem] text-[#000000]">
            Welcome!
          </h1>
          <h4 className="my-8 font-display font-bold leading-10 text-[32px] text-[#000000]">
            This website is under construction
          </h4>
          <p className="font-bold leading-[28px] text-[24px] text-[#6E6363]">
            Join the waiting list for access to the carefully curated
            ethically-sourced collection of African products
          </p>
          <div className=" my-24 flex justify-center">
            <Image src="/cuate.svg" height={500} width={500} alt="" />
          </div>
          <div className="bg-[#F7F9F9] font-display flex items-center w-[940px] h-[112px] rounded-[10px] p-5">
            <p className="text-[1rem] font-display leading-6 w-[900px] h-[72px] ">
              By submitting this form, you consent to the collection and
              processing of your personal data in accordance with the General
              Data Protection Regulation (GDPR) for the purpose of the Research.
              Your information and responses will be kept confidential and used
              solely for the purpose of this research.
            </p>
          </div>

          <div className="mt-11">
            <form className="mb-[157px] font-display" onSubmit={handleSubmit}>
              <div className="flex gap-5 mb-5 items-center">
                <input
                  className="rounded-[10px] border-[1px] border-[#6E6363] px-2.5 py-2.5 w-[380px] h-[34px]"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className="text-red-500">{errors.fullName}</p>
                )}
                <input
                  className="rounded-[10px] border-[1px] border-[#6E6363] px-2.5 py-2.5 w-[380px] h-[34px]"
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber}</p>
                )}
              </div>
              <div className="flex gap-5 mb-5 items-center">
                <input
                  className="rounded-[10px] border-[1px] border-[#6E6363] px-2.5 py-2.5 w-[380px] h-[34px]"
                  type="text"
                  name="countryCity"
                  placeholder="Country/City"
                  value={formData.countryCity}
                  onChange={handleChange}
                />
                {errors.countryCity && (
                  <p className="text-red-500">{errors.countryCity}</p>
                )}
                <input
                  className="rounded-[10px] border-[1px] border-[#6E6363] px-2.5 py-2.5 w-[380px] h-[34px]"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="mb-5 flex items-center">
                <input
                  className="rounded-[10px] border-[1px] border-[#6E6363] px-2.5 py-2.5 w-[788px] h-[34px]"
                  type="url"
                  name="socialHandle"
                  placeholder="Twitter/Instagram/Facebook handle"
                  value={formData.socialHandle}
                  onChange={handleChange}
                />
                {errors.socialHandle && (
                  <p className="text-red-500">{errors.socialHandle}</p>
                )}
              </div>
              <button
                className="px-5 py-2.5 bg-[#E3B522] text-[#ffffff] rounded-[50px]"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      )}

      <div className="pb-2 relative mr-8 mb-8 ">
        <h1 className="font-semibold text-[20px] pt-2 leading-7 w-[250px] right-11 absolute  text-[#6E6363]">
          452 others just joined
        </h1>
        <div className="right-0 border-[#FFFFFF] rounded-full absolute w-[36px] h-[36px] border-[3px] bg-[#D9D9D9]"></div>
        <div className="right-3 border-[#FFFFFF] rounded-full absolute w-[36px] h-[36px] border-[3px] bg-[#D9D9D9]"></div>
        <div className="right-6 border-[#FFFFFF] rounded-full absolute w-[36px] h-[36px] border-[3px] bg-[#D9D9D9]"></div>
        <div className="right-9 border-[#FFFFFF] rounded-full absolute w-[36px] h-[36px] border-[3px] bg-[#D9D9D9]"></div>
        <div className="right-12 border-[#FFFFFF] rounded-full absolute w-[36px] h-[36px] border-[3px] bg-[#D9D9D9]"></div>
      </div>

      <div className="pt-11">
        <Footer />
      </div>
    </section>
  );
}
