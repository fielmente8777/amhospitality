import Image from "next/image";
import { Container, Section } from "@/components/sectionComponants";

interface ServiceProps {
  title: string;
  description: string;
  image: string;
}

const Service = ({ title, description, image }: ServiceProps) => {
  return (
    <Section sectionClassName="bg-white">
      <Container>
        <div className="mx-auto w-full max-w-[1001px] bg-primary px-8 py-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[300px_1fr] md:gap-20">
            {/* IMAGE */}
            <div className="relative mx-auto h-[230px] w-full">
              <Image
                src={image}
                alt={title}
                fill
                sizes="300px"
                className="object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="text-white">
              <h2 className="text-xl font-semibold uppercase md:text-[32px]">
                {title}
              </h2>

              <div
                className="mt-5 text-sm md:text-[20px]"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Service;
