import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddProduct from './addproduct'
import Product from './product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <AddProduct/>
 <Product/>
    </>
  )
}

export default App
