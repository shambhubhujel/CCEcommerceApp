import React from "react";
import * as Expo from "expo";

//packages
import firebase from "firebase";
import { Dimensions } from "react-native";
import ParentProvider from "./redux/ParentProvider";
import store from './redux/store';
import { loginSuccess } from './redux/reducers/userModule';
import { firebaseKey } from "./private/constants";
export const { width, height } = Dimensions.get("screen");

//init firebase
const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "react-nativedemo-902aa.firebaseapp.com",
  databaseURL: "https://react-nativedemo-902aa.firebaseio.com",
  projectId: "react-nativedemo-902aa",
  storageBucket: "react-nativedemo-902aa.appspot.com"
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appReady: false,
    };
  }

  componentWillMount() {
    this.loadFonts();
    firebase.initializeApp(firebaseConfig);
    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        store.dispatch(loginSuccess(user));
        console.log("User is authentificated!");
      } else {
        console.log("Guest online");
      }
    });
    console.log("App started succesfully");
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ appReady: true });
  }

  render() {
    if (!this.state.appReady) {
      return <Expo.AppLoading />;
    }
    return <ParentProvider />
  }
}

