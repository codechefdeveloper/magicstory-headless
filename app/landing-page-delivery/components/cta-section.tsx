import Image from "next/image";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;

  guaranteeIcon?: string;
  guaranteeText?: string;

  shippingIcon?: string;
  shippingText?: string;

  qualityIcon?: string;
  qualityText?: string;

  bgImage?: string;
}

export default function CtaSection({
  title = "Ready to See the Difference?",
  subtitle = "Join thousands of parents who've watched their kids transform from reluctant readers into storytime champions.",
  buttonLabel = "MAKE YOUR CHILD THE HERO",
  guaranteeIcon = "/assets/30-day.png",
  guaranteeText = "30-day money back guarantee",

  shippingIcon = "/assets/Ships.png",
  shippingText = "Ships in 3-5 days globally",

  qualityIcon = "/assets/quality-icon.png",
  qualityText = "Premium hardcover quality",

  bgImage = "/assets/cta-bg-img.png",
}: CtaSectionProps) {
  return (
    <section className="w-full min-h-[90vh] bg-[#141414] px-4 py-10">
      <div
        className="max-w-7xl w-full mx-auto rounded-3xl px-6 py-20 text-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>

        {/* CTA Button */}
        <button data-open-stepper-modal="true" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold">
            {buttonLabel} <svg
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

      {/* Bottom Features */}
      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-6 text-center">
        {/* Guarantee */}
        <div className="flex items-center justify-center gap-2 font-semibold">
          <Image src={guaranteeIcon} alt="guarantee" width={40} height={40} />
          <p className="text-sm md:text-base text-gray-300">{guaranteeText}</p>
        </div>

        {/* Shipping */}
        <div className="flex items-center justify-center gap-2 font-semibold">
          <Image src={shippingIcon} alt="shipping" width={40} height={40} />
          <p className="text-sm md:text-base text-gray-300">{shippingText}</p>
        </div>

        {/* Quality */}
        <div className="flex items-center justify-center gap-2 font-semibold">
          <Image src={qualityIcon} alt="quality" width={40} height={40} />
          <p className="text-sm md:text-base text-gray-300">{qualityText}</p>
        </div>
      </div>
    </section>
  );
}
