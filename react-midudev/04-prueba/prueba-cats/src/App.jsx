
import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

function App() {
  const [fact, setFacth] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFacth(fact)
      })
  }, [])

  useEffect(() => { 
    if (!fact) return

    const firstWord = fact.split(' ')[0]
        const size = 50
        const color = 'white'
        const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=${size}&color=${color}`


        
        fetch(CAT_ENDPOINT_IMAGE_URL)
          .then(res => res.json)
          setImageUrl(CAT_ENDPOINT_IMAGE_URL)
          
  }, [fact])

  return (
    <>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt="Cat saying first word of fact" />}

    </>
  )
}

export default App
