import CareerForm from "@/components/forms/CareerForm";
import { Section } from "@/components/sectionComponants";
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
    <Section >
      <div className="relative w-full aspect-[16/7]">
        <Image src={image} alt="Careers" fill className="object-cover" />
      </div>
      <div className="grid md:grid-cols-2 gap-4 py-16 px-10">
        <div className="space-y-4">
          <SectionHeading title={title} />
          <p className="text-light">{description}</p>
        </div>
        <div className="">
          <CareerForm />
        </div>
      </div>
    </Section>
  );
};

export default JoinAlHathaifa;
