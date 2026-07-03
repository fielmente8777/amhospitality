import Image from "next/image";
import { Container, Section } from "../sectionComponants";
import Form1 from "../forms/Form1";
import LandingNavbar from "../navbar/LandingNavbar";

interface ImageBannerProps {
  images: string[];
  badge: string;
  title: string;
  description: string;
  bookingBenefits: string;
}
const ImageBanner: React.FC<ImageBannerProps> = ({
  title,
  images,
  badge,
  description,
  bookingBenefits,
}) => {
  return (
    <Section
      defaultPadding={false}
      sectionClassName="relative w-full lg:aspect-[16/7.7] aspect-4/9.5"
    >
      <div className="inset-x-0 absolute z-30 ">
        <LandingNavbar />
      </div>
      <Image
        src={images[0]}
        alt={title}
        fill
        className="object-cover max-lg:object-left"
        sizes="100vw"
      />
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80  to-black/10" />
      <div className="absolute inset-0  z-20 flex items-end pb-10 justify-center">
        <Container>
          <p className="flex items-center mb-2 max-md:text-sm justify-center gap-2.5 px-3.75 tracking-widest py-1 rounded-full border border-secondary uppercase backdrop-blur-2xl text-white w-fit mx-auto">
            <span>
              <Foo />
            </span>{" "}
            {badge}
          </p>
          <h1
            className="text-white font-primary font-light lg:text-6xl text-4xl max-w-2xl mx-auto  text-center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-white/70 md:text-xl mt-3 max-w-3xl text-center mx-auto">
            {description}
          </p>
          <div className="bg-background py-6 px-1.5 rounded-[20px] mt-8 flex flex-col gap-5 max-w-6xl w-full mx-auto" id="form">
            <Form1 />
            <p
              className="text-sm text-light max-w-3xl text-center mx-auto"
              dangerouslySetInnerHTML={{ __html: bookingBenefits }}
            />
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default ImageBanner;

export const Foo = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_16_3993)">
      <path
        d="M12.9375 14.4375L11.6733 15.6874V14.4375H12.9375Z"
        fill="#E8AA4E"
      />
      <path
        d="M3.06256 14.4375L4.32677 15.6874V14.4375H3.06256Z"
        fill="#E8AA4E"
      />
      <path
        d="M12.8127 2.39532C13.4478 3.36513 13.8171 4.52471 13.8171 5.77054C13.8171 8.10733 12.5179 10.1407 10.6024 11.1875"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9166 1.01546C12.6846 0.570934 12.2222 0.31878 11.7277 0.312561C11.45 0.721807 11.3925 1.24533 11.6245 1.68989C11.8565 2.13445 12.3189 2.38657 12.8135 2.39279C13.0911 1.98354 13.1486 1.46002 12.9166 1.01546Z"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.996 3.90299C15.2473 3.46906 15.2128 2.9435 14.9533 2.52247C14.459 2.50697 13.986 2.73863 13.7347 3.17259C13.4834 3.60656 13.5179 4.13208 13.7774 4.55311C14.2717 4.56861 14.7447 4.33696 14.996 3.90299Z"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1394 7.02165C15.5488 6.73209 15.7367 6.24004 15.6764 5.74917C15.2336 5.52889 14.7071 5.54214 14.2977 5.8317C13.8883 6.12126 13.7005 6.61331 13.7607 7.10418C14.2035 7.32446 14.73 7.31121 15.1394 7.02165Z"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9407 9.97197C14.4399 9.92529 14.8483 9.59263 15.041 9.13717C14.7672 8.72533 14.3043 8.47408 13.805 8.52077C13.3057 8.56745 12.8974 8.90011 12.7047 9.35557C12.9785 9.76741 13.4414 10.0186 13.9407 9.97197Z"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.1872 2.39532C2.55211 3.36513 2.1828 4.52471 2.1828 5.77054C2.1828 8.10221 3.47638 10.1317 5.38502 11.1806"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.08332 1.01546C3.31535 0.570934 3.77775 0.31878 4.27227 0.312561C4.54996 0.721807 4.60746 1.24533 4.37543 1.68989C4.1434 2.13445 3.681 2.38657 3.18647 2.39279C2.90879 1.98354 2.85126 1.46002 3.08332 1.01546Z"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.00398 3.90299C0.7527 3.46906 0.7872 2.9435 1.04667 2.52247C1.541 2.50697 2.014 2.73863 2.26528 3.17259C2.51656 3.60656 2.48206 4.13208 2.22259 4.55311C1.72828 4.56861 1.25529 4.33696 1.00398 3.90299Z"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.860538 7.02165C0.451135 6.73209 0.263293 6.24004 0.323512 5.74917C0.76632 5.52889 1.29281 5.54214 1.70222 5.8317C2.11162 6.12126 2.29946 6.61331 2.23924 7.10418C1.79643 7.32446 1.26991 7.31121 0.860538 7.02165Z"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.05926 9.97197C1.55998 9.92529 1.15167 9.59263 0.958923 9.13717C1.23276 8.72533 1.69567 8.47408 2.19494 8.52077C2.69422 8.56745 3.10253 8.90011 3.29528 9.35557C3.02143 9.76741 2.55853 10.0186 2.05926 9.97197Z"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9687 12.4375H15.6875L15.0084 14.0776L15.6875 15.6874H11.6733V14.4687"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9375 14.4375L11.6733 15.6874V14.4375H12.9375Z"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.03132 12.4375H0.312561L0.991617 14.0776L0.312561 15.6874H4.32677V14.4687"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9375 11.1875H3.06256V14.4375H12.9375V11.1875Z"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00328 2.79419L9.06445 4.94295L11.4362 5.28695L9.72051 6.96018L10.1263 9.32209L8.00471 8.20748L5.8838 9.32322L6.28826 6.96109L4.57172 5.28876L6.94322 4.94351L8.00328 2.79419Z"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.06256 14.4375L4.32677 15.6874V14.4375H3.06256Z"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.28253 12.8125H9.7175"
        stroke="#E8AA4E"
        strokeWidth="0.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_16_3993">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
