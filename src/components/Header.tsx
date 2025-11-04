import { ShoppingCart, UserPlus } from "lucide-react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyShop
        </Link>

        {/* Navbar */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="#" className="hover:text-blue-600 transition">Products</Link>
          <Link to="#" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
              3
            </span>
          </button>

          <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition">
            <UserPlus className="w-4 h-4" />
            Register
          </button>
        </div>
      </div>
    </header>
  )
}
