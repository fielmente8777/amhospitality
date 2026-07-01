import { AboutUsData, DiningData, ExploreMoreData, ExploreMoreProps, HomeBannerData, HospitalityData, TestimonialsData } from "./Home/pageData";
import HomeBanner from "./Home/components/HomeBanner";
import AboutUs from "./Home/components/AboutUs";
import Dining from "./Home/components/Dining";
import ExploreMore from "./Home/components/ExploreMore";
import Testimonials from "./Home/components/Testimonials";
import Hospitality from "./Home/components/Hospitality";
export default function Home() {
  return (
    <main>
      <HomeBanner data={HomeBannerData} />
      <AboutUs data={AboutUsData} />
      <Dining data={DiningData}/>
      <Hospitality data={HospitalityData}/>
      <ExploreMore data={ExploreMoreData}/>
      <Testimonials data={TestimonialsData}/>
    </main>
  );
}
