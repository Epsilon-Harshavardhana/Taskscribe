import { useState } from 'react'
import './App.css'
import NavigationStack from './pages/NavigationStack'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <NavigationStack />
     </BrowserRouter>
    </>
  )
}

export default App
