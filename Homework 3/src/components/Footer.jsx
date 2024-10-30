const Footer = () => {
  return (
    <div className="bg-gray-900 rounded-t-lg border-t border-gray-700">
      <h1 className="text-center font-semibold text-xl py-4 text-white">
        &copy; 2024 All rights reserved
      </h1>
      <div className="flex justify-center space-x-4 pb-4">
        <a
          href="#"
          className="text-cyan-400 hover:text-cyan-500 transition duration-200"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-cyan-400 hover:text-cyan-500 transition duration-200"
        >
          Terms of Service
        </a>
      </div>
    </div>
  );
};

export default Footer;
