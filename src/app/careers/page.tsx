import { Metadata } from "next";
import { careersPageData } from "./components/careersPageData";
import ContactHero from "./components/ContactHero";
import JoinAlHathaifa from "./components/JoinAlHathaifa";


// export const metadata: Metadata = {
//   title:"",
//   description:""
// };


export default function CareersPage() {
    return (
        <main>
            <ContactHero data={careersPageData.bannerData} />
            <JoinAlHathaifa {...careersPageData.JoinUsData} />
        </main>
    );
}