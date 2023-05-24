"use client";

import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center bg-gray-200 justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 px-32 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 dopaminSz
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
