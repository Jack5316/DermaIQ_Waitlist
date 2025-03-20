export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">DermaIQ</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#features" className="text-gray-600 hover:text-gray-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
} 