export default function Footer() {
  return (
    <footer className="bg-pink-200 text-green-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">DermaIQ</h3>
            <p className="text-green-700">
              Your AI-powered dermatology assistant, helping you take better care of your skin.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-green-700 hover:text-secondary">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-green-700 hover:text-secondary">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-green-700 hover:text-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
            <p className="text-green-700">
              Catherine: <a href="mailto:sejjc91@ucl.ac.uk" className="text-secondary hover:text-accent transition-colors">sejjc91@ucl.ac.uk</a><br />
              Jack: <a href="mailto:ucabjt7@ucl.ac.uk" className="text-secondary hover:text-accent transition-colors">ucabjt7@ucl.ac.uk</a><br />
            </p>
          </div>
        </div>
        <div className="border-t border-pink-300 mt-8 pt-8 text-center text-green-800">
          <p>&copy; {new Date().getFullYear()} DermaIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 