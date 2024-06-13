
import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=:size&fontColor=:color`

function App() {
  const [fact, setFacth] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFacth(data.fact))

  }, [])

  return (
    <>
      <h1>App de gatitos</h1>
      <p>{fact}</p>

    </>
  )
}

export default App
