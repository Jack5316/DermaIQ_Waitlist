export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DermaIQ</h3>
            <p className="text-gray-400">
              Your AI-powered dermatology assistant, helping you take better care of your skin.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              Catherine: <a href="mailto:sejjc91@ucl.ac.uk" className="hover:text-white transition-colors">sejjc91@ucl.ac.uk</a><br />
              Jack: <a href="mailto:ucabjt7@ucl.ac.uk" className="hover:text-white transition-colors">ucabjt7@ucl.ac.uk</a><br />
              Follow us on social media
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DermaIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 