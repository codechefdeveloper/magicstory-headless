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
  verifiedIcon = "/assets/verified.png",
}: TestimonialsSectionProps) {

  const testimonials = [testimonialOne, testimonialTwo, testimonialThree];

  return (
    <section className="w-full bg-[#141414] flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full space-y-12 text-center">

        <p className="text-yellow-400 text-lg font-medium flex justify-center gap-2">
          ⭐⭐⭐⭐⭐ <span className="text-gray-300">{ratingText}</span>
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">{heading}</h2>

        {/* MOBILE SLIDER */}
        <div className="md:hidden overflow-x-auto flex gap-6 snap-x snap-mandatory scroll-smooth px-2">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="min-w-[90%] snap-center bg-black rounded-3xl p-8 shadow-md border border-[#2a2a2a]"
            >
              <p className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</p>
              <p className="text-lg leading-relaxed mb-6">{t}</p>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <Image src={verifiedIcon} alt="verified" width={16} height={16} />
                <span className="text-sm">Verified buyer</span>
              </div>
            </article>
          ))}
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-black rounded-3xl p-8 shadow-md border border-[#2a2a2a]"
            >
              <p className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</p>
              <p className="text-lg leading-relaxed mb-6">{t}</p>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <Image src={verifiedIcon} alt="verified" width={16} height={16} />
                <span className="text-sm">Verified buyer</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
