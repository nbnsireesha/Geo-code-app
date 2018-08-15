import React, { Component } from "react";
import Moment from "moment";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Card, CardHeader, CardBody } from "../../components/Card";
import { List, ListItem } from "../../components/List";

class Saved extends Component {
  state = {
    articles: []
  };

  // When the component mounts, load saved articles
  componentDidMount() {
    this.loadArticles();
  };

  // Loads saved articles and sets them to this.state.articles
  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>New York Times Archive - Saved Articles</h1>
          <p className="lead">Read saved articles here!</p>
        </Jumbotron>
        <Container fluid>
          <Row>
            <Col size="md-11">
              <Card>
                <CardHeader>Saved Articles</CardHeader>
                <CardBody>
                  {this.state.articles.length ? (
                    <List>
                      {this.state.articles.map(article => {
                        return (
                          <ListItem key={article._id}>
                            <a href={article.url} className="text-info">
                              <strong>{article.title}</strong>
                            </a>
                            <p>{article.blurb}</p>
                            <p className="small text-muted">{Moment(article.date).format("DD MMMM YYYY, hh:mmA")}</p>
                            <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                          </ListItem>
                        );
                      })}
                    </List>
                  ) : (
                      <h5>No Results to Display</h5>
                    )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;