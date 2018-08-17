import React, { Component } from "react";
import Moment from "moment";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Card, CardHeader, CardBody } from "../../components/Card";
import { List, ListBtn, ListItem } from "../../components/List";
import { Input, Label, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import CSVReader from "react-csv-reader";

class Home extends Component {
  // Setting component's initial state
  constructor(props) {
    super(props);
    this.state = {
      add: 'bala',
      addresses: []
    };
    console.log(this);
    this.handleForce = this.handleForce.bind(this);
  }
  // When the form is submitted, use the API.searchArticles method to find articles
  // Then load articles from the database
  // handleFormSubmit = event => {
  //   event.preventDefault();
    
  // };
  handleForce(data){
    for (var i = 1; i < data.length; i++) {
      for (var j = 0; j < data.length; j++) {
        if (data[i][j]){
          // console.log(data[i][j]);
          API.deleteAllAddress()
            .then(res => {

            })
            .catch(err => console.log("error in catch handler:", err));
          API.searchAddress(data[i][j])
            .then(res =>{

                const address = {
                  formatted_address: res.data.results[0].formatted_address,
                  lat: res.data.results[0].geometry.location.lat,
                  lng: res.data.results[0].geometry.location.lng
                }
                // const addressesArray = this.state.addresses.slice();
                // addressesArray.push(address);
                // this.setState({
                //   addresses: addressesArray
                // })
                this.saveAddressInDb(address);  
            })
            .catch(err => console.log("error in catch handleForce:", err));
        }
      }
    }
  };
  // save addresses in the database
  saveAddressInDb  =  (addressInfo) => {
    console.log(addressInfo);
    API.saveAddressInDb({
      formatted_address: addressInfo.formatted_address,
      lat: addressInfo.lat,
      lng: addressInfo.lng
    })
    

  }

  // load saved addresses from DB 
  loadAddress = () => {
    API.getAddress()
      .then(res => {
        console.log("--res--",res);
        this.setState({
            addresses: res.data
        }) 
        console.log("---in loadAddress method----",this.state.addresses);
      })
      .catch(err => console.log(err));

  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1></h1>
          <p className="lead"> Geo Code API </p>
        </Jumbotron>
        <Container fluid>
          <Row>
          
            <Col size="col-md-6">
            <div className="container">
              <CSVReader
                cssClass="react-csv-input"
                label="Select CSV with secret Death Star statistics"
                onFileLoaded={this.handleForce}
              />
            
              <button type = "submit"
                onClick={this.loadAddress}
              >
              Show Table
              </button>

            </div>
                  
            </Col>
          </Row>


          <Row>
            <Col size="col-md-10">
                  {this.state.addresses.length ? (
                    <List>
                      {this.state.addresses.map((address, index) => {
                        return (
                          <ListItem key={index}>
                            <p>
                              <strong>{address.formatted_address}</strong>
                            </p>
                            <p>
                              <strong>{address.lat}</strong>
                            </p>
                            <p>
                              <strong>{address.lng}</strong>
                            </p>
                            
                          </ListItem>
                        );
                      })}
                    </List>
                  ) : (
                    <div>
                      <p></p>
                      <h5>No Results to Display</h5>
                    </div>
                    )}
            </Col>
          </Row>


        </Container>
      </div>
    );
  }
}

export default Home;