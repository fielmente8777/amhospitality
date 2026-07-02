import Form2 from "@/components/forms/Form2";
import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";

import { ContactHeroData, ContactInfoData } from "./pageData";

export default function ContactPage() {
  return (
    <main>
      <ContactHero data={ContactHeroData} />
      <ContactInfo data={ContactInfoData} />
      <Form2 />
    </main>
  );
}
