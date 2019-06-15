import React, { Component } from "react";
import { Alert } from "react-native";
import { connect } from 'react-redux';
import Expo from 'expo';
import firebase from "firebase";
import { requestLogin, loginSuccess, loginFail } from '../redux/reducers/userModule';
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
import { fbKey, androidID, iosID } from "../private/constants";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import SocialMediaButtons from "../Components/SocialMediaButtons";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user: {},
      loggedIn: false
    };
    //use this word inside function
    this.signInWithGoogleAsync = this.signInWithGoogleAsync.bind(this);
    this.loginWithFacebook = this.loginWithFacebook.bind(this);
    this.signOut = this.signOut.bind(this);
    this.logInUser = this.logInUser.bind(this);
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
    try {
      if (this.state.password.length < 6) {
        alert("Password is too short");
        return;
      }

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          this.setState({ user, loggedIn: true });
          // console.log(user);
        });
      console.log("Logged in with email");
    } catch (error) {
      console.log(error.toString());
    }
  };

  async signInWithGoogleAsync() {
    this.props.requestLogin();
    try {
      const { navigate } = this.props.navigation;
      const result = await Expo.Google.logInAsync({
        androidClientId: androidID,
        iosClientId: iosID,
        scopes: ["profile", "email"]
      });
      //console.log(result);

      if (result.type === "success") {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken
        );
        //console.log(credential);
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
    this.props.requestLogin();

    const { navigate } = this.props.navigation;
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      fbKey,
      { permissions: ["public_profile"] }
    );

    if (type == "success") {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        // .then(user => this.props.loginSuccess(user))
        .catch(error => {
          this.props.loginFail(error);
        });
      navigate("Home");
    }
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
                      value={this.state.email}
                    />
                  </Item>

                  <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={password => this.setState({ password })}
                      secureTextEntry
                      value={this.state.password}
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
            <SocialMediaButtons facebook={() => this.loginWithFacebook()} google={() => this.signInWithGoogleAsync()} />
          </Grid>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, { requestLogin, loginSuccess, loginFail })(LoginScreen);