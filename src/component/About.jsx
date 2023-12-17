import about from "../animation/about.json";
import Lottie from "lottie-react";

export const About = () => {
  return (
    <section className="mt-24">
      <div>
        {/* <div className="flex justify-center items-center text-4xl font-extrabold">
          <p className="bg-gradient-to-r from-[#193C8F] via-[#442dba] to-[#5069e4] inline-block text-transparent bg-clip-text">
            About
          </p>
        </div> */}
        <div className="flex justify-around mt-20 px-96 items-center">
          <div className="w-96">
            <Lottie animationData={about} loop={true} />
          </div>
          <div>
            <p className="mb-1 text-5xl font-extrabold headingText">
              About
            </p>
            <p className="w-96">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
