import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Form,
  Item,
  Label,
  Input,
  H1} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import styles from "../assets/styling";
import NavBar from "../Components/NavBar";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      user: {},
      loggedIn: false
    };
    //use this word inside function
    this.signUpUser = this.signUpUser.bind(this);
    this.logInUser = this.logInUser.bind(this);
    this.loginWithFacebook = this.loginWithFacebook.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signUpUser = () => {
    //code
  };

  logInUser = () => {
    //code
  };

  signOut() {
    //code
  }

  async loginWithFacebook() {
    //code
  }

  async signInWithGoogleAsync() {
    //code
  }

  render() {
    return (
      <Container style={styles.container}>
        <NavBar
          title="Sign Up"
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        <Content>
          <Grid>
            <Row
              size={2}
              style={{
                padding: 20
              }}
            >
              <Col>
                <Form>
                  <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={email => this.setState({ email })}
                    />
                  </Item>

                  <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={password => this.setState({ password })}
                    />
                  </Item>
                  <Item floatingLabel>
                    <Label>Confirm Password</Label>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={passwordConfirm =>
                        this.setState({ passwordConfirm })
                      }
                    />
                  </Item>
                </Form>
              </Col>
            </Row>
            <Row
              style={{
                padding: 20
              }}
            >
              <Col>
                <Row style={{ paddingLeft: 40 }}>
                  <Button
                    rounded
                    info
                    onPress={() => this.props.navigation.navigate("Login")}
                  >
                    <Text>Login</Text>
                    <Icon name="login" type="MaterialCommunityIcons" />
                  </Button>
                  <H1 style={{ padding: 10 }} />
                  <Button
                    rounded
                    disabled
                    onPress={() =>
                      this.signUpUser(this.state.email, this.state.password)
                    }
                  >
                    <Text>Sign Up</Text>
                    <Icon ios="ios-send" android="md-send" />
                  </Button>
                </Row>
              </Col>
            </Row>
            <Row size={1}>
              <Col size={1} />
              <Col size={2}>
                <H1 style={{ padding: 5, fontSize: 15, textAlign: "center" }}>Log in with</H1>
                <Button
                  block
                  iconLeft
                  danger
                  onPress={() => {
                    this.signInWithGoogleAsync();
                  }}
                >
                  <Icon type="FontAwesome" name="google-plus" />
                  <Text>Google</Text>
                </Button>
                <H1 style={{ padding: 1 }} />
                <Button block iconLeft onPress={() => this.loginWithFacebook()}>
                  <Icon type="FontAwesome" name="facebook-official" />
                  <Text>Facebook Login</Text>
                </Button>
              </Col>
              <Col size={1} />
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default SignUpScreen;
