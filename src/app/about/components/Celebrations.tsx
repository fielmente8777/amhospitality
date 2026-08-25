import Image from "next/image";
import { Container, Section } from "@/components/sectionComponants";

interface CelebrationsProps {
  image: string;
  title: string;
  description: string[];
}

const Celebrations = ({
  image,
  title,
  description,
}: CelebrationsProps) => {
  return (
    <Section
      defaultPadding={false}
      sectionClassName="bg-white"
    >
      <div className="relative w-full overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div className="relative aspect-[4/3] md:aspect-[20/7] w-full min-h-[420px] md:min-h-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
          />

          {/* LIGHT OVERLAY */}
          <div className="absolute inset-0 bg-white/20"/>

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center px-5 md:px-10">
            <div className="w-full md:max-w-[1050px] bg-white/80 px-2 py-4 text-center backdrop-blur-[2px] md:px-12 md:py-10 lg:px-16">
              <h2 className="text-xl font-semibold uppercase text-secondary md:text-[32px]">
                {title}
              </h2>

              <div className="mt-5 space-y-4">
                {description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-xs text-secondary md:text-[20px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Celebrations;