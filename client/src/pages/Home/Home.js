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
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  // saves article to database
  saveArticle = index => {
    API.saveArticle({
      title: this.state.articles[index].headline.main,
      blurb: this.state.articles[index].snippet,
      date: this.state.articles[index].pub_date,
      url: this.state.articles[index].web_url
    }).then(res => alert("Article saved to database!")).catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.searchArticles method to find articles
  // Then load articles from the database
  // handleFormSubmit = event => {
  //   event.preventDefault();
    
  // };
   handleForce = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1></h1>
          <p className="lead"> Geo Code API </p>
        </Jumbotron>
        <Container fluid>
          <Row>
          
            <Col size="md-6">
              
                
            <div className="container">
              <CSVReader
                cssClass="react-csv-input"
                label="Select CSV with secret Death Star statistics"
                onFileLoaded={this.handleForce}
              />
            </div>
                  
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;