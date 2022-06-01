import React from 'react'
import Moment from 'moment';
import { Header } from './styles'

export default function DataFormat() {
  const formatDate = Moment().format('DD-MM-YYYY')

  return (
    <Header>
      <small>{formatDate}</small>
    </Header>
  )
}
