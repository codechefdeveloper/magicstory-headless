import Image from 'next/image';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  daysIcon?: string;
  shipsIcon?: string;
  buttonLabel?: string;
}

export default function HeroSection({
  title = "6 Reasons to make your child the hero of their own story",
  subtitle = "Magic Story turns your child’s photo into the hero of a personalized storybook, helping them fall in love with reading.",
  backgroundImage = "/assets/hero-image.png",
  daysIcon = "/assets/30-day.png",
  shipsIcon = "/assets/Ships.png",
  buttonLabel = "Learn more",
}: HeroSectionProps) {
  return (
    <>
      <section aria-label="Hero section" className="w-full min-h-[90vh] bg-[#141414] flex items-center justify-center px-4 py-10">
        <div className="max-w-7xl w-full bg-gradient-to-br from-black via-black/80 to-transparent rounded-[30px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-14 flex flex-col justify-center text-white">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400 text-lg" aria-hidden>
                ⭐⭐⭐⭐⭐
              </div>
              <span className="text-sm text-gray-300">4.9/5 from 2,847+ parents</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">{title}</h1>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl">{subtitle}</p>

              {/* animatio button */}
              <div className="relative flex w-full flex-col items-center gap-3">
                <button
                  type="button"
                  data-open-stepper-modal="true"
                  aria-label={buttonLabel}
                  className="relative font-reddit text-[18px] font-extrabold px-8 py-[13px] rounded-full bg-[#CC0033] text-white shadow-[3px_5px_10px_0px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] hover:bg-red-700 hover:shadow-[4px_6px_12px_0px_rgba(0,0,0,0.2)] active:scale-[0.98] group overflow-hidden"
                >
                  <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-orange-400/40 to-transparent opacity-100"></div>
                  <span className="relative z-0 flex items-center justify-center gap-3">
                    Learn More
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="h-5 w-5"
                      height="1em"
                      width="1em"
                      style={{
                        animation: "1.5s ease-in-out 0s infinite arrowBounce"
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>
                  </span>
                </button>
              </div>

          </div>

          <div className="relative w-full h-[350px] md:h-full" aria-hidden>
            <Image src={backgroundImage} alt="Magic Story Hero" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
      {/* TRUST BAR */}
      <section aria-label="Trust bar" className="w-full bg-[#141414]">
        <div className="max-w-5xl mx-auto bg-gradient-to-r px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-6 text-white shadow-lg rounded-2xl">
          <div className="flex items-center gap-3 text-sm md:text-base font-semibold">
            <Image src={daysIcon} alt="30-day guarantee" width={40} height={40} className="object-contain" />
            <span>30-day money back guarantee</span>
          </div>

          <div className="flex items-center gap-3 text-sm md:text-base font-semibold">
            <Image src={shipsIcon} alt="Ships in 3-5 days globally" width={40} height={40} className="object-contain" />
            <span>Ships in 3-5 days globally</span>
          </div>
        </div>
      </section>
    </>
  );
}
