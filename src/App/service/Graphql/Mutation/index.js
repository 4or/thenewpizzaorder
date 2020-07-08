import gql from 'graphql-tag'; 




export const SendOrderMutation = gql`

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