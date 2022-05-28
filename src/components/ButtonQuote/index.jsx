import React from 'react'
import { Button } from './styles'

export default function ButtonQuote({action}) {
  return (
      <Button onClick={action}>Generate a new quote</Button>
  )
}
