import Image from 'next/image';

interface TestimonialsSectionProps {
  ratingText?: string;
  heading?: string;
  testimonialOne?: string;
  testimonialTwo?: string;
  testimonialThree?: string;
  verifiedIcon?: string;
}

export default function TestimonialsSection({
  ratingText = "4.9/5 from 2,847+ parents",
  heading = "What Parents Are Saying",
  testimonialOne = "“My son actually wants to read now. He asks for his Magic Story instead of the iPad.”",
  testimonialTwo = "“It’s rare to find something fun that also feels important. This does both.”",
  testimonialThree = "“The quality is incredible, and my daughter’s face lit up when she saw herself on the page.”",
  verifiedIcon = "/assets/icons/verified.svg",
}: TestimonialsSectionProps) {

  const testimonials = [testimonialOne, testimonialTwo, testimonialThree];

  return (
    <section className="w-full bg-[#141414] flex items-center justify-center py-[64px] sm:py-[100px]">
      <div className="max-w-[1342px] mx-auto px-[16px] overflow-hidden">
        <div className="flex w-full justify-center items-center gap-2 mb-[16px]">
          <div className="flex font-reddit text-yellow-400 text-[16px]">⭐⭐⭐⭐⭐</div>
          <a href='#' className="font-reddit text-white text-[14px] sm:text-[16px] font-extrabold">{ratingText}</a>
        </div>

        <h2 className="font-reddit font-extrabold text-white text-center text-[28px] sm:text-[40px] leading-[130%] mb-[32px] sm:mb-[48px]">{heading}</h2>

        {/* MOBILE SLIDER */}
        <div className="md:hidden overflow-x-auto flex gap-6 snap-x snap-mandatory scroll-smooth px-2">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="min-w-[90%] snap-center bg-black text-center rounded-[24px] p-[32px] border border-[#4D4D4D] flex flex-col gap-[24px] justify-between"
            >
              <div>
                <p className="font-reddit text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</p>
              <p className="font-reddit font-bold text-white text-[20px] sm:text-[24px] leading-[150%]">{t}</p>
              </div>
              
              <div className="flex items-center justify-center gap-[8px] opacity-[80%]">
                <Image src={verifiedIcon} alt="verified" width={20} height={20} />
                <span className="font-reddit font-semibold text-white text-[16px]">Verified buyer</span>
              </div>
            </article>
          ))}
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid md:grid-cols-3 gap-[24px]">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-black text-center rounded-[24px] p-[32px] border border-[#4D4D4D] flex flex-col gap-[24px] justify-between"
            >
              <div>
                <p className="font-reddit text-yellow-400 text-xl mb-[16px]">⭐⭐⭐⭐⭐</p>
                <p className="font-reddit font-bold text-white text-[20px] sm:text-[24px] leading-[150%]">{t}</p>
              </div>

              <div className="flex items-center justify-center gap-[8px] opacity-[80%]">
                <Image src={verifiedIcon} alt="verified" width={20} height={20} />
                <span className="font-reddit font-semibold text-white text-[16px]">Verified buyer</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
