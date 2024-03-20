import { useState } from 'react'
import './App.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import LoginPage from './screens/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <LoginPage />
       </div>
    </>
  )
}

export default App
