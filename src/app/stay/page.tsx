import StayBanner from "./components/StayBanner";
import ResortCards from "./components/ResortCards";

import { StayBannerData, ResortCardsData } from "./pageData";

export default function Stay() {
  return (
    <main>
      <StayBanner data={StayBannerData} />
      <ResortCards data={ResortCardsData} />
    </main>
  );
}
