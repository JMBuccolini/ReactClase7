import './App.css'
import { useEffect, useState } from 'react'
import axios from "axios";
import Quote from './components/Quote';
function App() {

  const initialQuote = {
    quote: 'Cita',
    author: 'Autor'
  }

  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(false);

  async function updateQuote() {
    setLoading(true)
    const url = "https://api.breakingbadquotes.xyz/v1/quotes";
    const res = await axios(url);
    console.log(res)
    const [newQuote] = await res.data;

    const { quote: quote, author } = newQuote;

    setQuote({
      quote,
      author
    })
    setLoading(false)
  }

  useEffect(() => {
    updateQuote()
  }, [])


  return (
    <div style={{ display: "flex", flexDirection: "column", width: 300 }}>
      <img src="https://logospng.org/download/breaking-bad/logo-breaking-bad-2048.png"
        alt="breaking-bad" width="300"
      />
      <button onClick={() => updateQuote()} >Obtener otra cita</button>
      {loading?<h2>Loading...</h2> : <Quote quote={quote} /> }
      
    </div>
  )
}

export default App
