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
  daysIcon = "/assets/money_back.svg",
  shipsIcon = "/assets/ships_globally.svg",
  buttonLabel = "Learn more",
}: HeroSectionProps) {
  return (
    <>
           <section className="lp-hero  bg-[#141414] pt-[12px]">
        <div className="max-w-[1342px] mx-auto px-[16px]">
                <div className="lp-hero-inner bg-[url('/assets/hero-bg-img-mobile.png')] sm:bg-[url('/assets/hero-bg-img-desktop.png')] relative bg-no-repeat  bg-cover rounded-[24px] border border-[#4D4D4D] min-h-[740px] md:min-h-[640px] w-full flex 2xl:items-center 2xl:gap-12 2xl:px-[64px] px-[16px] py-[53px]">
          <div className="lp-hero-content text-white max-w-[630px]">
              <div className="flex items-center gap-2 mb-[16px]">
              <div className="font-reddit flex text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
              <a href='#' className="font-reddit text-[14px] sm:text-[16px] font-extrabold underline">4.9/5 from 2,847+ parents</a>
            </div>
            <h1 className="font-reddit font-extrabold text-[32px] sm:text-[38px] mb-[16px] leading-[42px] sm:leading-[48px]">{title}</h1>
            <p className='font-wix text-[16px] sm:text-[18px] mb-[32px]'>{subtitle}</p>
            <div className="relative flex w-full flex-col items-start gap-3">
              <button
                type="button"
                data-open-stepper-modal="true"
                aria-label={buttonLabel}
                className="w-full sm:w-auto relative font-reddit text-[18px] font-extrabold px-8 py-[13px] rounded-full bg-[#CC0033] text-white shadow-[3px_5px_10px_0px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] hover:bg-red-700 hover:shadow-[4px_6px_12px_0px_rgba(0,0,0,0.2)] active:scale-[0.98] group overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-orange-400/40 to-transparent opacity-100"></div>
 
                <span className="relative z-0 flex items-center justify-center gap-3">
                  Learn more
 
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
        </div>
        </div>
  
      </section>
      {/* TRUST BAR */}
      <section className="w-full bg-[#141414]">
        <div className="max-w-[1342px] mx-auto px-[16px] py-[24px] flex flex-col sm:flex-row justify-center gap-[10px] sm:gap-[48px] text-white">
          <div className="flex items-center gap-[12px] sm:gap-[12px] ">
              <Image
                src={daysIcon}
                alt="30-day money back guarantee"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            <span className="font-reddit text-[20px] sm:text-[24px] font-extrabold">30-day money back guarantee</span>
          </div>

          <div className="flex items-center gap-[12px] sm:gap-[12px]">
              <Image
                src={shipsIcon}
                alt="Ships in 3-5 days globally"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            <span className="font-reddit text-[20px] sm:text-[24px] font-extrabold">Ships in 3-5 days globally</span>
          </div>
        </div>
      </section>
    </>
  );
}
