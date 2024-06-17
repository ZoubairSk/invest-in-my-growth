import Navigation from "@/components/navigation";
import Image from "next/image";
import heroImage from "@/public/assets/Homepage/Hero/Mask group.svg";
import containerImage from "@/public/assets/Homepage/Hero/rectangleImage.svg";
export default function Homepage() {
  return (
    <>
      <div className="px-20">
        <Navigation />

        <div className="flex items-center py-10 justify-center">
          <div className="flex flex-col gap-y-2.5">
            <div>
              <h1 className="text-2xl font-bold ">
                Invest In A Brighter Tomorrow By{" "}
                <span className="text-blue">Empowering</span> Today’s Talent{" "}
              </h1>
            </div>

            <div className="">
              <p className="text-black text-opacity-70">
                Our DEI platform connects ambitious students with industry
                leaders and mentors, forging pathways to success and inclusion.
              </p>
            </div>

            <div className="flex gap-x-4 items-center text-sm">
              <button className="rounded-full border border-blue text-blue bg-white px-8 py-1 ">
                Sponsor A Student
              </button>
              <button className="rounded-full bg-white px-8 py-2 text-black">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <Image alt="hero section image" src={heroImage} />
          </div>
        </div>
      </div>
      <div className="bg-heroContainer h-64 bg-cover flex gap-y-5 flex-col pt-20 w-full">
        <div className="flex justify-center w-full">
          <h2 className="text-lg text-white">
            Why <span className="text-blue">Sponsor ?</span>
          </h2>
        </div>
        <div className="flex gap-x-5 w-full px-20">
          <div className="flex flex-col gap-y-5 w-full">
            <div className="relative w-3/5 h-0.5 bg-white bg-opacity-10">
              <div className="absolute w-3/4 h-full bg-blue"></div>
            </div>
            <div>
              <p className="text-sm text-white">
                60% of Black students in America attend a high-poverty,
                majority-minority school
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 w-full">
            <div className="relative w-3/5 h-0.5 bg-white bg-opacity-10">
              <div className="absolute w-3/4 h-full bg-blue"></div>
            </div>
            <div>
              <p className="text-sm text-white">
                Black Americans are underrepresented among entrepreneurs,
                representing 12% of the U.S. labor force but only 9.4% of
                business owners
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 w-full">
            <div className="relative w-3/5 h-0.5 bg-white bg-opacity-10">
              <div className="absolute w-3/4 h-full bg-blue"></div>
            </div>
            <div>
              <p className="text-sm text-white">
                At $171,000, the net worth of a typical white family is nearly
                ten times greater than that of a Black American family
                ($17,150).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
