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
    console.log("EXIST_ITEM", existItem);
    

    if (existItem) {
      const newData = cartItems.map(c => c.id === item.id ? { ...existItem, quanity: existItem.quanity + 1 } : c)
      console.log("ADD_QUANTITY_EXIST_ITEM", newData);
      setCartItems(newData)
    } else { 
      const newData = [...cartItems, {...item, quantity: 1}]
      console.log("ADD_ITEM", newData);
      setCartItems(newData)
    }
  }

  return (
    <>
      <h1 className="heading">Sammi kurslari</h1>
      <Cart />
      <div className="cards__container">
        {courses.map((course) => (
          <Card key={course.id} course={course} onAddItems={onAddItems} />
        ))}
      </div>
    </>
  )
}

export default App