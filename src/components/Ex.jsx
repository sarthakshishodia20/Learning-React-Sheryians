import React from 'react'
import Ex2 from './Ex2'
const Ex = (props) => {
  return (
    <>
      <h1>Mai Hun Example {props.name}</h1>
      <Ex2 user={props.name}/>
    </>
  )
}

export default Ex