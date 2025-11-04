import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import About from "./pages/About"

function Home() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome to MyShop 🛍️
      </h1>
    </main>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
