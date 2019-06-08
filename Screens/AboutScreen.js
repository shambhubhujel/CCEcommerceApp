import React, { Component } from "react";
import { H1, H2, Container, Content } from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import { Col, Row, Grid } from "react-native-easy-grid";

class AboutScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <NavBar
          title="About"
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        <Content>
          <Grid>
            <Row>
              <Col>
                <H1>Made by </H1>
                <H2>Shambhu Bhujel</H2>
                <H2>2019</H2>
              </Col>
            </Row>
            <Row />
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default AboutScreen;
