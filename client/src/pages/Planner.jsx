import { useLocation } from 'react-router-dom'

function Planner() {
  const location = useLocation()
  const tripData = location.state

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Trip Planner</h1>

      {tripData ? (
        <div className="bg-gray-800 p-6 rounded-lg max-w-2xl flex flex-col gap-2">
          <p><span className="text-gray-400">Destination:</span> {tripData.destination}</p>
          <p><span className="text-gray-400">Start Date:</span> {tripData.startDate}</p>
          <p><span className="text-gray-400">End Date:</span> {tripData.endDate}</p>
          <p><span className="text-gray-400">Travellers:</span> {tripData.travellers}</p>
          <p><span className="text-gray-400">Budget:</span> ₹{tripData.budget}</p>
        </div>
      ) : (
        <p className="text-gray-400">No trip details yet — go back to Home and fill in your trip.</p>
      )}
    </div>
  )
}

export default Planner