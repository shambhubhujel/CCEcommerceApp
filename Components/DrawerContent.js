import React, { Component } from "react";
import { Image } from "react-native";
import {
  Body,
  Container,
  Text,
  Header,
  Content,
  List,
  ListItem,
  Right,
  Left,
  Icon,
  Button
} from "native-base";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class DrawerContent extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container style={{ paddingTop: 24 }}>
        <Header span style={{ paddingTop: 15 }}>
          <Image
            source={require("../assets/Images/logo.png")}
            style={{
              height: 100,
              width: 150,
            }}
          />
        </Header>
        <Content>
          <Grid>
            <Row size={1}>
              <Button full info onPress={() => navigation.navigate("SignUp")}>
                <Icon type="Entypo" name="add-user" />
                <Text>Sign Up</Text>
              </Button>
              <Button full primary onPress={() => navigation.navigate("Login")}>
                <Text>Login</Text>
                <Icon ios="ios-send" android="md-send" />
              </Button>
            </Row>


          </Grid>
        </Content>
      </Container>
    );
  }
}

// export default DrawerContent;
