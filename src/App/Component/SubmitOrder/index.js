
import React, { Component } from 'react';
import { Button, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag';
import { Modal } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";




const mutationone = gql`

mutation ($name: String ,$surname: String , $address: String
  $city: String, $state: String, $zip: String ,$order_name_quantity_price:[QuserOrderNamePrice!]
  $currency: String $totalprice: Int ){

  SendOrder(
  input:{
    name:$name,surname: $surname, address: $address
    
    city: $city, state: $state, zip: $zip ,order_name_quantity_price: $order_name_quantity_price
    currency: $currency totalprice: $totalprice}) {success}
}


`

class OrderSubmit extends Component {
    // name,surname,address,city,state,zip,order_name_quantity_price,totalprice
    state = {
        isOpen: false,
        name: "",
        surname: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        order_name_quantity_price: [],
        currency: "",
        totalprice: 0,
        success:"",
        GetError:false
    }

    // This For the Modle handle
    toggle = () => this.setState({ isOpen: !this.state.isOpen });

    // Handle Client Input
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            totalprice: this.props.total,
            currency: this.props.currency
        })
    }
    render() {
        let { name, surname, address, city, state, zip, currency, totalprice } = this.state

        return (
            <>
                <Button color="primary" onClick={this.toggle} style={{ margin: "12px" }}>Send Order</Button>
                <Modal show={this.state.isOpen} onHide={() => this.setState({ isOpen: !this.state.isOpen })}>
                    <Modal.Header>
                        <Modal.Title>Order Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Mutation mutation={mutationone} onCompleted={data=> this.setState({success: data.SendOrder.success})}>
                            {
                                 (submitfunc, {loading, error }) => (<Form onSubmit={
                                   (e) => {
                                     console.log(this.props.data)
                                       e.preventDefault()
                                    submitfunc({ variables: { name, surname, address, city, state, zip, order_name_quantity_price:this.props.data, currency, totalprice } }).catch(Ero=>{
                                        // Error Handling if the back end or the request have been blocked or other type of network Errors
                                        Ero.message.length > 0 ? this.setState({GetError : true}) : this.setState({GetError : false})
                                    })
                                   }
                                }>
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="exampleEmail">Name</Label>
                                                <Input type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange} required />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="examplePassword">Surname</Label>
                                                <Input type="text" name="surname" id="surname" placeholder="Surname" onChange={this.handleChange} required />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label for="exampleAddress">Address</Label>
                                        <Input type="text" name="address" id="address" placeholder="1234 Main St" onChange={this.handleChange} required />
                                    </FormGroup>
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="exampleCity">City</Label>
                                                <Input type="text" name="city" id="city" onChange={this.handleChange} required />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="exampleState">State</Label>
                                                <Input type="text" name="state" id="state" onChange={this.handleChange} required />
                                            </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                            <FormGroup>
                                                <Label for="exampleZip">Zip</Label>
                                                <Input type="text" name="zip" id="zip" onChange={this.handleChange} required />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Button className="badge-info" >Submit The Order</Button>
                                </Form>
                                )}
                        </Mutation>
                    </Modal.Body>
                         { this.state.success && !this.state.GetError ? <div className="alert alert-success" role="alert"> {this.state.success} </div> : <div></div> }
                         { this.state.GetError ? <div className="alert alert-danger" role="alert"> Order did not successfully send. Please try again! </div> : <div></div> }
                         { this.state.success && !this.state.GetError ? setTimeout(()=> window.location.reload(false),2000) : <div></div> }
                </Modal>
            </>
        )
    }
}


export default OrderSubmit;
