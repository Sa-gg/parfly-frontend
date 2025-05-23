import React from "react";
import aboutSvg from "../../assets/about.svg";

const About = () => {
  return (
    <>
      <section id="about" className="px-[5vw] py-[5vw]">
        <h2 className="text-center text-primary font-bold text-base pt-[10vh] md:pt-0 hidden">
          ABOUT US
        </h2>
        <div className="container mx-auto py-0 md:py-[4vh] px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h3 className="text-3xl font-bold text-primary sm:text-3xl">
                Connecting Your World
              </h3>
              <p className="mt-4 text-text text-lg">
                At PARFLY, we are redefining courier services with a fast and
                reliable web-based delivery platform. Designed for businesses
                and individuals, PARFLY simplifies logistics with real-time
                tracking, seamless management, and trusted drivers. Whether
                you're shipping a package or running a business, we make~
                deliveries effortless.
              </p>
              <div className="mt-8">
                <a href="#" className="text-primary hover:text-primary-dark">
                  Learn more about us <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0 order-first">
              <img
                src={aboutSvg}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
