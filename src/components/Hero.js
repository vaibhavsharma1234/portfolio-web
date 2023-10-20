import "./hero.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (
    <div className="relative">
      <div className="bg flex justify-center items-center flex-col ">
        <div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold p-4 m-4 mb-12 w-[80vw] lg:w-[60vw] m-auto text-center animate-fadeIn">
            HEY, I'M VAIBHAV SHARMA{" "}
          </h1>
          <p className="w-[90vw] m-auto custom-text text-left md:w-[60vw] text-base md:text-xl tracking-wide text-slate-800 text-center leading-8 animate-fadeInUp">
            I'm a Freelance Full-Stack Web Developer, specializing in crafting
            efficient web applications tailored to solve real-world problems.
            With expertise in both front-end and back-end development, I create
            solutions that are not only functional but also user-friendly. If
            you have a project in mind, let's chat – together, we can bring your
            ideas to life.
          </p>
        </div>

        <div className="m-8">
          <button className="uppercase bg-emerald-700 w-[35vw] lg:w-[10vw] font-semibold text-white h-16 transition transform ease-in-out delay-150 hover:-translate-y-2 rounded animate-bounce">
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              Projects
            </Link>
          </button>
        </div>
      </div>
      <div className=" ">
        <div className="home-hero__socials animate-fadeInUp">
          <div className="home-hero__social">
            <a href="https://linkedin.com/in/rammcodes" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
                alt="Ram Maheshwari Linkedin Profile"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a href="https://twitter.com/rammcodes" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg"
                alt="RammCodes Twitter Profile"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a href="https://www.youtube.com/channel/UCIb8_J9lqtiWGMIOdQ5DVsg" className="home-hero__social-icon-link home-hero__social-icon-link--bd-none" rel="noreferrer" target="_blank">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/7c95be3350552a5e9f2fc47f1bdbac118ea4dcee/f7a5e/assets/svg/yt-dark.svg"
                alt="RammCodes Youtube Channel"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a href="https://github.com/rammcodes" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
                alt="RammCodes Github Profile"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a href="https://dev.to/rammcodes" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/e978c8491d93813aa00b3dc80b9abfb0d64a9086/3c187/assets/svg/book-dark.svg"
                alt="RammCodes DEV.to Blog Profile"
                className="home-hero__social-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
