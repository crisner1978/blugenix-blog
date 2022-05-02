import { FaRegCopyright } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { IoLogoInstagram } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-black text-center relative">
      <section className="pt-16 pb-20">
        {/* Top */}
        <div className="text-white ">
          <h2 className="navLogo navLogoActive mb-1">BLUGENIX</h2>
          <h3 className="text-sm font-light">TESTOSTERONE & HGH THERAPIES</h3>

          {/* Middle */}
          <div className="py-8">
            <span className="flex items-center justify-center italic">
              follow us on
              <div className="ml-3 flex space-x-4">
                <a
                  href="https://www.facebook.com/Blugenix"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImFacebook className="ml-1 h-7 w-7 transform transition-colors duration-150 hover:scale-110 hover:text-blue-700" />
                </a>
                <a
                  href="https://www.instagram.com/blugenix/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoInstagram className="h-7 w-7 transform transition-colors duration-150 hover:scale-110 hover:text-blue-700" />
                </a>
              </div>
            </span>
          </div>

          {/* Bottom */}
          <div className='mb-4'>
            <span className="-mb-2 flex items-center justify-center">
              <FaRegCopyright className="mr-1 h-6 text-sm" />
              2016 Blugenix
            </span>
            <span className="text-xs text-gray-400">
              made by{' '}
              <a
                className="text-blue-400"
                href="https://risner-portfolio-app.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                g.dev/cr
              </a>
            </span>
          </div>
          <div className='absolute bottom-4 w-full left-0 right-0 max-w-5xl px-10 mx-auto'>
            <p className="text-[10px]">
              THERAPIES CANNOT BE PROVIDED UNLESS ALL REQUIRED DOCUMENTS AND LAB
              WORK ARE COMPLETED SHOWING A CLINICAL NEED. ONLY THE PRESCRIBING
              PHYSICIAN CAN DETERMINE IF YOU QUALIFY FOR TREATMENT THE CONTENT
              OF THIS WEBSITE IS PROVIDED FOR INFORMATIONAL PURPOSES ONLY AND
              SHOULD NOT BE MISCONSTRUED AS MEDICAL ADVICE.
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
