import { useState } from 'react'

import './App.css'
import Addform from './addform'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
  <Addform/>
 </div>
  )
}

export default App
