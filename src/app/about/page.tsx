import StayBanner from "../stay/components/StayBanner";
import AboutIntro from "./components/AboutIntro";
import Celebrations from "./components/Celebrations";
import CTA from "./components/Cta";
import Dining from "./components/Dining";
import Promise from "./components/Promise";
import Service from "./components/Service";
import Story from "./components/Story";
import { AboutData } from "./pageData";

export default function About() {
  return (
    <main>
      <StayBanner data={AboutData.about} />
      <AboutIntro {...AboutData.intro} />

      <Story story={AboutData.story} />

      <Celebrations {...AboutData.celebration} />

      <Dining {...AboutData.dining} />

      <Service {...AboutData.service} />

      <Promise {...AboutData.promise} />

      <CTA {...AboutData.cta} />
    </main>
  );
}
