import React, { Component } from "react";
import { Container, Content } from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";

export default class WatchListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  getWatchlist() {
    //code
  }

  postItem() {
    //code
  }


  deleteItem() {
    //code

  }
  componentDidMount() { }
  render() {
    return (
      <Container style={styles.container}>
        <NavBar
          title="My Watchlist"
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        <Content>
          {/* <Grid>
          <Row>
            <Col>
            
            </Col>
          </Row>
          </Grid> */}
        </Content>
      </Container>
    );
  }
}
