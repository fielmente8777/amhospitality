"use client";

import { createContext, useContext, useState } from "react";

interface OpenGalleryProps {
  images: string[];
  index?: number;
}
interface OpenAmenityModalArray {
  name: string;
}
interface WebContextType {
  current: number;
  total: number;

  setCurrent: (current: number) => void;
  setTotal: (total: number) => void;

  isOpenFormPopUp: boolean;
  setIsOpenFormPopUp: (open: boolean) => void;

  isOpenNavBar: boolean;
  setIsOpenNavBar: (open: boolean) => void;

  openImageModal: boolean;
  setOpenImageModal: (open: boolean) => void;

  passImagesArray: string[];
  setPassImagesArray: (images: string[]) => void;

  openAmenityModal: boolean;
  setOpenAmenityModal: (open: boolean) => void;

  imageCurrentIndex: number;
  setImageCurrentIndex: (index: number) => void;

  amenityModalArray: OpenAmenityModalArray[];
  setAmenityModalArray: (array: OpenAmenityModalArray[]) => void;


  openGallery: ({ images, index }: OpenGalleryProps) => void;

  closeGallery: () => void;
}

const WebContext = createContext<WebContextType>({
  isOpenNavBar: false,
  setIsOpenNavBar: () => { },
  openImageModal: false,
  setOpenImageModal: () => { },

  passImagesArray: [],
  setPassImagesArray: () => { },

  imageCurrentIndex: 0,
  setImageCurrentIndex: () => { },

  openAmenityModal: false,
  setOpenAmenityModal: () => { },

  amenityModalArray: [],
  setAmenityModalArray: () => { },

  isOpenFormPopUp: false,
  setIsOpenFormPopUp: () => { },

  openGallery: () => { },

  closeGallery: () => { },

  current: 0,
  total: 0,

  setCurrent: () => { },
  setTotal: () => { },
});

interface WebProviderProps {
  children: React.ReactNode;
}

export const WebProvider = ({ children }: WebProviderProps) => {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);
  const [openImageModal, setOpenImageModal] = useState(false);

  const [isOpenFormPopUp, setIsOpenFormPopUp] = useState(false);

  const [passImagesArray, setPassImagesArray] = useState<string[]>([]);

  const [imageCurrentIndex, setImageCurrentIndex] = useState(0);

  const [openAmenityModal, setOpenAmenityModal] = useState(false);
  const [amenityModalArray, setAmenityModalArray] = useState<
    OpenAmenityModalArray[]
  >([]);
  const openGallery = ({ images, index = 0 }: OpenGalleryProps) => {
    setPassImagesArray(images);

    setImageCurrentIndex(index);

    setOpenImageModal(true);
  };

  const closeGallery = () => {
    setOpenImageModal(false);

    setPassImagesArray([]);

    setImageCurrentIndex(0);
  };

  return (
    <WebContext.Provider
      value={{
        current,
        total,
        setCurrent,
        setTotal,
        isOpenNavBar,
        setIsOpenNavBar,

        isOpenFormPopUp,
        setIsOpenFormPopUp,

        openImageModal,
        setOpenImageModal,

        passImagesArray,
        setPassImagesArray,

        imageCurrentIndex,
        setImageCurrentIndex,

        openAmenityModal,
        setOpenAmenityModal,

        amenityModalArray,
        setAmenityModalArray,

        openGallery,

        closeGallery,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => {
  const context = useContext(WebContext);

  if (context === undefined) {
    throw new Error("useWebContext must be used within a WebProvider");
  }

  return context;
};
