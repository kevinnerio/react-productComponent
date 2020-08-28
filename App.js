import React from "react"
import productsData from "./productList"
import Products from './Products'
import "./index.css"

function App() {
    const productsComponent = productsData.map(
        (product) => <Products key={product.id} name={product.name} price={product.price} description={product.description}/> 
    )
  return (
    <div>
      {productsComponent}
    </div>
  )
}

export default App