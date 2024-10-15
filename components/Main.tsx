import Image from "next/image";
// import iPhone12ConceptArt from "./img/iPhone-12-ConceptArt.png";
import iPhoneIdea from "./img/iphone-idea.png";
import Projects from "./Projects";

export default function Main() {
  const mainHeadingStyle =
    "mb-5 mt-24 sm:text-6xl text-5xl items-center Avenir xl:w-2/2";
  const paraStyle = "mb-4 xl:w-3/4 text-gray-500 text-lg text-justify";

  return (
    <div id="MainContent" className="body-font">
      <section id="Intro" className="mx-auto">
        <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 pr-6 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className={mainHeadingStyle}>Digital Tech Solutions</h1>

            <p className={paraStyle}>
              Welcome to Lukas Tech, we are a premier UK-based tech company
              specializing in bespoke software development with a keen focus on
              the dynamic iGaming industry. Our expert team of developers and
              innovators are dedicated to creating tailor-made software
              solutions that drive success and deliver exceptional user
              experiences.
            </p>
            <p className={paraStyle}>
              Whether you're looking to revolutionize your iGaming platform or
              need cutting-edge software for other sectors, our comprehensive
              services ensure that your vision is transformed into reality with
              precision and excellence. Partner with Lukas Tech today and
              experience the future of bespoke software development.
            </p>

            {/* <div className="flex justify-center">
            <a className="inline-flex items-center px-5 py-3 mt-2 font-medium transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900" href="#AboutMe" >
              <span className="justify-center">Find out more</span>
            </a>
          </div> */}
          </div>
          <div className="flex items-center">
            <Image
              className={`mt-24 w-60`}
              src={iPhoneIdea}
              alt="iPhone Idea"
            />
          </div>
        </div>
      </section>

      <section id="WeAreExperienced" className="mx-auto">
        <div className="grr max-w-5xl mx-auto text-center">
          <h1 className="mb-8 text-5xl Avenir font-semibold text-gray-900">
            Precision and Speed, Perfected by Experience
          </h1>
          <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-500 text-center">
            With over a decade of iGaming industry expertise, Lukas Tech Ltd
            merges meticulous attention to detail with rapid delivery to provide
            unparalleled bespoke software development.
          </h1>
        </div>
        <Projects />
      </section>

      <section id="Faq" className="mx-auto">
        <div className="grr max-w-4xl pt-20 mx-auto text-center">
          <h1 className="mb-8 text-5xl Avenir font-semibold text-gray-900">
            Questions?
          </h1>
        </div>
        <div className="grr max-w-4xl px-10 py-5 mx-auto">
          <h3 className="font-semibold text-2xl text-gray-900">
            Q1: How quickly can Lukas Tech deliver a bespoke software project?
          </h3>
          <p className="py-5 value-text text-md text-gray-500">
            A1: Our team prides itself on efficient project turnaround times.
            Leveraging over 10 years of industry experience, we streamline our
            processes to deliver high-quality software solutions promptly,
            without compromising on quality.
          </p>
        </div>
        <div className="grr max-w-4xl px-10 py-5 mx-auto">
          <h3 className="font-semibold text-2xl text-gray-900">
            Q2: Does Lukas Tech provide hosting and management?
          </h3>
          <p className="py-5 value-text text-md text-gray-500">
            A2: Yes, Lukas Tech offers comprehensive hosting and management
            services. Our professional team ensures your software runs smoothly
            and efficiently, providing continuous support and maintenance to
            keep your systems optimized and secure.
          </p>
        </div>
        <div className="grr max-w-4xl px-10 py-5 mx-auto">
          <h3 className="font-semibold text-2xl text-gray-900">
            Q3: What makes Lukas Tech stand out in the tech industry?
          </h3>
          <p className="py-5 value-text text-md text-gray-500">
            A3: Our unique blend of efficiency, professionalism, and over a
            decade of expertise sets us apart. We are committed to providing
            bespoke solutions that are tailored to your specific needs, ensuring
            optimal performance and innovation.
          </p>
        </div>
        <div className="grr max-w-4xl px-10 py-5 mx-auto">
          <h3 className="font-semibold text-2xl text-gray-900">
            Q4: How does Lukas Tech handle project management and client
            communication?
          </h3>
          <p className="py-5 value-text text-md text-gray-500">
            A4: We employ a transparent and collaborative approach to project
            management. Our professional team maintains clear and consistent
            communication with clients, ensuring that every project is delivered
            on time, within budget, and to the client's exact specifications.
          </p>
        </div>
      </section>
    </div>
  );
}
