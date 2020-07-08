

import React  from 'react';
import OrderHeader from "../header/index"
import OrderMenu from "../menu/index"
import { PizremoveDuplicates  } from '../../service/index'

var  product = [
    {
        id:"1",
        productName:"Pizza Margherita",
        productDescription:"With Tomato sauce, mozzarella, and oregano.",
        quantityInCart: 0, 
        inCart: false,
        price: 10,
        totalprice:0
    },{
        id:"2",
        productName:"Pizza Marinara",
        productDescription:"With Tomato sauce, garlic and basil.",
        quantityInCart: 0, 
        inCart: false,
        price: 10,
        totalprice:0
    },{
        id:"3",
        productName:"Pizza Quattro Stagioni",
        productDescription:"With Tomato sauce, mozzarella, mushrooms, ham, artichokes, olives, and oregano.",
        quantityInCart: 0, 
        inCart: false,
        price: 10,
        totalprice:0
    },{
        id:"4",
        productName:"Pizza Crudo",
        productDescription:"With Tomato sauce, mozzarella and Parma ham.",
        quantityInCart: 0, 
        inCart: false,
        price: 10,
        totalprice:0
    },{
      id:"5",
      productName:"Pizza Margherita",
      productDescription:"With Tomato sauce, mozzarella, and oregano.",
      quantityInCart: 0, 
      inCart: false,
      price: 10,
      totalprice:0
  },{
      id:"6",
      productName:"Pizza Marinara",
      productDescription:"With Tomato sauce, garlic and basil.",
      quantityInCart: 0, 
      inCart: false,
      price: 10,
      totalprice:0
  },{
      id:"7",
      productName:"Pizza Quattro Stagioni",
      productDescription:"With Tomato sauce, mozzarella, mushrooms, ham, artichokes, olives, and oregano.",
      quantityInCart: 0, 
      inCart: false,
      price: 10,
      totalprice:0
  },{
      id:"8",
      productName:"Pizza Crudo",
      productDescription:"With Tomato sauce, mozzarella and Parma ham.",
      quantityInCart: 0, 
      inCart: false,
      price: 10,
      totalprice:0
  }
]



class OrderFoodApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        quantity: 0,
        amountPay: 0,
        itemsInCart: [],
        orderCard: [],
        total:[],
        orderCount: 0
      }
     
    }  
    addToCart = (item) => {
        let itemsInCart = this.state.itemsInCart;
        itemsInCart.push(item);  
        product.map( incarts => { if(incarts.id === item.id){ incarts.inCart = true} return true; })
        product.map( quant => quant.id === item.id ? quant.quantityInCart += 1 : 0) 
        
        
        this.setState({
          quantity: this.state.quantity +=1,
          itemsInCart:  PizremoveDuplicates(itemsInCart,"id"),
          items: product,
          amountPay: this.state.amountPay + item.price
        });    
    } 
    render() {
      return (
        <main> 
            <OrderHeader quantity={this.state.quantity}  data={this.state.itemsInCart} TotalPriceToPay={this.state.total}/>
            <OrderMenu data={product} addToCart={this.addToCart}  AmountToPay={this.state.amountPay}/>
        </main>
      )
    }
}


export default OrderFoodApp;