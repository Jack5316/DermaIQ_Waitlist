export default function Header() {
  return (
    <header className="bg-pink-100 shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-heading">DermaIQ</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#features" className="text-primary hover:text-secondary font-medium">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary hover:text-secondary font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary hover:text-secondary font-medium">
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