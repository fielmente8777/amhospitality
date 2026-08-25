import Link from "next/link";
import { Section, Container } from "@/components/sectionComponants";
import { ContactIcon } from "@/utils/icons";

interface AboutIntroProps {
  title: string;
  description: string;
  button: {
    label: string;
    link: string;
  };
}

const AboutIntro = ({ title, description, button }: AboutIntroProps) => {
  return (
    <Section sectionClassName="bg-white">
      <Container>
        <div className="mx-auto max-w-7xl text-center">
          {/* TITLE */}
          <h2 className="mx-auto max-w-[840px] text-xl font-semibold uppercase text-secondary md:text-[32px]">
            {title}
          </h2>

          {/* DESCRIPTION */}
          <p
            className="mx-auto mt-6 max-w-7xl text-sm text-secondary md:text-[20px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {/* CONTACT */}
          <Link
            href={button.link}
            className="mt-6 inline-flex items-center gap-2 text-lg uppercase text-primary underline underline-offset-4 transition-colors hover:text-secondary"
          >
            {button.label}
            <ContactIcon/>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default AboutIntro;
