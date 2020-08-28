import React from "react"
import products from './productList' 

function Products(props){
    return (
        <div className="product_item">
          <h2 className="productName"> Item: {props.name} </h2>
          <p className="description">Desription: {props.description} </p> 
          <p className="price">Price: {props.price} </p>
        </div> 
    )
}
export default Products