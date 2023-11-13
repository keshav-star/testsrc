import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  let images = [
    {
      image:"./src/assets/cat.png"
    },
    {
      image:"./src/assets/puppy.jpg"
    },
  ]

  return (
    <>
      <div className="images">
        {images.map((item)=>{
          return <img src={item.image} alt="" />
        })}
      </div>
    </>
  )
}

export default App
