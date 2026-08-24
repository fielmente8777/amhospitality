"use client";
import Image from "next/image";
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
      setTimeText("AM NOON");
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

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
      onClick={handleClose}
    >
      <div
        className="max-w-2xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="text-primary absolute top-2 left-2 z-20 hover:bg-primary hover:text-white w-8 aspect-square rounded-full bg-secondary flex items-center justify-center"
          onClick={handleClose}
          type="button"
          aria-label="Close popup"
        >
          ✕
        </button>
        <div className="w-full relative aspect-[4/2] rounded-lg overflow-hidden">
          <Image fill className="object-cover"
            src="/popupImage.jpg"
            alt="Image" />
          <div className="absolute w-full p-4 text-white inset-0 flex flex-col items-center justify-center gap-4">
            <p className="text-2xl md:text-4xl font-bold tracking-wider drop-shadow-md">{timeText}</p>


          </div>


        </div>
      </div>
    </div>
  );
};
export default Popup;