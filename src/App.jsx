const Header = ({name}) => {

  return (
    <h1>{name}</h1>
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

const Content = ({course}) => {

  const exercises = course.parts.map(part => part.exercises)

  const total = exercises.reduce((sum, n) => sum + n, 0)

  return (
    <>
      <ul style={{paddingInlineStart: 0}}>
      {course.parts.map((part) => <li key={part.id} style={{listStyleType: "none"}}>
          <p>{part.name} {part.exercises}</p>
        </li>)}
      </ul>
      <p><strong>Total of {total} exercises</strong></p>
    </>
  )

}

const Course = ({course}) => {
  console.log("Hello Course!")
  // console.log("<Course>: ", course)
  return (
    <div>
      <Header name={course.name} key={course.id}/>
      <Content course={course} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course) => {
        console.log(course.name)
        return <Course course={course}/>
      })}
    </div>
  )
}

export default App