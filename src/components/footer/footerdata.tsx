import { contact } from "@/utils/constent";
import { FillCallIcon, FillLocationIcon, FillMailIcon } from "@/utils/icons";
import { FillFaceBookIcon, OutLineInstagramIcon } from "@/utils/SocialIcon";
import { JSX } from "react";

interface FooterData {
  logo: string;
  cta: {
    label: string;
    href: string;
  }[];
  lists: {
    title?: string;
    links: {
      title?: string;
      icon: React.ReactNode;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
      label3?: string;
      href3?: string;
    }[];
  }[];
}

interface WebsiteFooterData {
  logo: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  lists: {
    title?: string;
    links: {
      icon?: JSX.Element;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
      label3?: string;
      href3?: string;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/logo.png",
  cta: [
    { label: "CALL NOW", href: contact.callCta },
    { label: "ENQUIRE NOW", href: contact.WhatsappCta },
    { label: "BOOK  NOW", href: "#form" },
  ],
  lists: [
    {
      title: "Contact Us",
      links: [
        {
          icon: <FillLocationIcon />,
          label: "Address: " + contact.address,
          href: contact.addressLink,
        },
        {
          icon: <FillCallIcon />,
          label: contact.phone[0],
          href: "tel:" + contact.phone[0],
          // label2: contact.phone[1],
          // href2: "tel:" + contact.phone[1],
        },
        {
          icon: <FillMailIcon />,
          label: contact.email[0],
          href: "mailto:" + contact.email[0],
          label2: contact.email[1],
          href2: "mailto:" + contact.email[1],
        },
      ],
    },
  ],
};

// export const SocialLinks = [
//   {
//     label: Object.keys(contact.socialMedia)[0],
//     href: contact.socialMedia.facebook,
//     icon: <FillFaceBookIcon />,
//   },
//   {
//     label: Object.keys(contact.socialMedia)[2],
//     href: contact.socialMedia.instagram,
//     icon: <OutLineInstagramIcon />,
//   },
//   // {
//   //   label: Object.keys(contact.socialMedia)[4],
//   //   href: contact.socialMedia.linkedin,
//   //   icon: <LinkedinIcon />,
//   // },
//   // {
//   //   label: Object.keys(contact.socialMedia)[5],
//   //   href: contact.socialMedia.twitter,
//   //   icon: <TwitterIcon />,
//   // },
// ];

interface WebSiteFooterData {
  logo: string;
  description: string;
  link: {
    label: string;
    href: string;
  };
  lists: {
    title?: string;
    links: {
      title?: string;
      icon?: React.ReactNode;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
      label3?: string;
      href3?: string;
    }[];
  }[];
}

export const webSiteFooterData: WebSiteFooterData = {
  logo: "/images/footerlogo.png",
  description: "",

  link: {
    label: "",
    href: "",
  },

  lists: [
    {
      title: "Explore",
      links: [
        {
          label: "Wabi Sabi Resort",
          href: "https://www.wabisabiresorts.com/",
        },
        {
          label: "The Blue Lake Resort",
          href: "/stay/blue-lake",
        },
      ],
    },
    {
      title: "Important Links",
      links: [
        {
          label: "Home",
          href: "/",
        },
        {
          label:"About",
          href:"/about",
        },
        {
          label: "Our Resorts",
          href: "/stay",
        },
        // {
        //   label: "Events & Weddings",
        //   href: "#",
        // },
        {
          label: "Contact",
          href: "/contact-us",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          label: "Privacy Policy",
          href: "/privacy-policy",
        },
        {
          label: "Cancellation Policy",
          href: "/cancellation-policy",
        },
        {
          label: "In-House Guest Policy",
          href: "/in-house-guest-policy",
        },
      ],
    },
    {
      title: "Contact Details",
      links: [
        {
          label: "Shop No. 116, First Floor, Ananta Arcade, Wasan Nagar, Pathardi Phata, Nashik – 422010 Maharashtra",
          href: "https://maps.app.goo.gl/AfHZX4hJu3oc6cbn6?g_st=iw",
        },
        {
          label: "+91 8065072001",
          href: "tel:+918065072001",
          label2: "+91 8554929929",
          href2: "tel:+918554929929",
        },
        {
          label: "sales@amhotels.in",
          href: "mailto:sales@amhotels.in",
          label2: "INFO@AMHOTELS.IN",
          href2: "mailto:INFO@AMHOTELS.IN",
          label3: "CEO@AMHOTELS.IN",
          href3: "mailto:CEO@AMHOTELS.IN",
        },
      ],
    },
  ],
};

export interface ContactInfo {
  title: string;
  links: {
    label: string;
    href: string;
    label2?: string;
    href2?: string;
    label3?: string;
    href3?: string;
    icon: React.ReactNode;
  }[];
}

