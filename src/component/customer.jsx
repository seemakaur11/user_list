import React from 'react';
import axios from 'axios';
import CustomerDetails from './customerDetails';

// create a function to fetch a data
class Customers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCustomer: 1
        };
    }
    //Function which has component first time loaded
    componentDidMount() {
        this.getCustomerData();
    }
    //Function to get the Customer Data from json
    getCustomerData() {
        axios.get('assets/samplejson/customerlist.json').then(response => {
            this.setState({ customerList: response })
        })
    }

    render() {
        if (!this.state.customerList)
            return (<p> Loading data</p>)
        return (
            <div>
                {this.state.customerList && this.state.customerList.data && this.state.customerList.data.map(customer => {
                    return (<div className="border" key={customer.id}>
                        <p className="hName">{customer.name}</p>
                        <p className="p">{customer.email}</p>
                        <p className="p">{customer.phone}</p>
                        <button className="button" onClick={() => this.setState({ selectedCustomer: customer.id })}>Click to views details</button>
                    </div>)
                })}
                <div className="details">
                    <CustomerDetails value={this.state.selectedCustomer} />
                </div>
            </div>)
            }
        }
export default Customers;

