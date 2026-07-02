import Banner2 from "@/components/Banner/Banner2";
import { careersPageData } from "./components/careersPageData";
import JoinAlHathaifa from "./components/JoinAlHathaifa";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:
    "Careers at Al-Hathaifa - Join Our Expert Manpower and Sales Force Team in Muscat, Oman",
  description:
    "Explore exciting career opportunities at Al-Hathaifa in Muscat, Oman. Join our expert team in providing top-tier manpower and sales force solutions. Discover your potential and grow your career with us in a dynamic and rewarding environment.",
};


export default function CareersPage() {
    return (
        <main>
            <Banner2 {...careersPageData.bannerData} />
            <JoinAlHathaifa {...careersPageData.JoinUsData} />
        </main>
    );
}