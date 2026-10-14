import Form3 from "@/components/forms/Form3";
import { Container, Section } from "@/components/sectionComponants";
import { ChatIcon, MailIcon, MapIcon, PIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: {
    image: string;
    contact: {
      title: string;
      bookingPhone?: string;
      corporatePhone?: string;
      phones: string[];
      email: string;
      emails?: string[];
      address: string;
      addressLink: string;
      mapEmbedUrl?: string;
    };
  };
}

export default function ContactInfo({ data }: Props) {
  const bookingPhone = data.contact.bookingPhone || data.contact.phones[0];
  const corporatePhone = data.contact.corporatePhone || data.contact.phones[1];
  const emailList = data.contact.emails || [data.contact.email];
  const mapEmbedUrl =
    data.contact.mapEmbedUrl ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.294065397661!2d73.7650752!3d19.954131699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebc5de65f741%3A0x45ff476880997bca!2sAnte%20Meridiem%20Hospitality%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1791968260624!5m2!1sen!2sin";

  return (
    <Section defaultPadding={false} sectionClassName="pb-16">
      {/* Banner Image */}
      {data.image && (
        <div className="relative w-full aspect-[4/3] md:aspect-[16/7]">
          <Image
            src={data.image}
            alt="Contact"
            fill
            className="object-cover"
          />
        </div>
      )}

      <div>
        <Container>
          {/* Top 2-Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start py-12 md:py-16">
            {/* Left Column: Contact Details & Address (approx 60% / 3 cols on LG) */}
            <div className="lg:col-span-3 flex flex-col gap-8 md:gap-10">
              {/* Company Title */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-wide text-secondary uppercase font-primary">
                  {data.contact.title}
                </h2>
                <div className="mt-3 w-16 h-[2px] bg-primary" />
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-5">
                  Contact Details
                </h3>

                <div className="space-y-4 text-base text-secondary">
                  {bookingPhone && (
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 text-primary">
                        <PIcon />
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-medium text-secondary">
                          For Booking Enquiry:
                        </span>
                        <Link
                          href={`tel:${bookingPhone.replace(/\s+/g, "")}`}
                          className="font-semibold text-primary hover:underline transition-colors"
                        >
                          {bookingPhone}
                        </Link>
                      </div>
                    </div>
                  )}

                  {corporatePhone && (
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 text-primary">
                        <ChatIcon />
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-medium text-secondary">
                          For Whatsapp:
                        </span>
                        <Link
                          href={`tel:${corporatePhone.replace(/\s+/g, "")}`}
                          className="font-semibold text-primary hover:underline transition-colors"
                        >
                          {corporatePhone}
                        </Link>
                      </div>
                    </div>
                  )}

                  {emailList.length > 0 && (
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 text-primary">
                        <MailIcon />
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-medium text-secondary">Email:</span>
                        {emailList.map((em, idx) => (
                          <span key={em} className="inline-flex items-center gap-2">
                            <Link
                              href={`mailto:${em}`}
                              className="font-semibold text-primary hover:underline transition-colors"
                            >
                              {em}
                            </Link>
                            {idx < emailList.length - 1 && (
                              <span className="text-secondary/60">/</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-3">
                  Address
                </h3>

                <div className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 text-primary">
                    <MapIcon />
                  </span>
                  <Link
                    href={data.contact.addressLink}
                    target="_blank"
                    className="text-base text-secondary/80 leading-relaxed max-w-2xl hover:text-primary transition-colors"
                  >
                    {data.contact.address}
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Get In Touch Card (approx 40% / 2 cols on LG) */}
            <div className="lg:col-span-2 w-full">
              <Form3 />
            </div>
          </div>

          {/* Bottom Section: Full Width Map Embed */}
          <div className="w-full rounded-xl overflow-hidden shadow-sm border border-[#D5C7B5] bg-white">
            <iframe
              title="Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[350px] sm:h-[450px]"
            />
          </div>
        </Container>
      </div>
    </Section>
  );
}