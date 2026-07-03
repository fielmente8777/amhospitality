import SlidingTitle from "@/components/sliders/SlidingTitle";
import AboutUs from "./home/components/AboutUs";
import Dining from "./home/components/Dining";
import ExploreMore from "./home/components/ExploreMore";
import HomeBanner from "./home/components/HomeBanner";
import Hospitality from "./home/components/Hospitality";
import Testimonials from "./home/components/Testimonials";
import {
  AboutUsData,
  DiningData,
  ExploreMoreData,
  HomeBannerData,
  HospitalityData,
  TestimonialsData,
  values,
} from "./home/pageData";
import SlidingTitle2 from "@/components/sliders/SlidingTitle2";

export default function Home() {
  return (
    <main>
      <HomeBanner data={HomeBannerData} />
      <AboutUs data={AboutUsData} />
      <SlidingTitle2 items={values} />
      <Dining data={DiningData} />
      <Hospitality data={HospitalityData} />
      <ExploreMore {...ExploreMoreData} />
      <Testimonials data={TestimonialsData} />
    </main>
  );
}
