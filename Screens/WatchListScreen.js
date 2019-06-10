import React, { Component } from "react";
import { Container, Content } from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import axios from "axios";
import { mLabKey } from "../private/constants";
export default class WatchListScreen extends Component {
  // static NavigationOptions = {
  //   drawerIcon: (
  //     <Icon style={{ height: 24, width: 24 }} type="FontAwesome" name="home" />
  //   )
  // };
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  getWatchlist() {
    axios
      .get(
        `https://api.mlab.com/api/1/databases/e-sell-mobile/collections/e-sell-mobile?apiKey=${mLabKey}`
      )
      .then(response => {
        this.setState({ items: response });
        console.log("====================================");
        console.log(response);
        console.log("====================================");
      });
  }

  postItem(item) {
    axios.post(
      `https://api.mlab.com/api/1/databases/e-sell-mobile/collections/e-sell-mobile?apiKey=${mLabKey}`
    ),
      {
        item: item
      };
  }

  deleteItem() {
    axios.delete(
      `https://api.mlab.com/api/1/databases/e-sell-mobile/collections/e-sell-mobile?apiKey=${mLabKey}`
    );
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
