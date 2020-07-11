import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import CustomerDetail from './CustomerDetail'
import axios from 'axios'

export default class Customer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    axios.get('assets/data/customerlist.json').then(response => {
      this.setState({customerList: response})
    })
  };

  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)
    return (<div className="row">
      <div className="col-md-3">
        {

          this.state.customerList.data.map(customer => <Card  key={customer.name} className="centeralign">
            <Card.Header>
              <Card.Title >{customer.name}</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>{customer.email}</p>
              <p>{customer.phone}</p>
              <Button variant="info" onClick={() => this.setState({selectedCustomer: customer.id})}>

                Click to View Details

              </Button>

            </Card.Body>
          </Card>)
        }
      </div>
      <div className="col-md-6">
        <CustomerDetail val={this.state.selectedCustomer}/>
      </div>
    </div>)
  }

}