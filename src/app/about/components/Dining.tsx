import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/sectionComponants";
import { ContactIcon } from "@/utils/icons";

interface DiningProps {
  title: string;
  description: string;
  image: string;
  button: {
    label: string;
    link: string;
  };
}

const Dining = ({
  title,
  description,
  image,
  button,
}: DiningProps) => {
  return (
    <Section
      sectionClassName="bg-white"
    >
      <Container>
        <div className="grid grid-cols-1 items-stretch md:grid-cols-2">
          
          {/* CONTENT */}
          <div className="flex flex-col justify-center py-10 md:py-12 md:pr-10 lg:pr-14">
            <h2 className="text-xl font-semibold uppercase leading-tight text-secondary md:text-3xl lg:text-[32px]">
              {title}
            </h2>

            <p className="mt-6 text-sm text-secondary md:text-[20px]">
              {description}
            </p>

            <Link
              href={button.link}
              className="mt-6 inline-flex w-fit items-center gap-2 text-lg uppercase text-primary underline underline-offset-4 transition-colors hover:text-secondary"
            >
              {button.label}
              <ContactIcon/>
            </Link>
          </div>

          {/* IMAGE */}
          <div className="relative aspect-[1.63/1] h-[398px] w-full overflow-hidden md:min-h-0">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default Dining;