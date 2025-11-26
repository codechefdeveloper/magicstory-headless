// File: /app/landing/components/features-section.tsx
import Image from 'next/image';

interface FeaturesSectionProps {
  characterTitle?: string;
  characterDesc?: string;
  characterImage?: string;
  characterListHeading?: string;
  characterListOne?: string;
  characterListTwo?: string;
  characterListThree?: string;
  dStoriesTitle?: string;
  dStoriesSubTitle?: string;
  dStoriesImage?: string;
  ritualTitle?: string;
  ritualDesc?: string;
  ritualListHeading?: string;
  ritualListOne?: string;
  ritualListTwo?: string;
  ritualListThree?: string;
  ritualBottomText?: string;
  ritualImage?: string;
  emotionTitle?: string;
  emotionDesc?: string;
  emotionItemOne?: string;
  emotionItemTwo?: string;
  emotionItemThree?: string;
  emotionItemFour?: string;
  emotionImage?: string;
  bondingTitle?: string;
  bondingParaOne?: string;
  bondingParaTwo?: string;
  bondingParaThree?: string;
  bondingImage?: string;
  keepsakeTitle?: string;
  keepsakeParaOne?: string;
  keepsakeParaTwo?: string;
  emotionEmporium?: string;
}

export default function FeaturesSection({
  characterTitle = "1. Create your child’s character in under 30 seconds",
  characterDesc = "Upload a photo, and our AI instantly creates a Pixar-style version of your child. No setup, no questionnaires, just instant magic.",
  characterImage = "/assets/ch-1.png",
  characterListHeading = "Here’s how easy it is:",
  characterListOne = "Works with any smartphone photo",
  characterListTwo = "Fully secure and private",
  characterListThree = "Stunning, high-quality artwork in minutes",
  dStoriesTitle = "2. 24 expertly designed stories",
  dStoriesSubTitle = "Find new adventures and learn new lessons across 6 uplifting categories:",
  dStoriesImage = "/assets/dStoriesImage.png",
  ritualTitle = "3. Turn reading into their favorite ritual",
  ritualDesc = "When your child is the hero, storytime becomes their favorite habit.",
  ritualListHeading = "With Magic Story books, you nurture:",
  ritualListOne = "Focus and attention through stories that resonate",
  ritualListTwo = "Vocabulary growth through repetition",
  ritualListThree = "A nightly routine they'll both look forward to",
  ritualBottomText = "Instead of fighting for screen time, you’ll be hearing “just one more chapter.”",
  ritualImage = "/assets/ritualImage.png",
  emotionTitle = "4. Build emotional health through storytelling",
  emotionDesc = "Stories help kids understand the world and themselves.",
  emotionItemOne = "Confidence: “I can do hard things.”",
  emotionItemTwo = "Empathy: Helping others matters.",
  emotionItemThree = "Resilience: Learning from challenges.",
  emotionItemFour = "Creativity: Seeing the world in new ways.",
  emotionImage = "/assets/emotionImage.png",
  bondingTitle = "5. Enjoy screen-free bonding",
  bondingParaOne = "Reclaim bonding time from screens.",
  bondingParaTwo = "Magic Story creates ten minutes of calm connection every night, a pause button in a fast-moving world.",
  bondingParaThree = "Those shared stories turn into lasting memories for both of you.",
  bondingImage = "/assets/bondingImage.png",
  keepsakeTitle = "6. Create a keepsake you’ll treasure forever",
  keepsakeParaOne = "Every book is printed with premium materials to last a lifetime.",
  keepsakeParaTwo = "Years from now, you’ll pull it off the shelf and remember who they were — and the hero they were becoming.",
  emotionEmporium = "/assets/emotionEmporium_img.png",
}: FeaturesSectionProps) {
  return (
    <section aria-label="Features section" className="w-full min-h-[90vh] bg-[#141414] flex items-center justify-center">
      <div className="max-w-[1342px] mx-auto px-[16px]">

        {/* Feature 1 */}
        <div className="py-[48px] sm:py-[64px] grid md:grid-cols-2 gap-[24px] sm:gap-[64px] items-center">
          <div className="relative">
            <Image src={characterImage} alt="Create character" width={1000} height={1000} className="rounded-[14px] sm:round-[24px] max-w-full w-[100%]" priority/>
          </div>

          <div>
             <h3 className="font-reddit font-extrabold text-white text-[28px] sm:text-[36px] leading-[130%] mb-[16px] sm:mb-[24px]">{characterTitle}</h3>
            <p className="font-wix text-[#DADADA] text-[16px] sm:text-[18px] mb-[8px] sm:mb-[16px]">{characterDesc}</p>
            <h4 className="font-reddit font-extrabold text-white text-[16px] sm:text-[18px] leading-[150%] mb-[8px] sm:mb-[16px]">{characterListHeading}</h4>
            <ul className="font-reddit text-[#DADADA] text-[16px] sm:text-[18px] space-y-1 list-disc pl-[20px] mb-[24px] sm:mb-[32px]">
              <li>{characterListOne}</li>
              <li>{characterListTwo}</li>
              <li>{characterListThree}</li>
            </ul>
             <button
                type="button"
                data-open-stepper-modal="true"
                aria-label="Start Building Their Character"
                className="w-full sm:w-auto relative font-reddit text-[18px] font-extrabold px-8 py-[13px] rounded-full bg-[#CC0033] text-white shadow-[3px_5px_10px_0px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] hover:bg-red-700 hover:shadow-[4px_6px_12px_0px_rgba(0,0,0,0.2)] active:scale-[0.98] group overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-orange-400/40 to-transparent opacity-100"></div>

                <span className="relative z-0 flex items-center justify-center gap-3">
                 Start Building Their Character

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

        {/* Feature 2 */}
        <div className="py-[48px] sm:py-[64px] grid md:grid-cols-2 gap-[24px] sm:gap-[64px] items-center">
          <div>
            <h3 className="font-reddit font-extrabold text-white text-[28px] sm:text-[36px] leading-[130%] mb-[16px] sm:mb-[24px]">{dStoriesTitle}</h3>
            <p className="font-wix text-[#DADADA] text-[16px] sm:text-[18px] mb-[8px] sm:mb-[16px]">{dStoriesSubTitle}</p>
            <ul className="font-reddit text-[#DADADA] text-[16px] sm:text-[18px] space-y-1 list-decimal pl-[20px] mb-[24px] sm:mb-[32px]">
              <li>Conquer Fears: Build bravery and courage.</li>
              <li>Celebrate Kindness: Spotlight empathy and caring.</li>
              <li>Ignite Imagination: Expand creativity and curiosity.</li>
              <li>Build Resilience: Show that setbacks lead to growth.</li>
              <li>Boost Confidence: Inspire “I can do hard things.”</li>
              <li>Mark Milestones: Celebrate birthdays, holidays, and big life moments.</li>
            </ul>
          </div>
          <div className="relative order-first sm:order-last">
            <Image src={dStoriesImage} alt="Stories" width={1000} height={1000} className="rounded-[14px] sm:round-[24px] max-w-full w-[100%]" priority />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="py-[48px] sm:py-[64px] grid md:grid-cols-2 gap-[24px] sm:gap-[64px] items-center">
          <div className="relative">
            <Image src={ritualImage} alt="Ritual" width={1000} height={1000} className="rounded-[14px] sm:round-[24px] max-w-full w-[100%]" priority />
          </div>
          <div>
            <h3 className="font-reddit font-extrabold text-white text-[28px] sm:text-[36px] leading-[130%] mb-[16px] sm:mb-[24px]">{ritualTitle}</h3>
            <p className="font-wix text-[#DADADA] text-[16px] sm:text-[18px] mb-[8px] sm:mb-[16px]">{ritualDesc}</p>
            <h4 className="font-reddit font-extrabold text-white text-[16px] sm:text-[18px] leading-[150%] mb-[8px] sm:mb-[16px]">{ritualListHeading}</h4>
            <ul className="font-reddit text-[#DADADA] text-[16px] sm:text-[18px] space-y-1 list-disc pl-[20px] mb-[8px] sm:mb-[16px]">
              <li>{ritualListOne}</li>
              <li>{ritualListTwo}</li>
              <li>{ritualListThree}</li>
            </ul>
            <p className="font-wix text-[#DADADA] text-[16px] sm:text-[18px] mb-[24px] sm:mb-[32px]">{ritualBottomText}</p>
             <button
                type="button"
                data-open-stepper-modal="true"
                aria-label="Build a lifelong habit"
                className="w-full sm:w-auto relative font-reddit text-[18px] font-extrabold px-8 py-[13px] rounded-full bg-[#CC0033] text-white shadow-[3px_5px_10px_0px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] hover:bg-red-700 hover:shadow-[4px_6px_12px_0px_rgba(0,0,0,0.2)] active:scale-[0.98] group overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-orange-400/40 to-transparent opacity-100"></div>

                <span className="relative z-0 flex items-center justify-center gap-3">
                 Build a lifelong habit
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

        {/* Feature 4 */}
        <div className="py-[48px] sm:py-[64px] grid md:grid-cols-2 gap-[24px] sm:gap-[64px] items-center">
          <div>
            <h3 className="font-reddit font-extrabold text-white text-[28px] sm:text-[36px] leading-[130%] mb-[16px] sm:mb-[24px]">{emotionTitle}</h3>
            <p className="font-wix text-[#DADADA] text-[16px] sm:text-[18px] mb-[8px] sm:mb-[16px]">{emotionDesc}</p>
            <ul className="font-reddit text-[#DADADA] text-[16px] sm:text-[18px] space-y-1 list-disc pl-[20px] mb-[24px] sm:mb-[32px]">
              <li>{emotionItemOne}</li>
              <li>{emotionItemTwo}</li>
              <li>{emotionItemThree}</li>
              <li>{emotionItemFour}</li>
            </ul>
          </div>
          <div className="relative order-first sm:order-last">
            <Image src={emotionImage} alt="Emotion" width={1000} height={1000} className="rounded-[14px] sm:round-[24px] max-w-full w-[100%]" priority />
          </div>
        </div>

        {/* Feature 5 */}
        <div className="py-[48px] sm:py-[64px] grid md:grid-cols-2 gap-[24px] sm:gap-[64px] items-center mb-[40px]">
          <div className="relative">
            <Image src={bondingImage} alt="Bonding" width={1000} height={1000} className="rounded-[14px] sm:round-[24px] max-w-full w-[100%]" priority />
          </div>
          <div>
            <h3 className="font-reddit font-extrabold text-white text-[28px] sm:text-[36px] leading-[130%] mb-[16px] sm:mb-[24px]">{bondingTitle}</h3>
            <p className="font-wix text-[#DADADA] text-[16px] sm:text-[18px] mb-[8px] sm:mb-[16px]">{bondingParaOne}</p>
            <p className="font-wix text-[#DADADA] text-[16px] sm:text-[18px] mb-[8px] sm:mb-[16px]">{bondingParaTwo}</p>
            <p className="font-wix text-[#DADADA] text-[16px] sm:text-[18px] mb-[8px] sm:mb-[16px]">{bondingParaThree}</p>
            <button
                type="button"
                data-open-stepper-modal="true"
                aria-label="Start Building Their Character"
                className="w-full sm:w-auto relative font-reddit text-[18px] font-extrabold px-8 py-[13px] rounded-full bg-[#CC0033] text-white shadow-[3px_5px_10px_0px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] hover:bg-red-700 hover:shadow-[4px_6px_12px_0px_rgba(0,0,0,0.2)] active:scale-[0.98] group overflow-hidden mt-4"
              >
                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-orange-400/40 to-transparent opacity-100"></div>

                <span className="relative z-0 flex items-center justify-center gap-3">
                 Start Building Their Character
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

        {/* Feature 6 */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-cover bg-center rounded-3xl relative py-[32px] sm:py-[48px] px-[16px] sm:px-[48px] bg-[url('/assets/keepshake-bg-mobile.png')] sm:bg-[url('/assets/bg_img-01.jpg')]" >
          <div>
            <h3 className="font-reddit font-extrabold text-white text-[28px] sm:text-[40px] leading-[130%] mb-[16px] sm:mb-[24px]">{keepsakeTitle}</h3>
            <p className="font-wix text-[#DADADA] text-[16px] sm:text-[18px] mb-[8px] sm:mb-[16px]">{keepsakeParaOne}</p>
            <p className="font-wix text-[#DADADA] text-[16px] sm:text-[18px] mb-[8px] sm:mb-[16px]">{keepsakeParaTwo}</p>
          </div>
          <div className="text-center">
            <Image src={emotionEmporium} alt="Books" width={476} height={476} className="inline-block max-w-full" priority />
          </div>
        </div>

      </div>
    </section>
  );
}