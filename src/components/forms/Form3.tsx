"use client";

import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import useBookingForm from "@/hooks/useBookingForm";
import { countries } from "@/utils/constent";

const Form3 = () => {
  const {
    isSubmitting,
    submitSuccess,
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
      className="w-full rounded-xl border border-[#D5C7B5] bg-[#EFE8DD] p-6 sm:p-8 shadow-sm"
    >
      {/* Heading */}
      <h3 className="mb-6 text-2xl sm:text-3xl font-bold text-secondary">
        Get In Touch
      </h3>

      {/* Name */}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Your full name*"
          value={formData.name}
          onChange={handleChange}
          className="h-14 w-full rounded-md border border-[#C5B49F]/60 bg-white px-4 text-secondary outline-none placeholder:text-[#777] transition focus:border-primary focus:ring-1 focus:ring-primary"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Phone with Country Code */}
      <div className="mb-4">
        <div className="flex h-14 overflow-hidden rounded-md border border-[#C5B49F]/60 bg-white transition focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <div className="relative border-r border-[#C5B49F]/60 bg-white">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={(e) => setFieldValue("countryCode", e.target.value)}
              className="h-full appearance-none bg-white pl-4 pr-9 text-secondary outline-none cursor-pointer"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code}
                </option>
              ))}
            </select>

            <IoIosArrowDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-secondary/70" />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Mobile number*"
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 bg-white px-4 text-secondary outline-none placeholder:text-[#777]"
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
          className="h-14 w-full rounded-md border border-[#C5B49F]/60 bg-white px-4 text-secondary outline-none placeholder:text-[#777] transition focus:border-primary focus:ring-1 focus:ring-primary"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Select Enquiries */}
      <div className="relative mb-4">
        <select
          name="enquiryType"
          onChange={(e) => setFieldValue("city", e.target.value)}
          className="h-14 w-full appearance-none rounded-md border border-[#C5B49F]/60 bg-white px-4 text-[#777] outline-none transition focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
        >
          <option value="">Select Enquiries *</option>
          <option value="Guest Enquiries">Guest Enquiries</option>
          <option value="Property Leasing">Property Leasing</option>
          <option value="Investor Relations">Investor Relations</option>
          <option value="Career Opportunities">Career Opportunities</option>
        </select>

        <IoIosArrowDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xl text-[#777]" />
      </div>

      {/* Message */}
      <div className="mb-5">
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us something about your enquiry!"
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-md border border-[#C5B49F]/60 bg-white p-4 text-secondary outline-none placeholder:text-[#777] transition focus:border-primary focus:ring-1 focus:ring-primary"
        />

        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      {submitSuccess && (
        <p className="mb-4 text-sm font-medium text-emerald-700">
          Message sent successfully! Our team will get in touch with you soon.
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="h-14 w-full rounded-md bg-primary text-base font-semibold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#6b4724] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form3;
