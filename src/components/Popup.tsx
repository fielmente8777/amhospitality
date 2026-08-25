"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  const [timeText, setTimeText] = useState("AM MORNING");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setTimeText("AM MORNING");
    } else if (hour >= 12 && hour < 17) {
      setTimeText("AM  AFTER NOON");
    } else {
      setTimeText("AM EVENING");
    }
  }, []);

  useEffect(() => {
    if (hasBeenDismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 0); // 10 seconds

    return () => clearTimeout(timer);
  }, [hasBeenDismissed]);

  const handleClose = () => {
    setIsOpen(false);
    setHasBeenDismissed(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4"
      onClick={handleClose}
    >
      <div
        className="max-w-2xl w-full relative rounded-[11px] border-2 border-white/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <button
          className="text-primary absolute top-2 left-2 z-20 hover:bg-primary hover:text-white w-8 aspect-square rounded-full bg-secondary flex items-center justify-center"
          onClick={handleClose}
          type="button"
          aria-label="Close popup"
        >
          ✕
        </button> */}
        <div className="w-full relative aspect-[4/2.5] rounded-lg overflow-hidden">
          <Image
            fill
            className="object-cover"
            src="/popupImage.jpg"
            alt="Image"
          />
          <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 to-black/40" />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center text-white">
            {/* TITLE */}
            <p className="text-2xl font-bold tracking-wider drop-shadow-md md:text-4xl">
              {timeText}
            </p>

            <div className="my-6 flex w-full max-w-[180px] items-center justify-center">
              <div className="h-px w-full bg-white opacity-90 shadow-sm" />
            </div>
            {/* DESCRIPTION */}
            <p className=" max-w-xl text-sm text-white/90 drop-shadow-md md:text-[26px] mb-6 font-display">
              You’re Heartly Welcome!
            </p>

            {/* EXPLORE BUTTON */}
            {/* <button
              type="button"
              onClick={handleClose}
              className="

      bg-primary
      rounded-xl
      px-6 py-2.5
      text-xs
      uppercase
      tracking-[0.15em]
      text-white
      transition-all
      duration-300
      hover:bg-white
      hover:text-primary
      md:px-8 md:py-3
    "
            >
              Explore Am Hospitality
            </button> */}

            {/* EXPLORE */}
            <Link
              href="/"
              onClick={handleClose}
              className="
              absolute bottom-6
      rounded-xl
      bg-primary
      px-6 py-3
      text-xs
      font-medium
      uppercase
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:bg-white
      hover:text-primary
      md:px-8
    "
            >
              Explore Am Hospitality
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup;
