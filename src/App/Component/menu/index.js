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
                                    <img className="card-img-top" src={require(`../../../assets/image/${item.img}`)} alt="Food "  style={{height:"200px"}}/>
                                    <div className="card bg-light " key={item.id}> 
                                        <div className="card-body">
                                            <h5 className="card-title  font-weight-bold">{item.productName}</h5>
                                            <p className="card-text font-weight-light" style={{ maxHeight:"25px" }}>{item.productDescription}</p> <br /><br />
                                            <p className="card-text">${item.price} </p>
                                            <a className={item.inCart ? "btn btn-primary disabled" : "btn btn-primary"}  onClick={()=> this.props.addToCart(item)} style={{color:"white"}} >{item.inCart ? "Order in Cart"  : "Add to Cart"}</a>
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