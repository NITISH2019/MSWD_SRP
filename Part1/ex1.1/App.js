import React from 'react'
/* in this code we refactoring the code into three components
Header, Content and Total*/
//Header component starting 
const Header = (props) => {
  return (
    <div>
      <p>Name of course is: {props.course} </p>
    </div>
  )
}

//Content component starting 
const Content = (props) => {
  return (
    <div>
      <p>Name of part1 is: {props.p1} and number of Exercises in this part: {props.ex1} </p>
      <p>Name of part2 is: {props.p2} and number of Exercises in this part: {props.ex2} </p>
      <p>Name of part3 is: {props.p3} and number of Exercises in this part: {props.ex3} </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises are: {props.total} </p>
    </div>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header course={course} />
      <Content p1 = {part1} ex1 = {exercises1} p2 = {part2} ex2 = {exercises2} p3 = {part3} ex3 = {exercises3} />
      <Total total = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App