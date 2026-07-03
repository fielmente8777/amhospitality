export interface HomeBannerProps {
  image: string;
  title: string;
  description: string;
}

export interface AboutUsProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[][];
}

export interface DiningProps {
  title: string;
  subtitle: string;
  slides: {
    image: string;
    alt: string;
  }[][];
}

export interface ExploreMoreProps {
  title: string;
  subtitle: string;
  places: {
    image: string;
    title: string;
  }[];
}

export interface TestimonialProps {
  title: string;
  subtitle: string;
  testimonials: {
    rating: number;
    review: string;
    name: string;
  }[];
}

export interface HospitalityProps {
  title: string;
  card: {
    subtitle: string;
    description: string;
  }[];
}
export const HomeBannerData = {
  image: "/images/homebg.jpg",

  title: "WELCOME TO AM HOTELS & RESORTS",

  description: "Designed to make your vacation truly special.",
};

export const AboutUsData = {
  title: "ABOUT US",
  subtitle: "Beyond Stays, We Create Memories.",

  images: [
    ["/images/about1.jpg", "/images/about2.jpg", "/images/about3.jpg"],
    ["/images/about1.jpg", "/images/about2.jpg", "/images/about3.jpg"],
    ["/images/about1.jpg", "/images/about2.jpg", "/images/about3.jpg"],
  ],
  description:
    'AM Hotels & Resorts is a curated collection of extraordinary hospitality experiences designed for discerning travelers who seek serenity, beauty, and exceptional service. Rooted in a passion for authentic stays and memorable escapes, our portfolio places you in hand-picked destinations that celebrate nature, comfort, and local charm. From the tranquil lakeside ambience of <strong class="font-semibold" >The Blue Lake Resort</strong> in Igatpuri to the thoughtfully crafted retreat at <b class="font-semibold">Wabi Sabi Resorts</b>, every property reflects our commitment to genuine warmth, thoughtful design, and seamless guest experiences. At AM Hotels & Resorts, we believe travel should rejuvenate the spirit and create lasting memories — because your journey deserves nothing less than remarkable.',
};

export const DiningData = {
  title: "DINING",
  subtitle: "An Experience in Every Bite.",
  slides: [
    [
      {
        image: "/images/dining1.jpg",
        alt: "Dining Image 1",
      },
      {
        image: "/images/dining2.jpg",
        alt: "Dining Image 2",
      },
      {
        image: "/images/dining1.jpg",
        alt: "Dining Image 3",
      },],
    [{
      image: "/images/dining2.jpg",
      alt: "Dining Image 4",
    },
    {
      image: "/images/dining1.jpg",
      alt: "Dining Image 5",
    },
    {
      image: "/images/dining2.jpg",
      alt: "Dining Image 6",
    },
    ],
  ],
};

export const ExploreMoreData = {
  title: "EXPLORE MORE",
  subtitle: "Journey Through Nearby Wonders.",

  places: [
    {
      image: "/images/explore1.png",
      title: "Vaitarna Dam",
    },
    {
      image: "/images/explore2.jpg",
      title: "Brahmagiri Hill",
    },
    {
      image: "/images/explore3.jpg",
      title: "Durga Bhandar",
    },
    {
      image: "/images/explore4.jpg",
      title: "Pandav Leni",
    },

    {
      image: "/images/explore1.png",
      title: "Vaitarna Dam",
    },
    {
      image: "/images/explore2.jpg",
      title: "Brahmagiri Hill",
    },
    {
      image: "/images/explore3.jpg",
      title: "Durga Bhandar",
    },
    {
      image: "/images/explore4.jpg",
      title: "Pandav Leni",
    },
  ],
};

export const TestimonialsData = {
  title: "TESTIMONIALS",
  subtitle: "AM Hospitality Experiences Shared by Our Guests.",

  testimonials: [
    {
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Lorem Ipsum",
    },
    {
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      name: "Lorem Ipsum",
    },
    {
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      name: "Lorem Ipsum",
    },
  ],
};

export const HospitalityData = {
  title: "Hospitality Rooted in Experience",

  card: [
    {
      subtitle: "24x7",
      description: "Great Support",
    },
    {
      subtitle: "10+ Years",
      description: "Hospitality Excellence",
    },
    {
      subtitle: "100%",
      description: "Guest Satisfaction Focus",
    },
    {
      subtitle: "100+",
      description: "Events Hosted",
    },
  ],
};

export const values = [
  "Core Values",
  "Guest First",
  "Ownership Mindset",
  "Transparency",
  "Innovation",
  "Operational Excellence",
];
