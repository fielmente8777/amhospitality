import AboutUs from "./home/components/AboutUs";
import Dining from "./home/components/Dining";
import ExploreMore from "./home/components/ExploreMore";
import HomeBanner from "./home/components/HomeBanner";
import Hospitality from "./home/components/Hospitality";
import Testimonials from "./home/components/Testimonials";
import { AboutUsData, DiningData, ExploreMoreData, HomeBannerData, HospitalityData, TestimonialsData } from "./home/pageData";

export default function Home() {
  return (
    <main>
      <HomeBanner data={HomeBannerData} />
      <AboutUs data={AboutUsData} />
      <Dining data={DiningData} />
      <Hospitality data={HospitalityData} />
      <ExploreMore {...ExploreMoreData} />
      <Testimonials data={TestimonialsData} />
    </main>
  );
}
