"use client";

import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import useBookingForm from "@/hooks/useBookingForm";
import { countries } from "@/utils/constent";

const Form3 = () => {
  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
  } = useBookingForm({
    includeMessage: true,
    onSubmitSuccess: () => {},
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[540px] rounded-2xl border border-[#3C3C3C] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
    >
      {/* Heading */}
      <h3 className="mb-6 text-[30px] font-semibold text-secondary">
        Inquiry Now
      </h3>

      {/* Name */}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Your full name*"
          value={formData.name}
          onChange={handleChange}
          className="h-14 w-full rounded-md border border-[#3C3C3C] px-4 outline-none placeholder:text-[#777]"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Phone */}
      <div className="mb-4">
        <div className="flex h-14 overflow-hidden rounded-md border border-[#3C3C3C]">
          <div className="relative border-r border-[#3C3C3C]">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={(e) => setFieldValue("countryCode", e.target.value)}
              className="h-full appearance-none bg-white pl-4 pr-10 outline-none"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code}
                </option>
              ))}
            </select>

            <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Mobile number*"
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 px-4 outline-none placeholder:text-[#777]"
          />
        </div>

        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email ID*"
          value={formData.email}
          onChange={handleChange}
          className="h-14 w-full rounded-md border border-[#3C3C3C] px-4 outline-none placeholder:text-[#777]"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Enquiry */}
      <div className="relative mb-4">
        <select className="h-14 w-full appearance-none rounded-md border border-[#3C3C3C] px-4 outline-none text-[#777]">
          <option>Select Enquiries *</option>
          <option>Guest Enquiries</option>
          <option>Property Leasing</option>
          <option>Investor Relations</option>
          <option>Career Opportunities</option>
        </select>

        <IoIosArrowDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xl" />
      </div>

      {/* Message */}
      <div className="mb-5">
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us something about your enquiry!"
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-md border border-[#3C3C3C] p-4 outline-none placeholder:text-[#777]"
        />

        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="h-14 w-full rounded-md bg-primary text-lg font-medium text-white transition hover:opacity-90"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form3;
