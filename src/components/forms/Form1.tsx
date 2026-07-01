"use client";
import { getDateInputLimits } from "@/hooks/getDateInputLimits";
import useBookingForm from "@/hooks/useBookingForm";
import { CalendarIcon, CallIcon, MailIcon, UserIcon } from "@/utils/formIcons";
import { BookIcon, BookingCalenderIcon } from "@/utils/icons";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import { countries } from "../../utils/constent";

interface Props {
  gridView?: boolean;
}
const Form1 = ({ gridView }: Props) => {
  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
  } = useBookingForm({
    includeCheckIn: true,
    includeCheckOut: true,
    onSubmitSuccess: () => {
      setStartDate(null);
      setEndDate(null);
    },
  });
  const { min, max } = getDateInputLimits({
    showPast: false,
    showFuture: true,
  });

  const minDate = min ? new Date(min) : undefined;
  const maxDate = max ? new Date(max) : undefined;

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);

    if (start) {
      setFieldValue("checkIn", start.toISOString().split("T")[0]);
    }

    if (end) {
      setFieldValue("checkOut", end.toISOString().split("T")[0]);
    }
  };

  const formFields = [
    {
      name: "name",
      label: "Full Name",
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
      name: "hotel",
      label: "Select Hotel/Resort",
      type: "select",
      value: formData.hotel,
      onChange: handleChange,
      icon: <IoIosArrowDown />,
    },
    {
      name: "checkIn",
      label: "Check-in & out",
      type: "date",
      value: formData.checkIn || "",
      onChange: handleChange,
      icon: <CalendarIcon />,
    },
  ];
  // useEffect(() => {
  //   if (submitSuccess) {
  //     setStartDate(null);
  //     setEndDate(null);
  //   }
  // }, [submitSuccess]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`${gridView ? "flex flex-col gap-2" : "grid md:grid-cols-5 items-center gap-3.5 "} font-body px-4 py-2 bg-white/75 rounded-4xl overflow-hidden max-md:divide-y divide-p1`}
    >
      {formFields.map((field, index) => (
        <React.Fragment key={index}>
          {field.type === "date" ? (
            <div
              className={` flex items-center gap-2.5 lg:border-r  border-primary  ${gridView ? "p-4" : "max-md:pb-4 max-md:pt-2 py-3 lg:px-2"}`}
              key={index}
            >
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                minDate={minDate}
                maxDate={maxDate}
                placeholderText={field.label}
                calendarClassName="!z-[99999]"
                popperClassName="!z-[99999]"
                className={` pointer-events-auto placeholder:text-secondary outline-none w-full h-full bg-transparent text-base text-secondary`}
                wrapperClassName="w-full h-full !flex items-center"
              />
              <label className="text-secondary">{field.icon}</label>
            </div>
          ) : field.type === "tel" ? (
            <div
              className={`flex items-center gap-2.5 lg:border-r border-primary  ${gridView ? "p-4" : "max-md:pb-4 max-md:pt-2 py-3 lg:px-2"}`}
              key={index}
            >
              <label className="text-secondary">{field.icon}</label>
              <div className="relative">
                <select
                  className="ps-2 cursor-pointer border-none appearance-none w-full placeholder:text-secondary focus:outline-none text-secondary"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={(e) => setFieldValue("countryCode", e.target.value)}
                  style={{ width: `${formData.countryCode.length * 2}ch` }}
                  aria-label="Country Code"
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country.code} className="">
                      {country.code}
                    </option>
                  ))}
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <IoIosArrowDown />
                </span>
              </div>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                className={`w-full placeholder:text-secondary focus:outline-none text-secondary `}
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          ) : field.type === "select" ? (
            <div
              className={`flex items-center gap-2.5 lg:border-r border-primary  ${
                gridView ? "p-4" : "max-md:pb-4 max-md:pt-2 py-3 lg:px-2"
              }`}
            >
              <div className="relative w-full">
                <select
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  className="w-full appearance-none bg-transparent outline-none text-secondary pr-6"
                >
                  <option value="">Select Hotel/Resort</option>
                  <option value="Blue Lake Resort">Blue Lake Resort</option>
                  <option value="AM Hotels">AM Hotels</option>
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <IoIosArrowDown />
                </span>
                
              </div>
            </div>
          ) : (
            <div
              className={`flex items-center gap-2.5 lg:border-r border-primary  ${gridView ? "p-4" : "max-md:pb-4 max-md:pt-2 py-3 lg:px-2"}`}
              key={index}
            >
               <label className="text-secondary">{field.icon}</label>

              <input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.label}
                className={`w-full placeholder:text-secondary focus:outline-none text-secondary `}
                value={field.value}
                onChange={field.onChange}
              />
             
            </div>
          )}

          {errors[field.name] && (
            <p className="text-red-500">{errors[field.name]}</p>
          )}
        </React.Fragment>
      ))}
      <button
        type="submit"
        className=" bg-primary w-full rounded-4xl text-white text-lg py-3"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <span className="flex items-center justify-center gap-2.5">
        
            Book Now{" "}
            <span className="flex items-end">
              <BookIcon />
            </span>
          </span>
        )}
      </button>
    </form>
  );
};

export default Form1;
