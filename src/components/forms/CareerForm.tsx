"use client";

import axios from "axios";
import React, { useState, useMemo, useCallback } from "react";
import { ArrowUpIcons, UploadIcon } from "@/utils/icons";
import { contact } from "@/utils/constent";

type FormFields = {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  resume: string;
};

const CareerForm = () => {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    phone: "",
    email: "",
    linkedin: "",
    resume: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formsFields = useMemo(
    () => [
      { type: "text", name: "name", label: "Your Name" },
      { type: "tel", name: "phone", label: "Phone Number" },
      { type: "email", name: "email", label: "Email Id" },
      { type: "text", name: "linkedin", label: "LinkedIn" },
      // {
      //   type: "file",
      //   name: "resume",
      //   label: "Upload Resume",
      // },
    ],
    []
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        domain: contact.formDomain,
        hId: "81915268",
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
        linkedin: formData.linkedin,
        resume_url: formData.resume,
        status: "pending",
      };

      const { data } = await axios.post(
        "https://nexon.eazotel.com/career/create",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (data.Status) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          linkedin: "",
          resume: "",
        });
        alert("Application submitted successfully!");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid md:grid-cols-2 gap-x-6 md:gap-y-8 gap-y-4"
    >
      {formsFields.map((field) => (
        <div key={field.name} className="relative">
          <input
            type={field.type}
            name={field.name}
            placeholder={field.label}
            value={formData[field.name as keyof FormFields]}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full p-4 placeholder:text-[#505050] border border-primary rounded-md focus:outline-none bg-white disabled:opacity-50"
          />
          {/* {field.name === "resume" && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
              <UploadIcon />
            </span>
          )} */}
        </div>
      ))}
      <div className="relative">
        <input
          id="resume"
          type="file"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setFormData((prev) => ({
                ...prev,
                resume: file.name,
              }));
            }
          }}
        />

        <label
          htmlFor="resume"
          className="w-full h-[56px] border border-primary rounded-md bg-white px-4 flex items-center justify-between cursor-pointer"
        >
          <span className="text-[#505050]">
            {formData.resume || "Upload Resume"}
          </span>

          <UploadIcon />
        </label>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary text-white uppercase flex items-center justify-center gap-2 border px-4 py-2 font-semibold transition-all duration-300 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
        <ArrowUpIcons />
      </button>
    </form>
  );
};

export default CareerForm;
