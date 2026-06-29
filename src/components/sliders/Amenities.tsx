"use client";
import { JSX } from "react/jsx-runtime";
import "./sliding.title.scss";

interface Props {
  items: { name?: string; icon: JSX.Element }[];
}
export default function Amenities({ items }: Props) {
  const titles = [...items, ...items];

  return (
    <div className="relative overflow-hidden text-light text-lg max_screen_width">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {titles.map((t, i) => (
            <span
              key={i}
              className="marquee-item flex items-center gap-2.5!"
            >
              <span className="separator">{t.icon}</span>
              <span>{t.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
