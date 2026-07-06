export interface HomeBannerProps {
  image: string;
  title: string;
  description: string;
}

export interface AboutUsProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
}

export interface DiningProps {
  title: string;
  subtitle: string;
  slides: {
    image: string;
    alt: string;
  }[];
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

  title: "WE LEASE, OPERATE & GROW HOSPITALITY ASSETS",

  description:
    "Ante Meridiem Hospitality Pvt. Ltd. transforms resorts, hotels, villas and hospitality assets into profitable destinations through operational excellence, revenue management and guest-centric experiences.",
};

export const AboutUsData = {
  title: "ABOUT US",
  subtitle: "Beyond Stays, We Create Memories.",

  images: [
    "/images/about1.jpg",
    "/images/about2.jpg",
    "/images/about3.jpg",
    "/images/about1.jpg",
    "/images/about2.jpg",
    "/images/about3.jpg",
    "/images/about1.jpg",
    "/images/about2.jpg",
    "/images/about3.jpg",
  ],
  description:
    'Ante Meridiem Hospitality Pvt. Ltd. was established with a vision to redefine hospitality management by combining operational expertise, strategic marketing and exceptional guest experiences.From independent resorts to large hospitality assets, we specialize in turning underperforming properties into thriving destinations.<strong class="font-semibold" >Our Mission</strong> - To create memorable guest experiences while maximizing long-term value for hospitality asset owners.<strong class="font-semibold" >Our Vision</strong> - To become India’s most trusted hospitality management and leasing company.',
};

export const DiningData = {
  title: "DINING",
  subtitle: "An Experience in Every Bite.",
  slides: [
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
    },
    {
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
