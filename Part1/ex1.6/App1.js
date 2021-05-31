/* Implementing the web application for collecting customer
feedback good, bad and neutral*/
import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  // when any button is clicked for feedback then value of that 
  //button is increased by one
  const increaseGood = () => {
    console.log('Good Button Clicked')
    setGood(good+1)
  }

  const increaseNeutral = () => {
    console.log('Neutral Button Clicked')
    setNeutral(neutral+1)
  }

  const increaseBad = () => {
    console.log('Bad Button Clicked')
    setBad(bad+1)
  }

  return (
    <div>
      <h1> Give Feedback </h1>
      <button onClick={increaseGood}>Good</button> 
      <button onClick={increaseNeutral}>Neutral</button> 
      <button onClick={increaseBad}>Bad</button> <br/>
      <h1> Statistics </h1>
      Good: {good} <br/>
      Neutral: {neutral} <br/>
      Bad: {bad} <br/>
    </div>
  )
}

export default App

