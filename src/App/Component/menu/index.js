import React, { Component } from 'react';  


class OrderMenu extends Component {
 constructor(props){
     super(props)
     this.state = {
         orderCount:0,
         orderCard: [ ]
     } 

 } 
    render() {
        return (
            <div> 
              <div className='' style={{ padding:"25px"}}>
                    <div className="row" >
                    {
                         this.props.data.map(item =>{
                            return (
                                <div className="col-sm-3" style={{ padding:"25px"}} key={item.id}>
                                    <img className="card-img-top" src={require('./1.jpg')} alt="Food " />
                                    <div className="card" key={item.id}> 
                                        <div className="card-body">
                                            <h5 className="card-title">{item.productName}</h5>
                                            <p className="card-text" style={{ maxHeight:"25px" }}>{item.productDescription}</p> <br />
                                            <p className="card-text">${item.price} </p>
                                            <a href="#" className={item.inCart ? "btn btn-primary disabled" : "btn btn-primary"}  onClick={()=> this.props.addToCart(item)} >{item.inCart ? "Order in Cart"  : "Add to Cart"}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    } 
                    </div>
              </div>
            </div>
        )
    }
}

export default OrderMenu;