"use client";

import Image from "next/image";
import { Container, Section } from "@/components/sectionComponants";

interface Story {
  title: string;
  description: string;
  image: string;
}

interface StoryProps {
  story: Story[];
}

const Story = ({ story }: StoryProps) => {
  return (
    <Section sectionClassName="bg-[#EDEDED]">
      <Container>
        <div className="space-y-10 md:space-y-14">
          {story.map((story, index) => {
            const image = (
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            );

            const content = (
              <div className="flex h-full flex-col justify-center">
                <h2 className="text-lg font-semibold uppercase text-secondary md:text-[32px]">
                  {story.title}
                </h2>

                <div
                  className="mt-5 text-sm text-secondary md:text-[20px]"
                  dangerouslySetInnerHTML={{
                    __html: story.description,
                  }}
                />
              </div>
            );

            return (
              <div
                key={index}
                className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14"
              >
                {/* First: content left, image right
                    Second: image left, content right */}
                {index % 2 === 0 ? (
                  <>
                    {content}
                    {image}
                  </>
                ) : (
                  <>
                    {image}
                    {content}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Story;