import React from 'react'
import { Circle, InnerCircle } from './styles'

export default function Quote({quotes}) {
  return (
    <Circle>
      <InnerCircle>
        <h1>"{quotes}"</h1>
      </InnerCircle>
    </Circle>

  )
}
