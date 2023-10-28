import React from "react";
import heroIMG1 from "../assets/heroIMG1.png";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div>
      <section className="bg-primary px-5 text-white py-32">
        <div className="container ml-5  grid md:grid-cols-2 items-center justify-center md:justify-between">
          <div className="hero-info pb-5 md:pb-0">
            <h1 className="text-4xl lg:text-6xl">
              Hi, <br />I am <span className="text-accent"></span>Ajay <br />
              Frontend Developer
            </h1>
            <p className="py-5">
              I am proficient in JavaScript, React.js and Tailwind CSS
            </p>
            <div className="flex py-5">
              <a
                href="/twitter"
                className="pr-4 inline-block text-accent hover:text-white"
              >
                <AiOutlineTwitter size={40} />
              </a>
              <a
                href="/instagram"
                className="pr-4 inline-block text-accent hover:text-white"
              >
                <AiOutlineInstagram size={40} />
              </a>
              <a
                href="/linkedin"
                className="pr-4 inline-block text-accent hover:text-white"
              >
                <AiOutlineLinkedin size={40} />
              </a>
              <a
                href="/github"
                className="pr-4 inline-block text-accent hover:text-white"
              >
                <AiOutlineGithub size={40} />
              </a>
            </div>
            <a
              href="/#projects"
              className="btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
            >
              see projects
            </a>
          </div>

          <div className="hero-img ml-10 ">
            <img
              src={heroIMG1}
              alt="coding illustration"
              className="lgw-[80%] md:ml-20"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
