import { Metadata } from "next";
import { Container, Section } from "@/components/sectionComponants";
import { policiesPageData } from "./guestPolicyData";

const guestPolicyItem =
  policiesPageData.find((p) => p.slug === "in-house-guest-policy") ||
  policiesPageData[0];

export const metadata: Metadata = {
  title: guestPolicyItem.metaData.title,
  description: guestPolicyItem.metaData.description,
};

export default function InHouseGuestPolicyPage() {
  return (
    <main className="bg-white min-h-screen pb-16">
      {/* Top Banner / Header */}
      <section className="bg-secondary text-white py-12 md:py-16">
        <Container>
          <div className="w-full text-center space-y-4">
            <span className="inline-block text-xs uppercase tracking-widest text-primary font-semibold px-3 py-1 bg-white/10 rounded-full">
              In-House Guest Policy
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">
              {guestPolicyItem.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white/90 uppercase">
              AM Hotels & Resorts
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Body */}
      <Section defaultPadding={false} sectionClassName="py-10 md:py-14">
        <Container>
          <div
            className="w-full space-y-6 text-slate-700 leading-relaxed text-base md:text-lg [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-semibold [&_h3]:text-secondary [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:first:mt-0 [&_h4]:text-lg [&_h4]:md:text-xl [&_h4]:font-medium [&_h4]:text-secondary [&_h4]:mt-6 [&_h4]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4"
            dangerouslySetInnerHTML={{ __html: guestPolicyItem.content }}
          />
        </Container>
      </Section>
    </main>
  );
}
