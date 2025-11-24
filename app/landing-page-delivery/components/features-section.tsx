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
  emotionEmporium?: string;

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
  emotionEmporium = "/assets/emotion-emporium.png",

}: FeaturesSection) {
  return (
    <section className="w-full min-h-[90vh] bg-[#141414] flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full space-y-20">
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
        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">{dStoriesTitle}</h3>
            <p className="text-gray-300 mb-4">
              {dStoriesSubTitle}
            </p>
            <ul className="space-y-2 text-gray-300">
              <li><span className="font-bold">1. Conquer Fears:</span> Build bravery and courage.</li>
              <li><span className="font-bold">2. Celebrate Kindness:</span> Spotlight empathy and caring.</li>
              <li><span className="font-bold">3. Ignite Imagination:</span> Expand creativity and curiosity.</li>
              <li><span className="font-bold">4. Build Resilience:</span> Show that setbacks lead to growth.</li>
              <li><span className="font-bold">5. Boost Confidence:</span> Inspire “I can do hard things.”</li>
              <li><span className="font-bold">6. Mark Milestones:</span> Celebrate birthdays and achievements.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/designed-stories.png"
              alt="24 expertly designed stories"
              width={600}
              height={350}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
        {/* Feature 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="/assets/favorite-ritual.png"
              alt="Reading ritual"
              width={600}
              height={350}
              className="rounded-2xl object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              3. Turn reading into their favorite ritual
            </h3>
            <p className="text-gray-300 mb-4">
              When your child is the hero, storytime becomes their favorite habit.
            </p>
            <h4 className="font-wix font-bold mb-4 text-white">With Magic Story books, you nurture:</h4>
            <ul className="space-y-1 s text-gray-300 list-disc pl-5 mb-4">
              <li>Focus and attention through stories that resonate</li>
              <li>Vocabulary growth through repetition</li>
              <li>A nightly routine they'll both look forward to</li>
            </ul>
             <p className="text-gray-300 mb-4">
               Instead of fighting for screen time, you’ll be hearing “just one more chapter.”
            </p>
            <button data-open-stepper-modal="true" className="inline-flex items-center gap-2 mt-6 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold">
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
            <h3 className="text-2xl font-bold mb-4">
              4. Build emotional health through storytelling
            </h3>
            <p className="text-gray-300 mb-4">
              Stories help kids understand the world and themselves.
            </p>
            <ul className="space-y-2 text-gray-300 list-disc pl-5">
              <li><span className="font-bold">Confidence:</span> “I can do hard things.”</li>
              <li><span className="font-bold">Empathy:</span> Helping others matters.</li>
              <li><span className="font-bold">Resilience:</span> Learning from challenges.</li>
              <li><span className="font-bold">Creativity:</span> Seeing the world in new ways.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/storytelling.png"
              alt="Emotional health"
              width={600}
              height={350}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Feature 5 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="/assets/bonding.png"
              alt="Screen free bonding"
              width={600}
              height={350}
              className="rounded-2xl object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">5. Enjoy screen-free bonding</h3>
            <p className="text-gray-300">
              Reclaim bonding time from screens.
            </p>
            <p className="text-gray-300">
              Magic Story creates ten minutes of calm connection every night, a pause button in a fast-moving world.
            </p>
            <p className="text-gray-300 mb-6">
              Those shared stories turn into lasting memories for both of you.
            </p>
            <button data-open-stepper-modal="true" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold">
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
        <div
            className="grid md:grid-cols-2 gap-10 items-center bg-cover bg-center rounded-3xl p-10"
            style={{
                backgroundImage: `url('/assets/bg_img-01.jpg')`,
            }}
            >
            {/* LEFT TEXT */}
            <div>
                <h3 className="text-2xl font-bold mb-4">
                6. Create a keepsake you’ll treasure forever
                </h3>

                <p className="text-lg opacity-90 mb-4">
                Every book is printed with premium materials to last a lifetime.
                </p>

                <p className="text-lg opacity-90">
                Years from now, you’ll pull it off the shelf and remember who they were —
                and the hero they were becoming.
                </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end">
                <Image
                src={emotionEmporium}
                alt="Books"
                width={400}
                height={400}
                className="rounded-xl"
                />
            </div>
        </div>
      </div>
    </section>
  );
}