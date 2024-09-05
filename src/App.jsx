import { getData } from "./constants/db"
import { Card } from "./components"
import "./App.css"
import Cart from "./components/cart/cart"
import { useEffect, useState } from "react"

const courses = getData()

const telegram = window.Telegram.WebApp;

const App = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    telegram.ready()
  })

  const onAddItem = (item) => {
    const existItem = cartItems.find(c => c.id === item.id)

    if (existItem) {
      const newData = cartItems.map(c => c.id === item.id ? { ...existItem, quantity: existItem.quantity + 1 } : c)
      setCartItems(newData)
    } else {
      const newData = [...cartItems, { ...item, quantity: 1 }]
      setCartItems(newData)
    }
  }

  const onRemoveItem = (item) => {
    const existItem = cartItems.find(c => c.id === item.id)

    if (existItem.quantity === 1) {
      const newData = cartItems.filter(c => c.id !== existItem.id)
      setCartItems(newData)
    } else {
      const newDate = cartItems.map(c => c.id === existItem.id ? { ...existItem, quantity: existItem.quantity - 1 } : c)
      setCartItems(newDate)
    }
  }

  const onCheckOut = () => {
    telegram.MainButton.text = "Sotib olish :)"
    telegram.MainButton.show()
  }

  return (
    <>
      <h1 className="heading">Sammi kurslari</h1>
      <Cart cartItems={cartItems} onCheckOut={onCheckOut} />
      <div className="cards__container">
        {courses.map((course) => (
          <Card key={course.id} course={course} onAddItem={onAddItem} onRemoveItem={onRemoveItem} />
        ))}
      </div>
    </>
  )
}

export default App