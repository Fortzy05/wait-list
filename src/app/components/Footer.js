import React from "react";
import Image from "next/legacy/image";


import footerLogo from "../../assets/footerLogo.svg";
import facebookIcon from "../../assets/baselinefacebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import youtubeIcon from "../../assets/youtube.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer bg-[#1086A0] text-gray-100">
      <div className="w-full p-6 lg:max-w-[1200px] lg:mx-auto md:p-5">
        <div className="justify-center items-center flex flex-col md:flex-row md:space-x-24">
          <div className="footerlogo flex flex-row md:w-[30%] gap-6 mb-5 md:flex-col md:space-y-3">
            <Link href="/">
              <Image
                src={footerLogo}
                alt="footerlogo"
                className="w-10 h-10 md:w-24 md:h-24 mr-2"
              />
            </Link>
            <p className="font-light text-[12px] md:text-[14px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies,
            </p>
          </div>

          <div className="Footeritems  list-none text-[12px] w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:text-[20px] md:text-[14px] font-normal md:w-[70%] leading-[28px] mt-3 mb-4">
            <div className="space-y-3">
              <div className="space-y-3">
                <Link href="/contact-us">Reach Us</Link>
              </div>
              <li>About Us</li>
              <div className="space-y-3">
                <Link className="space-y-3 " href="/contact-us">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="space-y-3 list-none">
              <div className="space-y-3">
                <Link href="/programs">Programs</Link>
              </div>
              <div className="space-y-3">
                <Link href="/programs">Arts</Link>
              </div>
              <div className="space-y-3">
                <Link href="/programs">SDGs</Link>
              </div>
              <div className="space-y-3">
                <Link href="/programs">Entrepreneurship</Link>
              </div>
            </div>

            <div className="space-y-3 list-none">
              <Link href="/programs">Resources</Link>
              <div className="space-y-3">
                <Link href="/blog">Blog</Link>
              </div>
              <div className="space-y-3">
                <Link href="/programs">Privacy Policy</Link>
              </div>
              <div className="space-y-3">
                <Link href="/news">News</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 border-400 mt-4 md:mt-10">
          <div className="footersocial flex flex-row mt-4 gap-4 md:gap-10 justify-center items-center">
            <Image src={facebookIcon} alt="facebook" className="w-6 ml-2" />
            <Image src={instagramIcon} alt="instagram" className="w-6 ml-2" />
            <Image src={twitterIcon} alt="twitter" className="w-6 ml-2" />
            <Image src={youtubeIcon} alt="youtube" className="w-6 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
