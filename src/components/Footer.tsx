const Footer = () => {
  return (
    <footer
      id="footer"  // 👈 match this with href in navbar
      className="scroll-mt-24 bg-green-600 text-white py-10 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">MyAgency</h3>
          <p className="text-sm text-green-100">
            Building clean, scalable web experiences that make an impact.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm text-green-100">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-indigo-100">📧 hello@myagency.com</p>
          <p className="text-sm text-indigo-100">📍 Hyderabad, India</p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-green-100 border-t border-green-500 pt-4">
        &copy; {new Date().getFullYear()} MyAgency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
