import Form3 from "@/components/forms/Form3";
import { Container, Section } from "@/components/sectionComponants";
import { ChatIcon, DIcon, MailIcon, MapIcon, PIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: {
    image: string;
    contact: {
      title: string;
      address: string;
      addressLink: string;
      phones: string[];
      email: string;
    };
  };
}

export default function ContactInfo({ data }: Props) {
  return (
    <Section defaultPadding={false} sectionClassName="pb-10">
      <div className="relative w-full aspect-[4/3] md:aspect-[16/7]">
        <Image
          src={data.image}
          alt="Contact"
          fill
          className="object-cover"
        />
      </div>

      <div className="">
        <Container>
          <div className="grid items-start gap-20 py-12 lg:grid-cols-[1fr_560px] grid-cols-1">
            {/* Left Side */}
            <div className="w-full lg:max-w-md">
              <h3 className="text-[32px] font-semibold text-secondary">
                {data.contact.title}
              </h3>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <MapIcon />
                  <Link
                    href={data.contact.addressLink}
                    target="_blank"
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    {data.contact.address}
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <PIcon />
                  <Link
                    href={`tel:${data.contact.phones[0]}`}
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    {data.contact.phones[0]}
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <ChatIcon />
                  <Link
                    href={`tel:${data.contact.phones[1]}`}
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    {data.contact.phones[1]}
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <MailIcon />
                  <Link
                    href={`mailto:${data.contact.email}`}
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    {data.contact.email}
                  </Link>
                </div>
              </div>

              <button className="mt-8 inline-flex items-center gap-2 rounded-md border border-primary px-5 py-2 text-primary transition hover:bg-primary hover:text-white">
                <span>Get Direction</span>
                <DIcon />
              </button>
            </div>

            {/* Right Side */}
            <div className="w-full">
              <Form3 />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}