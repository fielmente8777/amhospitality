import { Container, Section } from "@/components/sectionComponants";

interface PromiseProps {
  title: string;
  description: string;
}

const Promise = ({ title, description }: PromiseProps) => {
  return (
    <Section sectionClassName="bg-[#EDEDED]">
      <Container>
        <div className="text-center">
          <h2 className="text-xl font-semibold uppercase text-primary md:text-[32px]">
            {title}
          </h2>

          <div
            className="mx-auto mt-6 max-w-6xl text-sm text-secondary md:text-[20px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Promise;
