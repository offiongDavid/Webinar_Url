import { useState } from "react"
import logo from "../assets/Speakers/logos.png"


const AdminLogin = ({ setPassword }) => {

  const [input, setInput] = useState("")

  const handleLogin = () => {
    setPassword(input)
  }

  return (

    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-10">

        
        <img
          src={logo}
          alt="Webinar Logo"
          className="w-28 mx-auto mb-6"
        />

        
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
          Admin Portal
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Login to access the dashboard
        </p>

        
        <input
          type="password"
          placeholder="Enter admin password"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={(e) => setInput(e.target.value)}
        />

        
        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg mt-6 font-semibold transition"
        >
          Login
        </button>

      </div>

    </div>

  )
}

export default AdminLogin