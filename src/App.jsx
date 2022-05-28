import React, {useState} from 'react'
import Quote from './components/Quote'
import styled from "styled-components";
import ButtonQuote from './components/ButtonQuote';
import { Container } from './styles/style';

export function App() {
  const [quote, setQuote] = useState('Click here to generate a new quote')
  const url = ('https://api.adviceslip.com/advice')

  const generateNewQuote = async () => {
    await fetch(url)
    .then(response => response.json())
    .then(data => setQuote(data.slip.advice))
  }

  return (
    <Container>
      <Quote quotes={quote}/>
      <ButtonQuote action={generateNewQuote}/>
    </Container>
  )
}

