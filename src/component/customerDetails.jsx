import React from 'react';
import axios from 'axios';

class CustomerDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    //Function which has component first time loaded
    componentDidMount() {
      this.getCustomerData(this.props.value);
    }
    //Function which has component update
    componentDidUpdate(prevProps){
        //get Customer Details only if props has changed
        if(this.props.value!== prevProps.value)
        this.getCustomerData(this.props.value);
    }

    //Function to get the Customer Data from json
     getCustomerData(id) {
       axios.get('assets/samplejson/customer' + id + '.json').then(response => {
            this.setState({customerDetails: response});
        })
    }
    render() {
        if (!this.state.customerDetails)
        return (<p> Loading data</p>)
        return (
            <div>
                <div className="customerdetails">
                <p className="pName">{this.state.customerDetails.data.name}</p>
                <p>Name: {this.state.customerDetails.data.name}</p>
                <p>Email: {this.state.customerDetails.data.email}</p>
                <p>Phone: {this.state.customerDetails.data.phone}</p>
                <p>City: {this.state.customerDetails.data.city}</p>
                <p>State: {this.state.customerDetails.data.state}</p>
                <p>Country: {this.state.customerDetails.data.country}</p>
                <p>Organization: {this.state.customerDetails.data.organization}</p>
                <p>Job Profile: {this.state.customerDetails.data.jobProfile}</p>
                <p>Additional Info: {this.state.customerDetails.data.additionalInfo}</p>
                </div>
            </div>
        )
    }
}
export default CustomerDetails;
