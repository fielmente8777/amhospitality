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
    'Welcome to AM Hotels & Resorts, a hospitality brand of Ante Meridiem Hospitality Pvt. Ltd., where every stay begins with warmth and every experience is shaped with genuine care. We believe hospitality is not simply about offering a room, serving a meal, or providing a destination. It is about understanding why a guest has travelled, anticipating what will make the journey more comfortable, and creating moments that remain long after departure. Our hotels and resorts are designed for guests who value comfort, character, thoughtful service, and a true sense of place. Whether it is a quiet leisure break, a family holiday, a romantic escape, a destination wedding, a corporate retreat, a celebration, or a group getaway, our aim is to make every interaction feel personal, effortless, and gracious.',
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
        "Everything was great. Beautiful location and amazing employees. Mr Mangal was great as we were celebrating anniversary he arranged a cake in our room. Also restaurant team was hospitable.",
      name: "Nikhil",
    },
    {
      rating: 5,
      review:
        "The rooms were spacious and clean. It has a beautiful view and the pool was small but good as well. Would love to visit again in the rainy season.",
      name: "Deshpande",
    },
    {
      rating: 5,
      review:
        "A hidden gem at Igatpuri. Everything thing was excellent in term of Rooms, Views Food. Only pool size was small and need cleanliness. Room tip- prefer getting Superior rooms on first floor which has the best view.",
      name: "Meghna",
    },
    {
      rating: 5,
      review:
        "Having amazing stay with family at Wabi Sabi.. Good to have place like this which not only keeps you away from city noise and pollution but you can experience a very peaceful and memorable stay.",
      name: "Amit Rana",
    },
    {
      rating: 5,
      review:
        "The location and the scenic surroundings is exceptionally good. The staff very very helpful.",
      name: "Shahjan",
    },
    {
      rating: 5,
      review:
        "It is definitely a value for money location. The ambience is great and it puts you right in the midst of the nature. For people who love monsoon and winters it is definitely a must try.",
      name: "Aakash",
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
