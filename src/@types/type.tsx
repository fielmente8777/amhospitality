import { JSX } from "react";

export interface AccommodationsProps {
  title: string;
  subtitle: string;
  description: string;
  rooms: {
    location?: string;
    images: string[];
    title: string;
    amenities: {
      name?: string;
      icon: JSX.Element;
    }[];
    popUpAmenities?: {
      name: string;
    }[];
    description?: string;
    actions?: {
      label: string;
      href: string;
    }[];
  }[];
}

export interface TestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: {
    review: string;
    author: string;
  }[];
  actions: {
    label: string;
    href: string;
  }[];
}

export interface AboutIntroProps {
  icon?: JSX.Element;

  tag: string;

  title: {
    first: string;
    highlightOne: string;
    middle: string;
    highlightTwo: string;
  };

  topDescription: string[];

  image: string;

  bottomDescription: string[];
}

export interface WhyUsProps {
  icon?: JSX.Element;

  topText: string;

  image: string;

  tag: string;

  title: string;

  description: string[];

  action: {
    label: string;
    href: string;
  };
}

export interface AwardsProps {
  title: {
    first: string;
    highlight: string;
  };

  leftImage: string;

  achievements: {
    description: string;
  }[];

  rightImage: string;
}
export interface AboutPageProps {
  aboutIntro: AboutIntroProps;
  whyUs: WhyUsProps;
  awards: AwardsProps;
}

export interface GalleryPageProps {
  gallery: GalleryProps;
}

export interface GalleryPageProps {
  gallery: GalleryProps;
}

export interface GalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export interface FeaturesProps {
  title: string;
  subtitle: string;
  description: string;
  items: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];
  actions: {
    label: string;
    href: string;
  }[];
}
