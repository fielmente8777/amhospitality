"use client";
import useBookingForm from "@/hooks/useBookingForm";
import { CalendarIcon, CallIcon, MailIcon, UserIcon } from "@/utils/formIcons";
import { BookingCalenderIcon } from "@/utils/icons";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import { countries } from "../../utils/constent";

const Form2 = () => {
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

  const formFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      value: formData.name,
      onChange: handleChange,
      icon: <UserIcon />,
    },
    {
      name: "phone",
      label: "Ph Number",
      type: "tel",
      value: formData.phone,
      onChange: handleChange,
      icon: <CallIcon />,
    },
    {
      name: "email",
      label: "Email ID",
      type: "email",
      value: formData.email,
      onChange: handleChange,
      icon: <MailIcon />,
    },
    {
      name: "message",
      label: "Type your message...",
      type: "textarea",
      value: formData.message,
      onChange: handleChange,
    },
  ];
  // useEffect(() => {
  //   if (submitSuccess) {
  //     setStartDate(null);
  //     setEndDate(null);
  //   }
  // }, [submitSuccess]);

  return (
    // <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    //   {formFields.map((field, index) => (
    //     <React.Fragment key={index}>
    //       {field.type === "textarea" ? (
    //         <textarea
    //           key={index}
    //           name={field.name}
    //           placeholder={field.label}
    //           rows={4}
    //           className="p-4 bg-white rounded-lg w-full placeholder:text-[#7F7F7F] focus:outline-none text-p2 resize-none"
    //           value={field.value}
    //           onChange={field.onChange}
    //         ></textarea>
    //       ) : field.type === "tel" ? (
    //         <div
    //           key={index}
    //           className="bg-white p-4 rounded-lg flex items-center"
    //         >
    //           {/* <label className="text-secondary">{field.icon}</label> */}
    //           <div className="relative">
    //             <select
    //               className="ps-2 cursor-pointer border-p1 appearance-none w-full placeholder:text-secondarya focus:outline-none text-secondarya"
    //               name="countryCode"
    //               value={formData.countryCode}
    //               onChange={(e) => setFieldValue("countryCode", e.target.value)}
    //               style={{ width: `${formData.countryCode.length * 2}ch` }}
    //               aria-label="Country Code"
    //             >
    //               {countries.map((country, index) => (
    //                 <option key={index} value={country.code} className="">
    //                   {country.code}
    //                 </option>
    //               ))}
    //             </select>
    //             <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
    //               <IoIosArrowDown />
    //             </span>
    //           </div>
    //           <input
    //             type={field.type}
    //             name={field.name}
    //             placeholder={field.label}
    //             className={`w-full placeholder:text-secondarya focus:outline-none text-secondarya `}
    //             value={field.value}
    //             onChange={field.onChange}
    //           />
    //         </div>
    //       ) : (
    //         <div key={index} className="bg-white p-4 rounded-lg">
    //           {/* <label className="text-secondary">{field.icon}</label> */}
    //           <input
    //             key={index}
    //             type={field.type}
    //             name={field.name}
    //             placeholder={field.label}
    //             className={`w-full placeholder:text-secondarya focus:outline-none text-secondarya `}
    //             value={field.value}
    //             onChange={field.onChange}
    //           />
    //         </div>
    //       )}

    //       {errors[field.name] && (
    //         <p className="text-red-500">{errors[field.name]}</p>
    //       )}
    //     </React.Fragment>
    //   ))}
    //   <button
    //     type="submit"
    //     className=" bg-transparent w-full rounded-lg text-secondary border text-lg py-3"
    //   >
    //     {isSubmitting ? (
    //       "Submitting..."
    //     ) : (
    //       <span className="flex items-center justify-center gap-2.5">
    //         Request Call Back
    //       </span>
    //     )}
    //   </button>
    // </form>

    <div className="max_width">
    <form
  onSubmit={handleSubmit}
  className="border border-black rounded-lg bg-white p-5 shadow-md"
>
  <h3 className="text-xl font-medium mb-4">Get In Touch</h3>

  {/* Name & Email */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="text"
      name="name"
      placeholder="Your full name*"
      value={formData.name}
      onChange={handleChange}
      className="h-12 border border-black rounded-md px-4 outline-none placeholder:text-[#7F7F7F]"
    />

    <input
      type="email"
      name="email"
      placeholder="Email ID*"
      value={formData.email}
      onChange={handleChange}
      className="h-12 border border-black rounded-md px-4 outline-none placeholder:text-[#7F7F7F]"
    />
  </div>

  {(errors.name || errors.email) && (
    <div className="mt-2">
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
    </div>
  )}

  {/* Phone */}
  <div className="mt-4 flex h-12 overflow-hidden rounded-md border border-black">
    <div className="relative border-r border-black">
      <select
        name="countryCode"
        value={formData.countryCode}
        onChange={(e) => setFieldValue("countryCode", e.target.value)}
        className="h-full appearance-none bg-white pl-3 pr-8 outline-none"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.code}
          </option>
        ))}
      </select>

      <IoIosArrowDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>

    <input
      type="tel"
      name="phone"
      placeholder="Mobile number*"
      value={formData.phone}
      onChange={handleChange}
      className="flex-1 px-4 outline-none placeholder:text-[#7F7F7F]"
    />
  </div>

  {errors.phone && (
    <p className="mt-2 text-red-500 text-sm">{errors.phone}</p>
  )}

  {/* Message */}
  <textarea
    name="message"
    rows={5}
    placeholder="Tell us something about your enquiry!"
    value={formData.message}
    onChange={handleChange}
    className="mt-4 w-full rounded-md border border-black p-4 resize-none outline-none placeholder:text-[#7F7F7F]"
  />

  {errors.message && (
    <p className="mt-2 text-red-500 text-sm">{errors.message}</p>
  )}

  {/* Submit */}
  <button
    type="submit"
    className="mt-4 h-12 w-full rounded-md bg-primary text-white font-medium hover:opacity-90 transition"
  >
    {isSubmitting ? "Submitting..." : "Submit"}
  </button>
</form>
</div>
  );
};

export default Form2;
