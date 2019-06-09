import React, { Component } from "react";
import * as firebase from "firebase";
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
  H1
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import { fbKey, androidID, iosID } from "../assets/constants";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    //use this word inside function
    this.signInWithGoogleAsync = this.signInWithGoogleAsync.bind(this);
    this.logInUser = this.logInUser.bind(this);
    this.loginWithFacebook = this.loginWithFacebook.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log("Signed Out");
        },
        function (error) {
          console.error("Sign Out Error", error);
        }
      );
  }

 

  logInUser = (email, password) => {
    const { navigate } = this.props.navigation;
    try {
      if (this.state.password.length < 6) {
        alert("Password is too short");
        return;
      }
      this.props.requestLogin();
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
      // .then(user => this.props.loginSuccess(user));
      navigate("Home");
    } catch (error) {
      this.props.loginFail(error.toString());
    }
  };

  async signInWithGoogleAsync() {
    try {
      const { navigate } = this.props.navigation;
      const result = await Expo.Google.logInAsync({
        androidClientId: androidID,
        iosClientId: iosID,
        scopes: ["profile", "email"]
      });
      console.log(result);

      if (result.type === "success") {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken
        );
        console.log(credential);
        firebase
          .auth()
          .signInAndRetrieveDataWithCredential(credential)
          // .then(user => {
          //   this.props.loginSuccess(user);
          // })
          .catch(error => {
            this.props.loginFail(error.toString());
          });
        navigate("Home");
      } else {
        Alert.alert("Login not sucessfull, try again.");
      }
      // if (this.props.user.auth === true) {
      //   () => navigate("Home");
      // }
    } catch (e) {
      console.log(e.toString());
    }
  }
  async loginWithFacebook() {
    //code
  }

  render() {

    return (
      <Container style={styles.container}>
        <NavBar
          title="Login"
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
                </Form>
              </Col>
            </Row>
            <Row
              style={{
                padding: 60
              }}
            >
              <Col size={1} />
              <Col size={2}>
                <Button
                  rounded
                  onPress={() =>
                    this.logInUser(this.state.email, this.state.password)
                  }
                >
                  <Text>Login</Text>
                  <Icon ios="ios-send" android="md-send" />
                </Button>
              </Col>
              <Col size={1} />
            </Row>

            <Row size={1}>
              <Col size={1} />
              <Col size={2}>
                <H1 style={{ padding: 2, fontSize: 15, textAlign: "center" }}>Log in with</H1>
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

export default LoginScreen;
