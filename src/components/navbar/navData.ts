import { contact } from "@/utils/constent";

export const navData = {
  logo: "/logo.png",

  buttons: [{ label: "BOOK NOW", href: contact.WhatsappCta }],
};


interface websiteNavLink {
  logo: string;
  links: {
    label: string;
    href: string;
    subLinks?: {
      label: string;
      href: string;
    }[];
  }[];
  buttons: {
    label: string;
    href: string;
  }[];
}

export const WebsiteNavData: websiteNavLink = {
  logo: "/images/Logo.png",
  links: [
    { label: "Home", href: "/" },
   
    {
      label: "Stays",
      href: "/stay",
      subLinks: [
        {
          label: "Wabi Sabi Resort",
          href: "/stay/wabi-sabi",
        },
        {
          label: "The Blue Lake Resort",
          href: "/stay/blue-lake",
        },
      ],
    },
    { label: "Meetings", href: "/meetings" },
    { label: "Weddings", href: "/weddings" },
    { label: "Contact", href: "/contact-us" },
  ],
  buttons: [{ label: "BOOK NOW", href: contact.WhatsappCta }],
};
