const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">MyAgency</h1>
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#features" className="hover:text-green-600">Features</a>
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
