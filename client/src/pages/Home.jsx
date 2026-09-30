import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [destination, setDestination] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [travellers, setTravellers] = useState(1)
  const [budget, setBudget] = useState('')

  const navigate = useNavigate()

 const handlePlanTrip = () => {
  navigate('/planner', {
    state: { destination, startDate, endDate, travellers, budget }
  })
}

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8 gap-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-2">Craft Your Perfect Journey</h1>
        <p className="text-gray-400">Plan smarter. Travel better.</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-2xl flex flex-col gap-4">
        <div>
          <label className="block text-sm mb-1">Where do you want to go?</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Search destination..."
            className="w-full p-2 rounded bg-gray-700 text-white outline-none"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm mb-1">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm mb-1">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white outline-none"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm mb-1">Travellers</label>
            <input
              type="number"
              min="1"
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm mb-1">Budget (₹)</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="25000"
              className="w-full p-2 rounded bg-gray-700 text-white outline-none"
            />
          </div>
        </div>

        <button
          onClick={handlePlanTrip}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded mt-2"
        >
          Plan My Trip
        </button>
      </div>
    </div>
  )
}

export default Home