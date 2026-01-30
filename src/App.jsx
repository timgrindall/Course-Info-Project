const Header = (props) => {
  const course = props.course

  return (
    <h1>{course}</h1>
  )
}

const Part = (props) => {
  const title = props.title
  const exercises = props.exercises

  return (
    <>
      <p>{title} {exercises}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)

  const parts = props.course.parts

  return (
    <>
      <Part title={parts[0].name} exercises={parts[0].exercises}/>
      <Part title={parts[1].name} exercises={parts[1].exercises}/>
      <Part title={parts[2].name} exercises={parts[2].exercises}/>
    < />
  )
}

const Total = (props) => {
  const exercises = props.exercises

  return (
    <>
      <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const exercises = [course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises]

  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total exercises={exercises}/>
    </div>
  )
}

export default App