import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

interface JoinUsType {
  title: string;
  subTitle: string;
  description: string;
}
const JoinAlHathaifa: React.FC<JoinUsType> = ({
  title,
  subTitle,
  description,
}) => {
  return (
        <SectionWithContainer sectionClassName="bg-[#F7F5F0]">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <SectionHeading title={title} subTitle={subTitle} />
          <p className="text-light">{description}</p>
        </div>
        <div className="">
          {/* <CareerForm /> */}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default JoinAlHathaifa;
