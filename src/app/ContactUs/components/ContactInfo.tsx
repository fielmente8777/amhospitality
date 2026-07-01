import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

interface Props {
  data: {
    image: string;
    cards: {
      title: string;
      phone: string;
      email: string;
    }[];
  };
}

export default function ContactInfo({ data }: Props) {
  return (
    <SectionWithContainer>
      <div className="relative w-full aspect-[16/7]">
        <Image
          src={data.image}
          alt="Contact"
          fill
          className="object-cover"
        />
      </div>

      <div className="grid md:grid-cols-3 bg-[#F8F6F3]">
        {data.cards.map((item, index) => (
          <div
            key={index}
            className="py-8 text-center border-r last:border-r-0 border-[#D9C8B2]"
          >
            <h3 className="font-semibold text-primary">
              {item.title}
            </h3>

            <p className="mt-4 text-sm">
              Phone: {item.phone}
            </p>

            <p className="mt-2 text-sm">
              {item.email}
            </p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
}