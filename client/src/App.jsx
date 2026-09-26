import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [status, setStatus] = useState('Checking...')

  useEffect(() => {
    axios.get('http://localhost:3000/api/health')
      .then((res) => {
        setStatus(res.data.status)
      })
      .catch((err) => {
        setStatus('Backend not reachable')
        console.error(err)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-white">
        TripCraft 🌍
      </h1>
      <p className="text-lg text-gray-300">
        Backend status: <span className="font-semibold text-green-400">{status}</span>
      </p>
    </div>
  )
}

export default App