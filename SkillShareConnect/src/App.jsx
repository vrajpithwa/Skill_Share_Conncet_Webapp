import { useState } from 'react'
import './App.css'
import AddUserForm from './components/Adduser';
import MainScreen from './screens/MainScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <AddUserForm /> */}
<MainScreen></MainScreen>
       </div>
    </>
  )
}

export default App
