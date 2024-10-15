import Image from "next/image";

// import playBtnOverlay from './img/play-button-overlay-png-1.png';
import projectOne1x1 from "./img/luke-headshot-wide.png";

export default function Projects() {
  const projContainerStyle = "bg-gray-800 rounded-lg px-5 py-5";
  // const imgOverlayStyle = 'scale-50 hover:scale-75 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';

  return (
    <div className="pt-24 max-w-4xl mx-auto md:px-1 px-3">
      <div className={projContainerStyle}>
        <div className="flex justify-center items-center py5">
          <Image
            className="w-128 rounded-lg"
            src={projectOne1x1}
            alt="AI Corporate Headshot"
          />
          {/* <a href="http://lukas-tech.com" target="_blank">
            <Image className={imgOverlayStyle} src={playBtnOverlay} alt="Play Button Overlay" />
          </a> */}
        </div>
        <h3 className="pt-3 font-semibold text-lg text-white">
          The Birth of Lukas Tech Ltd
        </h3>
        <p className="pt-2 value-text text-md text-gray-200 text-justify">
          Lukas Tech is the embodiment of Luke's childhood dream. Fueled by his
          passion for innovation and excellence, Luke has embarked on this
          thrilling adventure to turn heads in the tech landscape with bespoke
          software development. With over a decade of industry experience, he is
          dedicated to not only delivering exceptional custom software solutions
          but also pushing the boundaries of the iGaming sphere working
          alongside the movers and shakers of the industry.
        </p>
        <p className="pt-2 value-text text-md text-gray-200 text-justify">
          Luke's vision for Lukas Tech extends beyond business success. He is
          committed to creating jobs and opportunities for young, budding
          programmers, offering them a platform to learn, grow, and thrive. Join
          us as we make this dream a reality, redefining what's possible in the
          world of technology and iGaming while fostering the next generation of
          tech talent.
        </p>
      </div>
    </div>
  );
}
