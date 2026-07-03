import "./sliding.title.scss";

export default function SlidingTitle2({
  items,
  ariaHidden = false,
}: {
  items: string[];
  ariaHidden?: boolean;
}) {
  const titles = [...items, ...items];

  return (
    <div
      aria-hidden={ariaHidden}
      className="relative overflow-hidden py-3 bg-secondary text-white border-y border-secondary max_screen_width bg-background2/40"
    >
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {titles.map((t, i) => (
            <span
              key={i}
              aria-hidden={i >= items.length}
              className="marquee-item uppercase text-sm"
            >
              <span>{t}</span>
              <span className="separator">
                <ICon />
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export const ICon = () => (
<svg
  width={12}
  height={12}
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.54403 11.0769L2.59094e-05 5.54388L5.54403 -0.000121713L11.077 5.54388L5.54403 11.0769ZM5.54403 10.0759L10.076 5.54388L5.54403 1.00088L1.01203 5.54388L5.54403 10.0759ZM5.54403 7.84288L3.23403 5.54388L5.54403 3.23388L7.85403 5.54388L5.54403 7.84288Z"
    fill="#80572E"
  />
</svg>

);
