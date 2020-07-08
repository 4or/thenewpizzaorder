import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import OrderSubmit from '../SubmitOrder'

import "bootstrap/dist/css/bootstrap.min.css"; 

class FoodSelectedList extends Component {

  state = {
    modalShow: false,
    quantityPrice: 0,
    total: 0,
    currency: "USD"
  }

  TotalCost = () => {
    let amount = 0;
    for (let i = 0; i <= this.props.data.length; i++) {

      if (this.props.data[i] !== undefined) {
        amount += this.props.data[i].price * this.props.data[i].quantityInCart
      }
    }
    return amount
  }

  SetCurrency = (event) => {
    this.setState({ currency: event.target.value })
  }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={() => this.setState({ modalShow: !this.state.modalShow })}>
          <svg width="1em" style={{ margin: "8px" }} height="1em" viewBox="0 0 16 16" className="bi bi-cart-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
          <span className="badge badge-light">{this.props.count}</span>
          <span className="sr-only"> </span>
        </button>
        <Modal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Cart Details
                    </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <table className="table table-image">
                    <thead>
                      <tr>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col"></th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    {
                      this.props.data ?
                        this.props.data.map(item => {
                          item.totalprice = item.quantityInCart * item.price
                          return <tbody key={item.id} >
                            <tr>
                              <th scope="row">${item.price}</th>
                              <td className="w-25">
                                <img src={require(`../../../assets/image/${item.img}`)} style={{ borderRadius: "25px", height: "150px" }} className="img-fluid img-thumbnail" alt="Sheep"></img>
                              </td>
                              <td>{item.productName ? item.productName : ""}</td>
                              <td>
                                <input type='number' defaultValue={item.quantityInCart ? item.quantityInCart : 0} min='1' onChange={(e) => {
                                  item.quantityInCart = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 0
                                  this.setState({
                                    total: item.totalprice
                                  })
                                }} />
                              </td>
                              <th scope="col"></th>
                              <td>$ {item.totalprice}</td>
                            </tr>
                          </tbody>

                        }) : ""
                    }
                  </table>
                </div>
              </div>
            </div>
            {
              this.props.data.length > 0 ?
                <div className="card">
                  <div className="card-body">
                    Total Price : {this.state.currency === "USD" || this.state.currency === "" ? `$ ${this.TotalCost() * 1}` : `€ ${parseFloat(this.TotalCost() * 0.88).toFixed(2)}`} <br />
                    With Cost Delivery : {this.state.currency === "USD" ? `$ ${this.TotalCost() * 1 + 3}` : `€ ${parseFloat(this.TotalCost() * 0.88 + 3).toFixed()}`} &nbsp;
                     <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-truck" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5v7h-1v-7a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5v1A1.5 1.5 0 0 1 0 10.5v-7zM4.5 11h6v1h-6v-1z" />
                      <path fillRule="evenodd" d="M11 5h2.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5h-1v-1h1a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4.5h-1V5zm-8 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                      <path fillRule="evenodd" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    </svg>
                    <div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="UsdRadio" value="USD" onClick={this.SetCurrency} onChange={this.SetCurrency} />
                        <label className="form-check-label" htmlFor="UsdRadio">$ USD</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="EurRadio" value="EUR" onClick={this.SetCurrency} onChange={this.SetCurrency} />
                        <label className="form-check-label" htmlFor="EurRadio">€ EUR</label>
                      </div>
                    </div>
                  </div>
                </div>
                : <div></div>
              }
            {this.props.data.length > 0 ? <OrderSubmit removeCart={this.props.removeCart} currency={this.state.currency} data={this.props.data} total={this.state.currency === "USD" ? this.TotalCost() * 1 + 3 : Number(parseFloat(this.TotalCost() * 0.88 + 3).toFixed())} /> : <div></div>}
          </Modal.Body>
        </Modal>
      </div>


    );
  }
}


export default FoodSelectedList;
