import { getData } from "./constants/db"
import { Card } from "./components"
import "./App.css"
import Cart from "./components/cart/cart"
import { useState } from "react"

const courses = getData()

const App = () => {
  const [cartItems, setCartItems] = useState([])

  const onAddItems = (item) => {
    const existItem = cartItems.find(c => c.id === item.id)

    if (existItem) {
      const newData = cartItems.map(c => c.id === item.id ? { ...existItem, quanity: existItem.quanity + 1 } : c)
      setCartItems(newData)
    } else {
      const newData = [...cartItems, { ...item, quantity: 1 }]
      setCartItems(newData)
    }
  }

  const onRemoveItem = (item) => {
    const existItem = cartItems.find(c => c.id === item.id)

    if (existItem.quanity === 1) {
      const newData = cartItems.filter(c => c.id !== existItem.id)
      setCartItems(newData)
    } else {
      const newDate = cartItems.map(c => c.id === existItem.id ? { ...existItem, quantity: existItem.quanity - 1 } : c)
      setCartItems(newDate)
    }
  }

  return (
    <>
      <h1 className="heading">Sammi kurslari</h1>
      <Cart />
      <div className="cards__container">
        {courses.map((course) => (
          <Card key={course.id} course={course} onAddItems={onAddItems} onRemoveItem={onRemoveItem} />
        ))}
      </div>
    </>
  )
}

export default App