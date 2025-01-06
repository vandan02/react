import { useState } from 'react'

import './App.css'
import Addform from './addform'
import Showdata from './Showdata'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
  <Addform/>
  <Showdata/>
 </div>
  )
}

export default App
