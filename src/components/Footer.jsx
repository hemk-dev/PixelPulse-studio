import React from "react";
import Button from "./Button";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="m-8 pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 py-16 gap-8 ">
        <div className="lg:col-span-5 col-span-1 flex flex-col gap-8">
          <div className="md:max-w-[75%] max-w-full">
            <h2 className="uppercase lg:leading-9 md:leading-normal sm:leading-2 tracking-tighter font-semibold text-4xl">
              We would love to hear from you. Let's work — together
            </h2>
          </div>

          <div>
            <Button content="Contact Us" />
          </div>
        </div>
        {/* <div className="lg:col-span-3 "></div> */}
        <div className="lg:col-span-4 col-span-1 uppercase flex flex-col gap-8">
          <div>
            <h2 className="tracking-tighter text-gray-500 lg:text-base text-xs">Business enquiries</h2>
            <p className="lg:text-base text-xs text-[#1c1c1c]">business@pixelpulse.com</p>
            <p className="lg:text-base text-xs text-[#1c1c1c]">+27 22 511 2343</p>
          </div>
          <div className="w-[60%]">
            <h2 className="tracking-tighter text-gray-500 lg:text-base text-xs">Manchester</h2>
            <p className="lg:text-base text-xs text-[#1c1c1c]">
              133A Kyre Lane Manchester SE21 4BQ United Kingdom
            </p>
          </div>
        </div>
        <div className="lg:col-span-3 col-span-1 uppercase flex flex-col gap-8">
          <div className="">
            <h2 className="tracking-tighter text-gray-500 lg:text-base text-xs">Open Positions</h2>
            <p className="lg:text-base text-xs text-[#1c1c1c]">career@pixelpulse.com</p>
            <p className="lg:text-base text-xs text-[#1c1c1c]">+27 22 111 3333</p>
          </div>
          <div className="w-[75%]">
            <h2 className="tracking-tighter text-gray-500 lg:text-base text-xs">Boston</h2>
            <p className="lg:text-base text-xs text-[#1c1c1c]">
              1109 BOYLSTON ST APT OO BOSTON MA 02215-3613 USA
            </p>
          </div>
        </div>
      </div>
      <div className="border-t-gray-300 border-t-[1px] mt-32 bottom-0 flex justify-center items-center py-1">
        <p className="flex items-center gap-1 text-center">
          <FaRegCopyright className="text-gray-500" />
          <span>PixelPulse {currentYear}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
