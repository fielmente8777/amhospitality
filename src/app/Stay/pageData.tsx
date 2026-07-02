import { BIcon, TeaIcon, TVIcon } from "@/utils/icons";
import { JSX } from "react";

export interface StayBannerProps {
  image: string;
  title: string;
}

export interface ResortCard {
  image: string;
  title: string;
  description: string;
  bookButton: string;
  moreButton: string;
  bookhref: string;
  morehref: string;
}

export interface AboutProps {
  title: string;
  subtitle: string;

  images: {
    image: string;
    alt: string;
  }[];

  description: string;
}

export interface AmenityProps {
  icon: string;
  title: string;
}

export interface AccommodationProps {
  title: string;
  subtitle: string;
  cards: {
    image: string;
    popupImages: {
      image: string;
      alt: string;
    }[];
    title: string;
    amenities: {
      icon: JSX.Element;
      title: string;
    }[];
    description: string;
    popupButton: {
      text: string;
    };
  }[][];
}

export interface OfferProps {
  image: string;

  title: string;

  description: string;

  bookNowButton: {
    text: string;
    href: string;
  };

  contactButton: {
    text: string;
    href: string;
  };
}

export const StayBannerData: StayBannerProps = {
  image: "/images/stay.jpg",
  title: "EXPLORE OUR RESORTS",
};

export const ResortCardsData: ResortCard[] = [
  {
    image: "/images/stay1.jpg",
    title: "THE BLUE LAKE RESORT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    bookButton: "Book Now",
    moreButton: "More",
    bookhref: "/",
    morehref: "/stay/blue-lake",
  },
  {
    image: "/images/stay2.jpg",
    title: "WABI SABI RESORT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    bookButton: "Book Now",
    moreButton: "More",
    bookhref: "/",
    morehref: "/stay/wabi-sabi",
  },
];

export const ResortPageData = [
  {
    slug: "wabi-sabi",

    banner: {
      image: "/images/stay2.jpg",
      title: "WABI SABI RESORT",
    },

    about: {
      title: "ABOUT WABI SABI RESORT",
      subtitle: "Beyond Stays, We Create Memories.",
      description:
        "A pleasant welcoming climate, undulating majestic mountains stretching to the horizon, misty mornings with foggy clouds rolling in, the faint sun, the chirping of splendid birds, colourful butterflies and insistent chatter of lovely creatures, the powerful throb of nature is the only clock you need here. Here’s a beautiful journey into the Nature’s wonderland – covered with green pastures and protected by huge mountains with about 500+ different species of plants and trees, Wabi-Sabi Resort lies in the amidst of Serene Igatpuri!",

      images: [
        {
          image: "/images/dining1.jpg",
          alt: "About Image 1",
        },
        {
          image: "/images/dining2.jpg",
          alt: "About Image 2",
        },
        {
          image: "/images/dining1.jpg",
          alt: "About Image 3",
        },
      ],
    },

    accommodation: {
      title: "ACCOMMODATION",
      subtitle: "Beyond Stays, We Create Memories.",

      cards: [
        [
          {
            image: "/images/king.jpg",

            popupImages: [
              {
                image: "/images/king1.jpg",
                alt: "King Room",
              },
              {
                image: "/images/king2.jpg",
                alt: "King Room",
              },
            ],

            title: "KING ROOM",

            amenities: [
              {
                icon: <BIcon />,
                title: "King Size Bed",
              },
              {
                icon: <TVIcon />,
                title: "Television",
              },
              {
                icon: <TeaIcon />,
                title: "Tea Kettle",
              },
            ],

            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",

            popupButton: {
              text: "MORE",
            },
          },

          {
            image: "/images/swiss.jpg",

            popupImages: [
              {
                image: "/images/king1.jpg",
                alt: "King Room",
              },
              {
                image: "/images/king2.jpg",
                alt: "King Room",
              },
            ],

            title: "SWISS AC TENTS",

            amenities: [
              {
                icon: <BIcon />,
                title: "King Size Bed",
              },
              {
                icon: <TVIcon />,
                title: "Television",
              },
              {
                icon: <TeaIcon />,
                title: "Tea Kettle",
              },
            ],

            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",

            popupButton: {
              text: "MORE",
            },
          },
        ],
      ],
    },

    offer: {
      image: "/images/offer.jpg",

      title: "Exclusive Offer",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      bookNowButton: {
        text: "Book Now",
        href: "/booking",
      },

      contactButton: {
        text: "Contact",
        href: "/ContactUs",
      },
    },
  },

  {
    slug: "blue-lake",

    banner: {
      image: "/images/stay1.jpg",
      title: "THE BLUE LAKE RESORT",
    },

    about: {
      title: "About The Blue Lake Resort",
      subtitle: "Beyond Stays, We Create Memories.",
      description:
        "The Blue Lake Resort in Igatpuri offers family rooms with air-conditioning, private bathrooms, and modern amenities. Each room includes a balcony with garden or lake views, a dining area, and a work desk. Guests can enjoy Indian cuisine at the family-friendly restaurant, which serves lunch, dinner, and high tea. The on-site outdoor swimming pool and free WiFi enhance the relaxing atmosphere. The resort features a beautiful garden, an outdoor swimming pool, and free private parking. Additional amenities include a 24-hour front desk, room service, and free toiletries.",

      images: [
        {
          image: "/images/blue1.jpg",
          alt: "About Image 1",
        },
        {
          image: "/images/blue2.jpg",
          alt: "About Image 2",
        },
        {
          image: "/images/blue3.jpg",
          alt: "About Image 3",
        },
        {
          image: "/images/blue1.jpg",
          alt: "About Image 1",
        },
        {
          image: "/images/blue2.jpg",
          alt: "About Image 2",
        },
        {
          image: "/images/blue3.jpg",
          alt: "About Image 3",
        },
        {
          image: "/images/blue1.jpg",
          alt: "About Image 1",
        },
        {
          image: "/images/blue2.jpg",
          alt: "About Image 2",
        },
        {
          image: "/images/blue3.jpg",
          alt: "About Image 3",
        },
      ],
    },

    accommodation: {
      title: "ACCOMMODATION",
      subtitle: "Beyond Stays, We Create Memories.",

      cards: [
        [
          {
            image: "/images/king.jpg",
            popupImages: [
              {
                image: "/images/king1.jpg",
                alt: "King Room",
              },
              {
                image: "/images/king2.jpg",
                alt: "King Room",
              },
            ],

            title: "LOREM IPSUM",

            amenities: [
              {
                icon: <BIcon />,
                title: "King Size Bed",
              },
              {
                icon: <TVIcon />,
                title: "Television",
              },
              {
                icon: <TeaIcon />,
                title: "Tea Kettle",
              },
            ],

            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",

            popupButton: {
              text: "MORE",
            },
          },

          {
            image: "/images/swiss.jpg",

            popupImages: [
              {
                image: "/images/king1.jpg",
                alt: "King Room",
              },
              {
                image: "/images/king2.jpg",
                alt: "King Room",
              },
            ],

            title: "LOREM IPSUM",

            amenities: [
              {
                icon: <BIcon />,
                title: "King Size Bed",
              },
              {
                icon: <TVIcon />,
                title: "Television",
              },
              {
                icon: <TeaIcon />,
                title: "Tea Kettle",
              },
            ],

            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",

            popupButton: {
              text: "MORE",
            },
          },
        ],
      ],
    },

    offer: {
      image: "/images/bl.jpg",

      title: "Exclusive Offer",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      bookNowButton: {
        text: "Book Now",
        href: "/booking",
      },

      contactButton: {
        text: "Contact",
        href: "/contact",
      },
    },
  },
];
