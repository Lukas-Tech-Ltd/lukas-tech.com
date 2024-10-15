export default function Footer() {
  const listClassName = "space-y-5 row-span-2 pb-5";
  const listItemClassName =
    "text-gray-500 hover:text-white transition-colors duration-200 text-2xl";

  return (
    <footer id="Footer" className="py-20">
      <div className="max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul className="text-sm font-medium sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className={listClassName}>
            <h2 className="text-sm tracking-wide text-gray-200 uppercase font-bold">
              Contact
            </h2>
            <ul className="space-y-4">
              <li>
                <a className={listItemClassName} href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a
                  className={listItemClassName}
                  href="https://www.linkedin.com/in/lukas-tech-ltd"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className={listItemClassName}
                  href="https://x.com/lukastechltd"
                  target="_blank"
                >
                  X
                </a>
              </li>
            </ul>
          </li>

          <li className={listClassName}>
            <h2 className="text-sm tracking-wide text-gray-200 uppercase font-bold">
              Site Map
            </h2>
            <ul className="space-y-4 text-md">
              <li>
                {" "}
                <a className={listItemClassName} href="/">
                  {" "}
                  Home{" "}
                </a>{" "}
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <div>
            &copy; Lukas Tech Ltd 2024. All rights reserved.
            <br />
          </div>
          <div>
            Company Registration Number 15690535
            <br />
            71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H
            9JQ
          </div>
        </div>
      </div>
    </footer>
  );
}
