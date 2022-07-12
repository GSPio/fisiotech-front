import { useState, useEffect } from 'react'
import RoutesApp from './routes'
import './App.css'

function App () {
  const [pacientes, setPaciente] = useState([])

  useEffect(() => {
    function loadPacientes () {
      let getRoute = 'http://localhost:3500/pacientes'
      
      fetch(getRoute)
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
        })
    }
    loadPacientes()
  }, [])

  return (
    <>
      <RoutesApp />
    </>
  )
}

export default App
