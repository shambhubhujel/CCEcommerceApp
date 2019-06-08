import React, { Component } from "react";
import { Container, Content, Icon } from "native-base";
import styles from "../assets/styling";
import SearchBar from "../Components/SearchBar";

export default class HomeScreen extends Component {
  static NavigationOptions = {
    drawerIcon: (
      <Icon style={{ height: 24, width: 24 }} type="FontAwesome" name="home" />
    )
  };

  render() {
    return (
      <Container style={styles.container}>
        <SearchBar
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        <Content>
          {/* <Grid>
            <Col style={{ backgroundColor: "#635DB7", height: 200 }} />
            <Col style={{ backgroundColor: "#00CE9F", height: 200 }} />
          </Grid> */}
        </Content>
      </Container>
    );
  }
}
