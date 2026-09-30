import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6">
      <Link to="/" className="hover:text-blue-400">Home</Link>
      <Link to="/planner" className="hover:text-blue-400">Planner</Link>
    </nav>
  )
}

export default Navbar