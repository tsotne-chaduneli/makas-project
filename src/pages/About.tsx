import { motion } from "framer-motion"
import companyImg from "../assets/images/company.jpg"

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      
      {/* Left Section — Animated Company Image */}
        <motion.div
        className="flex justify-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        >
        <img
            src={companyImg}
            alt="Company building"
            className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
        />
        </motion.div>


      {/* Right Section — Company Description */}
      <div>
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About MyShop</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to <span className="font-semibold">MyShop</span> — your go-to online store for stylish and affordable products.
          We’re passionate about combining quality, innovation, and design to bring you an enjoyable shopping experience.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Our mission is simple: deliver great products that make your daily life easier and more enjoyable.
          From our humble beginnings, we’ve grown into a team dedicated to customer satisfaction and creativity.
        </p>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </section>
  )
}
