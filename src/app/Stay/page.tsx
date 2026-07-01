import StayBanner from "./components/StayBanner";
import ResortCards from "./components/ResortCards";

import {
  StayBannerData,
  ResortCardsData,
} from "./pageData";

export default function Stay() {
  return (
    <>
      <StayBanner data={StayBannerData} />
      <ResortCards data={ResortCardsData} />
    </>
  );
}