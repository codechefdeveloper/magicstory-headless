import Image from 'next/image';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  daysIcon?: string;
  shipsIcon?: string;
}

export default function HeroSection({
  title = "6 Reasons to make your child the hero of their own story",
  subtitle = "Magic Story turns your child’s photo into the hero of a personalized storybook, helping them fall in love with reading.",
  backgroundImage = "/assets/hero-image.png",
  daysIcon = "/assets/30-day.png",
  shipsIcon = "/assets/Ships.png",
}: HeroSectionProps) {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full min-h-[90vh] bg-[#141414] flex items-center justify-center px-4 py-10">
        <div className="max-w-7xl w-full bg-gradient-to-br from-black via-black/80 to-transparent rounded-[30px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-14 flex flex-col justify-center text-white">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
              <span className="text-sm text-gray-300">4.9/5 from 2,847+ parents</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl">
              {subtitle}
            </p>
            <div>
            <button data-open-stepper-modal="true" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold">
               Learn more <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="h-5 w-5 md:h-6 md:w-6 animate-arrowBounce"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                </svg>
            </button>
            </div>
          </div>

          <div className="relative w-full h-[350px] md:h-full">
            <Image
              src={backgroundImage}
              alt="Magic Story Hero"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* TRUST BAR - SEPARATE SECTION */}
      <section className="w-full bg-[#141414]">
        <div className="max-w-5xl mx-auto bg-gradient-to-r px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-6 text-white shadow-lg">
          <div className="flex items-center gap-3 text-sm md:text-base font-semibold">
              <Image
                src={daysIcon}
                alt="30-day money back guarantee"
                width={40}
                height={40}
                className="object-contain"
              />
            <span>30-day money back guarantee</span>
          </div>

          <div className="flex items-center gap-3 text-sm md:text-base font-semibold">
              <Image
                src={shipsIcon}
                alt="Ships in 3-5 days globally"
                width={40}
                height={40}
                className="object-contain"
              />
            <span>Ships in 3-5 days globally</span>
          </div>
        </div>
      </section>
    </>
  );
}