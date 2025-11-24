import Image from "next/image";

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
  return (
    <section className="w-full min-h-[90vh] bg-[#141414] flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full space-y-20 text-center">

        {/* Rating Badge */}
        <p className="text-yellow-400 text-lg font-medium mb-2 flex justify-center gap-2">
          ⭐⭐⭐⭐⭐
          <span className="text-gray-300">{ratingText}</span>
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          {heading}
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Testimonial 1 */}
          <div className="bg-[#000000] rounded-3xl p-8 shadow-md border border-[#2a2a2a]">
            <p className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</p>
            <p className="text-lg leading-relaxed mb-6">
              {testimonialOne}
            </p>

            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Image src={verifiedIcon} alt="verified" width={16} height={16} />
              <span className="text-sm">Verified buyer</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#000000] rounded-3xl p-8 shadow-md border border-[#2a2a2a]">
            <p className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</p>
            <p className="text-lg leading-relaxed mb-6">
              {testimonialTwo}
            </p>

            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Image src={verifiedIcon} alt="verified" width={16} height={16} />
              <span className="text-sm">Verified buyer</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#000000] rounded-3xl p-8 shadow-md border border-[#2a2a2a]">
            <p className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</p>
            <p className="text-lg leading-relaxed mb-6">
              {testimonialThree}
            </p>

            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Image src={verifiedIcon} alt="verified" width={16} height={16} />
              <span className="text-sm">Verified buyer</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
