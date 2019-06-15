import React, { Component } from "react";

import { H3, Container, Content, Icon, Text } from "native-base";

import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import { Col, Row, Grid } from "react-native-easy-grid";
import ImageLoad from 'react-native-image-placeholder';


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
            <ImageLoad
              style={{ height: 250, width: 250, flex: 1 }}
              loadingStyle={{ size: 'large', color: 'blue' }}
              source={require("../assets/Images/logo.png")}
              resizeMode={'contain'}
            />
          </Row>
          <Row style={{ padding: 20 }}>

            <Col size={1}></Col>
            <Col size={2}>
              <Row>
                <H3>Built with </H3>
                <Icon name='music' type='FontAwesome' style={{ fontSize: 19, color: "blue" }} />
                <H3> & </H3>
                <Icon name='coffee' type='FontAwesome' style={{ fontSize: 19, color: "green" }} />
              </Row>
              <Row style={{ padding: 20 }}>
                <Text>Shambhu bhujel</Text>
              </Row>
            </Col>
            <Col size={1}></Col>




          </Row>
        </Grid>

      </Content>


    </Container>
  );
}
}

export default AboutScreen;

