import Image from "next/image";

interface FeaturesSection {
  /* FEATURE 1 */
  characterTitle?: string;
  characterDesc?: string;
  characterImage?: string;
  characterListHeading?: string;
  characterListOne?: string;
  characterListTwo?: string;
  characterListThree?: string;

  /* FEATURE 2 */
  dStoriesTitle?: string;
  dStoriesSubTitle?: string;
  dStoriesImage?: string;

  /* FEATURE 3 */
  ritualTitle?: string;
  ritualDesc?: string;
  ritualListHeading?: string;
  ritualListOne?: string;
  ritualListTwo?: string;
  ritualListThree?: string;
  ritualBottomText?: string;
  ritualImage?: string;

  /* FEATURE 4 */
  emotionTitle?: string;
  emotionDesc?: string;
  emotionItemOne?: string;
  emotionItemTwo?: string;
  emotionItemThree?: string;
  emotionItemFour?: string;
  emotionImage?: string;

  /* FEATURE 5 */
  bondingTitle?: string;
  bondingParaOne?: string;
  bondingParaTwo?: string;
  bondingParaThree?: string;
  bondingImage?: string;

  /* FEATURE 6 */
  keepsakeTitle?: string;
  keepsakeParaOne?: string;
  keepsakeParaTwo?: string;
  emotionEmporium?: string;
}

export default function FeaturesSection({
  /* FEATURE 1 */
  characterTitle = "1. Create your child’s character in under 30 seconds",
  characterDesc = "Upload a photo, and our AI instantly creates a Pixar-style version of your child. No setup, no questionnaires, just instant magic.",
  characterImage = "/assets/character.png",
  characterListHeading = "Here’s how easy it is:",
  characterListOne = "Works with any smartphone photo",
  characterListTwo = "Fully secure and private",
  characterListThree = "Stunning, high-quality artwork in minutes",

  /* FEATURE 2 */
  dStoriesTitle = "2. 24 expertly designed stories",
  dStoriesSubTitle = "Find new adventures and learn new lessons across 6 uplifting categories:",
  dStoriesImage = "/assets/designed-stories.png",

  /* FEATURE 3 */
  ritualTitle = "3. Turn reading into their favorite ritual",
  ritualDesc = "When your child is the hero, storytime becomes their favorite habit.",
  ritualListHeading = "With Magic Story books, you nurture:",
  ritualListOne = "Focus and attention through stories that resonate",
  ritualListTwo = "Vocabulary growth through repetition",
  ritualListThree = "A nightly routine they'll both look forward to",
  ritualBottomText = "Instead of fighting for screen time, you’ll be hearing “just one more chapter.”",
  ritualImage = "/assets/favorite-ritual.png",

  /* FEATURE 4 */
  emotionTitle = "4. Build emotional health through storytelling",
  emotionDesc = "Stories help kids understand the world and themselves.",
  emotionItemOne = "Confidence: “I can do hard things.”",
  emotionItemTwo = "Empathy: Helping others matters.",
  emotionItemThree = "Resilience: Learning from challenges.",
  emotionItemFour = "Creativity: Seeing the world in new ways.",
  emotionImage = "/assets/storytelling.png",

  /* FEATURE 5 */
  bondingTitle = "5. Enjoy screen-free bonding",
  bondingParaOne = "Reclaim bonding time from screens.",
  bondingParaTwo = "Magic Story creates ten minutes of calm connection every night, a pause button in a fast-moving world.",
  bondingParaThree = "Those shared stories turn into lasting memories for both of you.",
  bondingImage = "/assets/bonding.png",

  /* FEATURE 6 */
  keepsakeTitle = "6. Create a keepsake you’ll treasure forever",
  keepsakeParaOne = "Every book is printed with premium materials to last a lifetime.",
  keepsakeParaTwo = "Years from now, you’ll pull it off the shelf and remember who they were — and the hero they were becoming.",
  emotionEmporium = "/assets/emotion-emporium.png",
}: FeaturesSection) {
  return (
    <section className="w-full min-h-[90vh] bg-[#141414] flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full space-y-20">

        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image src={characterImage} alt="Create character" width={600} height={350} className="rounded-xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">{characterTitle}</h3>
            <p className="text-gray-300 mb-4">{characterDesc}</p>
            <h4 className="font-bold mb-4">{characterListHeading}</h4>
            <ul className="space-y-1 text-gray-300 list-disc pl-5">
              <li>{characterListOne}</li>
              <li>{characterListTwo}</li>
              <li>{characterListThree}</li>
            </ul>
            <button data-open-stepper-modal="true" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-3 mt-4 rounded-full font-semibold">
               Start Building Their Character <svg
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

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">{dStoriesTitle}</h3>
            <p className="text-gray-300 mb-4">{dStoriesSubTitle}</p>
          </div>
          <Image src={dStoriesImage} alt="Stories" width={600} height={350} className="rounded-xl" />
        </div>

        {/* Feature 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image src={ritualImage} alt="Ritual" width={600} height={350} className="rounded-xl" />
          <div>
            <h3 className="text-2xl font-bold mb-4">{ritualTitle}</h3>
            <p className="text-gray-300 mb-4">{ritualDesc}</p>
            <h4 className="font-bold mb-4">{ritualListHeading}</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>{ritualListOne}</li>
              <li>{ritualListTwo}</li>
              <li>{ritualListThree}</li>
            </ul>
            <p className="text-gray-300 mt-4">{ritualBottomText}</p>
            <button data-open-stepper-modal="true" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-3 mt-4 rounded-full font-semibold">
                  Build a lifelong habit <svg
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

        {/* Feature 4 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">{emotionTitle}</h3>
            <p className="text-gray-300 mb-4">{emotionDesc}</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>{emotionItemOne}</li>
              <li>{emotionItemTwo}</li>
              <li>{emotionItemThree}</li>
              <li>{emotionItemFour}</li>
            </ul>
          </div>
          <Image src={emotionImage} alt="Emotion" width={600} height={350} className="rounded-xl" />
        </div>

        {/* Feature 5 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image src={bondingImage} alt="Bonding" width={600} height={350} className="rounded-xl" />
          <div>
            <h3 className="text-2xl font-bold mb-4">{bondingTitle}</h3>
            <p className="text-gray-300">{bondingParaOne}</p>
            <p className="text-gray-300">{bondingParaTwo}</p>
            <p className="text-gray-300">{bondingParaThree}</p>
             <button data-open-stepper-modal="true" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-3 mt-4 rounded-full font-semibold">
                  Start Building Their Character <svg
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

        {/* Feature 6 */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-cover bg-center rounded-3xl p-10"
             style={{ backgroundImage: `url('/assets/bg_img-01.jpg')` }}>
          <div>
            <h3 className="text-2xl font-bold mb-4">{keepsakeTitle}</h3>
            <p className="text-lg opacity-90 mb-4">{keepsakeParaOne}</p>
            <p className="text-lg opacity-90">{keepsakeParaTwo}</p>
          </div>
          <Image src={emotionEmporium} alt="Books" width={400} height={400} className="rounded-xl" />
        </div>

      </div>
    </section>
  );
}
