import React from "react";
import Axios from "axios";

class CreateStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        "firstName": "",
        "lastName": "",
        "emailID": "",
        "phNumber": "",
        "address": {
          "address1": "",
          "address2": "",
          "city": "",
          "state": "",
          "zipCode": 0
        },
        "country": "USA",
    };
    this.updateState = this.updateState.bind(this);
    this.updateStateAddress = this.updateStateAddress.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
  }

  updateState(event){
    const input = event.target;
    const name = input.name;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({ [name]: value });
  }

  updateStateAddress(event){
    const input = event.target;
    const name = input.name;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({ address : { ...this.state.address , [name]: value } });
  }

  submitFormHandler(event){
        event.preventDefault();
        Axios.post('https://blooming-ravine-45730.herokuapp.com/api/student/create',this.state).then(result=>{
            console.log(result.data);
        }); 
  }

  componentDidMount(){

  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <form onSubmit={this.submitFormHandler}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name = "firstName"
                  value = {this.state.firstName}
                  onChange = {this.updateState} 
                  aria-describedby="firstName"
                  placeholder="Enter first Name"
                />
              </div>
            </div>

            <div className="col-6">
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value = {this.state.lastName}
                  onChange = {this.updateState} 
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="emailID">Email Id</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailID"
                  name="emailID"
                  value = {this.state.emailID}
                  onChange = {this.updateState} 
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="phNumber">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phNumber"
                  name="phNumber"
                  value = {this.state.phNumber}
                  onChange = {this.updateState} 
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="address1">Address1</label>
                <input
                  type="text"
                  className="form-control"
                  id="address1"
                  name="address1"
                  value = {this.state.address.address1}
                  onChange = {this.updateStateAddress} 
                  placeholder="Enter Address1"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="address2">Address2</label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  name="address2"
                  value = {this.state.address.address2}
                  onChange = {this.updateStateAddress} 
                  placeholder="Enter Address2"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  value = {this.state.address.state}
                  onChange = {this.updateStateAddress} 
                  placeholder="Enter State"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value = {this.state.address.city}
                  onChange = {this.updateStateAddress} 
                  placeholder="Enter City"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="zipCode"
                  name="zipCode"
                  value = {this.state.address.zipCode}
                  onChange = {this.updateStateAddress} 
                  placeholder="Enter ZipCode"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateStudent;
