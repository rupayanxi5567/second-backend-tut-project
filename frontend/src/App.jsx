import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"



function App() {

const [jokes, setJokes] = useState([])

useEffect( () => {
  axios.get("/api/jokes")
  .then( (response) => {
    setJokes(response.data)
  } )
  .catch( (error) => {
    console.log(error)
  } )
} )


  return (
    <>
      <h1>chai aur jokes</h1> 
    <div style={{border: "solid 3px white", backgroundColor:"lime", color : "black" }} >
      <h2>There are total of {jokes.length} jokes </h2>
      {
        jokes.map( (joking, index) => (
          <div key={joking.id} >
            <h3> {joking.title} </h3>
            <h4> {joking.content} </h4>
          </div>
         ) )
      }
      </div>
    </>
  )
}

export default App
