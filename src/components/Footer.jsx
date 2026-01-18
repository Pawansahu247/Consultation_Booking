const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Anubhav <span className="text-blue-500">Chakraborty</span>
            </h3>
            <p className="text-slate-400 text-sm">
              University consulting focused on academic excellence industry alignment
              and placement strategy development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-500">
              Quick Links
            </h4>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-500">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/anubhav-chakraborty-6052b81b/"
                className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-all text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/marwari_college_placement_cell?igsh=MTg0czcwdzRjeXF4OQ=="
                className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-pink-600 transition-all text-sm"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © 2026 Anubhav Chakraborty · University Consulting · All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;
