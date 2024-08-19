import { getData } from "./constants/db"
import { Card } from "./components"
import "./App.css"

const courses = getData()

const App = () => {
  return (
    <>
      <h1 className="heading">Sammi kurslari
        {/* Cart  */}
        <div className="cards__container">
          {courses.map((course) => (
            <Card key={course.id} course={course} />
          ))}
        </div>
      </h1>
    </>
  )
}

export default App