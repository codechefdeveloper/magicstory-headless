import Image from "next/image";
interface FeaturesSection {
  characterTitle?: string;
  characterDesc?: string;
  characterImage?: string;
  characterListHeading?: string;
  characterListOne?: string;
  characterListTwo?: string;
  characterListThree?: string;
  dStoriesTitle?: string;
  dStoriesSubTitle?: string;

}
export default function FeaturesSection({
  characterTitle = "1. Create your child’s character in under 30 seconds",
  characterDesc = "Upload a photo, and our AI instantly creates a Pixar-style version of your child. No setup, no questionnaires, just instant magic.",
  characterImage = "/assets/character.png",
  characterListHeading = "Here’s how easy it is:",
  characterListOne = "Works with any smartphone photo",
  characterListTwo = "Fully secure and private",
  characterListThree = "Stunning, high-quality artwork in minutes",
  dStoriesTitle = "2. 24 expertly designed stories",
  dStoriesSubTitle = "Find new adventures and learn new lessons across 6 uplifting categories:",

}: FeaturesSection) {
  return (
    <section className="w-full bg-black text-white py-10 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gradient-to-br rounded-2xl">
            <Image
              src={characterImage}
              alt="Create character"
              width={600}
              height={350}
              className="rounded-xl object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {characterTitle}
            </h3>
            <p className="text-gray-300 mb-4">
              {characterDesc}
            </p>
            <h4 className="font-wix font-bold mb-4 text-white">{characterListHeading}</h4>
            <ul className="space-y-1 text-gray-300">
              <li>{characterListOne}</li>
              <li>{characterListTwo}</li>
              <li>{characterListThree}</li>
            </ul>
            <button data-open-stepper-modal="true" className="inline-flex items-center gap-2 mt-6 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold">
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
      </div>
    </section>
  );
}