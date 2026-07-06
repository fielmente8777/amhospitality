import CareerForm from "@/components/forms/CareerForm";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface JoinUsType {
  title: string;
  description: string;
  image: string;
}
const JoinAlHathaifa: React.FC<JoinUsType> = ({
  title,
  description,
  image,
}) => {
  return (
    <Section defaultPadding={false} sectionClassName="pb-10">
      <div className="relative w-full aspect-[3/3] md:aspect-[16/7]">
        <Image src={image} alt="Careers" fill className="object-cover" />
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 ">
          <div className="space-y-4">
            <SectionHeading title={title} />
            <p className="text-light text-[20px]">{description}</p>
          </div>
          <div className="">
            <CareerForm />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default JoinAlHathaifa;
