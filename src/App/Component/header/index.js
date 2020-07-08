import React from 'react';
import FoodSelectedList from "../FoodList"

class OrderHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-primary  ">
          <a href='/' className="navbar-brand">The New Pizza Order</a>
          <div style={{ padding: "15px" }}>
            <FoodSelectedList  removeCart={this.props.removeCart}  count={this.props.quantity} data={this.props.data}  TotalPriceToPay={this.props.TotalPriceToPay} state={this.props.state} /> 
          </div>
        </nav>
      </header>
    )
  }
}

export default OrderHeader;