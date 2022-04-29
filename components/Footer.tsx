import { FaRegCopyright } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="flex justify-center text-center w-full bg-black">
      <section className="pt-10 pb-20">
        {/* Top */}
        <div className="text-white">
          <h2 className="navLogo navLogoActive mb-1">BLUGENIX</h2>
          <h3 className="font-light text-sm">TESTOSTERONE & HGH THERAPIES</h3>

          {/* Middle */}
          <div className="py-8">
            <span className="flex justify-center items-center italic">
              follow us on
              <div className="ml-3 flex space-x-4">
                <a
                  href="https://www.facebook.com/Blugenix"
                  target="_blank"
                  rel="noreferrer">
                  <ImFacebook className="h-7 w-7 ml-1 hover:scale-110 hover:text-blue-700 transition-colors transform duration-150" />
                </a>
                <a
                  href="https://www.instagram.com/blugenix/"
                  target="_blank"
                  rel="noreferrer">
                <IoLogoInstagram className="h-7 w-7 hover:scale-110 hover:text-blue-700 transition-colors transform duration-150" />
                </a>
              </div>
            </span>
          </div>

          {/* Bottom */}
          <div>
            <span className="flex justify-center items-center -mb-2">
              <FaRegCopyright className="h-6 mr-1 text-sm" />
              2016 Blugenix
            </span>
            <span className="text-xs text-gray-400">
              made by{" "}
              <a
                className="text-blue-400"
                href="https://risner-portfolio-app.web.app/"
                target="_blank"
                rel="noreferrer">
                g.dev/cr
              </a>
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
