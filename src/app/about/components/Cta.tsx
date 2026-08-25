import Link from "next/link";
import { Container, Section } from "@/components/sectionComponants";

interface CTAProps {
  title: string;
  description: string;
  button: {
    label: string;
    link: string;
  };
}

const CTA = ({ title, description, button }: CTAProps) => {
  return (
    <Section
      defaultPadding={false}
      sectionClassName="bg-secondary"
    >
      <Container>
        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between md:gap-12 md:py-10">
          
          {/* CONTENT */}
          <div className="max-w-5xl">
            <h2 className="text-xl font-semibold uppercase text-white md:text-[32px]">
              {title}
            </h2>

            <p className="mt-4 text-sm text-white md:text-[20px]">
              {description}
            </p>
          </div>

          {/* BUTTON */}
          <Link
            href={button.link}
            className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-white hover:text-primary"
          >
            {button.label}
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;