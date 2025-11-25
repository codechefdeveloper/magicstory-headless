// File: /app/landing/components/cta-section.tsx
import Image from 'next/image';

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
    <section aria-label="CTA section" className="w-full min-h-[90vh] bg-[#141414] px-4 py-10 relative">
      <div className="max-w-7xl w-full mx-auto rounded-3xl px-6 py-20 text-center overflow-hidden relative"  style={{
          backgroundImage: `url(${bgImage})`,
        }}>

        {/* Background image using next/image for performance */}
        <div className="absolute inset-0 -z-10">
          <Image src={bgImage} alt="cta background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h2>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">{subtitle}</p>

        <button
          data-open-stepper-modal="true"
          aria-label={buttonLabel}
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-3 mt-4 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-offset-2 active:scale-95"
        >
          {buttonLabel}
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
          </svg>
        </button>

      </div>

      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-6 text-center">
        <div className="flex items-center justify-center gap-2 font-semibold text-gray-200">
          <Image src={guaranteeIcon} alt="guarantee" width={40} height={40} />
          <p className="text-sm md:text-base">{guaranteeText}</p>
        </div>

        <div className="flex items-center justify-center gap-2 font-semibold text-gray-200">
          <Image src={shippingIcon} alt="shipping" width={40} height={40} />
          <p className="text-sm md:text-base">{shippingText}</p>
        </div>

        <div className="flex items-center justify-center gap-2 font-semibold text-gray-200">
          <Image src={qualityIcon} alt="quality" width={40} height={40} />
          <p className="text-sm md:text-base">{qualityText}</p>
        </div>
      </div>
    </section>
  );
}