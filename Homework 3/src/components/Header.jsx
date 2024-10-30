const Header = () => {
  return (
    <header className="bg-gray-900 px-4 py-5 border-b border-gray-800 rounded-lg shadow-md hover:opacity-90 transition-opacity duration-150">
      <nav className="flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <a href="#">MyLogo</a>
        </div>
        <div className="space-x-4">
          <a
            className="border rounded py-2 px-4 text-white font-bold bg-teal-900 hover:bg-teal-500 transition duration-150"
            href="#"
          >
            Home
          </a>
          <a
            className="border rounded py-2 px-4 text-white font-bold bg-teal-900 hover:bg-teal-500 transition duration-150"
            href="#"
          >
            Blog
          </a>
          <a
            className="border rounded py-2 px-4 text-white font-bold bg-teal-900 hover:bg-teal-500 transition duration-150"
            href="#"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
