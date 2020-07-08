

import React  from 'react';
import OrderHeader from "../header/index"
import OrderMenu from "../menu/index"
import { PizremoveDuplicates  } from '../../service/index'

import {product} from '../../dumpdata/index'




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
    removeCart  = () => {
      this.setState({itemsInCart: [],quantity:0}) 
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
            <OrderHeader removeCart={this.removeCart} quantity={this.state.quantity}  data={this.state.itemsInCart} TotalPriceToPay={this.state.total}/>
            <OrderMenu data={product} addToCart={this.addToCart}  AmountToPay={this.state.amountPay}/>
        </main>
      )
    }
}


export default OrderFoodApp;