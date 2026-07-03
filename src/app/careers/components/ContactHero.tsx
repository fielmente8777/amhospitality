import { Section, SectionWithContainer } from "@/components/sectionComponants";

interface Props {
  data: {
    title: string;
    description: string;
  };
}

export default function ContactHero({ data }: Props) {
  return (
    <Section >
      <div className="max-w-3xl mx-auto text-center ">
        <h1 className="font-primary text-4xl font-semibold">
          {data.title}
        </h1>

        <p className="mt-5 text-[15px] text-secondary">
          {data.description}
        </p>
      </div>
    </Section>
  );
}