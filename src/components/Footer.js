const Footer = () => {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center bg-gray-200 justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 px-32 text-center md:justify-between">
      <p className="font-normal text-blue-gray-800">&copy; 2023 dopaminSz</p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <p className="font-normal text-blue-gray-800 cursor-pointer transition-colors hover:text-blue-500 focus:text-blue-500">
            About Us
          </p>
        </li>
        <li>
          <p className="font-normal text-blue-gray-800 cursor-pointer transition-colors hover:text-blue-500 focus:text-blue-500">
            License
          </p>
        </li>
        <li>
          <p className="font-normal text-blue-gray-800 cursor-pointer transition-colors hover:text-blue-500 focus:text-blue-500">
            Contribute
          </p>
        </li>
        <li>
          <p className="font-normal text-blue-gray-800 cursor-pointer transition-colors hover:text-blue-500 focus:text-blue-500">
            Contact Us
          </p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
