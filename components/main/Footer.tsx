import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[200]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px]">Connect With Me</div>

            {/* <div className="flex flex-row items-center my-[15px] cursor-pointer z-[200]"> */}
              <Link className="flex flex-row items-center my-[15px] cursor-pointer z-[200]" href="https://www.linkedin.com/in/nishant-singh-rai/" target="_blank">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </Link>
            {/* </div> */}

            {/* <div className="flex flex-row items-center my-[10px] cursor-pointer z-[200]"> */}
              <Link className="flex flex-row items-center my-[15px] cursor-pointer z-[200]" href="https://github.com/nishantr19" target="_blank">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </Link>
            {/* </div> */}
          </div>
        </div>

        <div className="mt-[10px] mb-[20px] text-[15px] text-center">
          &copy; Thanks For Visiting
        </div>
      </div>
    </div>
  );
};

export default Footer;
