
// in  this exercise we uses the objects in our App component
import React from 'react'

const Header = (props) => {
  return (
    <div>
      <p>Name of course is: {props.course} </p>
    </div>
  )
}


const Part = (props) => {
  return (
    <div>
      <p>Content of part: {props.p} and number of Exercises in this part: {props.ex} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part p = {props.p1} ex = {props.ex1} />
      <Part p = {props.p2} ex = {props.ex2} />
      <Part p = {props.p3} ex = {props.ex3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises: {props.total} </p>
    </div>
  )
}

/* here inside the App component we define three objects 
part1, part2 and part3*/
const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content p1 = {part1.name} ex1 = {part1.exercises} p2 = {part2.name} ex2 = {part2.exercises} p3 = {part3.name} ex3 = {part3.exercises} />
      <Total total = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App

