import "./card.css"

const Card = ({ course }) => {
  return (
    <div className="card">
      <span className="card__badge">1</span>

      <div className="image__container">
        <img src={course.Image} alt={course.title} width={"100%"} height={"230px"} />
      </div>

      <div className="card__body">
        <h5 className="card__title">{course.title}</h5>
        <div className="card__price">
          {course.price.toLocaleString("en-US", {
            style: 'currency',
            currency: 'USD'
          })}
        </div>
      </div>

      <div className="hr"></div>

      <div className="btn__container">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  )
}

export default Card