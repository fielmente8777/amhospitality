import { notFound } from "next/navigation";
import { Metadata } from "next";

import {
  ResortPageData,
} from "../pageData";

import StayBanner from "../components/StayBanner";
import AboutResort from "../components/AboutResort";
import Accommodation from "../components/Accommodation";
import ExclusiveOffer from "../components/ExclusiveOffer";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ResortPageData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { slug } = await params;

  const resort = ResortPageData.find(
    (item) => item.slug === slug
  );

  if (!resort) {
    return {
      title: "Resort Not Found",
    };
  }

  return {
    title: resort.banner.title,
    description: resort.about.description,
  };
}

export default async function Page({
  params,
}: Params) {
  const { slug } = await params;

  const resort = ResortPageData.find(
    (item) => item.slug === slug
  );

  if (!resort) return notFound();

  return (
    <main>
      <StayBanner data={resort.banner} />

      <AboutResort data={resort.about} />

      <Accommodation data={resort.accommodation} />

      <ExclusiveOffer data={resort.offer} />
    </main>
  );
}