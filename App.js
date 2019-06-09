import React from "react";
import * as Expo from "expo";

import { StyleSheet } from "react-native";
//packages
import * as firebase from "firebase";
import { Dimensions } from "react-native";

import { DrawerNavigator } from "react-navigation";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import CategoryScreen from "./Screens/CategoryScreen";
import { firebaseKey } from "./assets/constants";
import DrawerContent from "./Components/DrawerContent";
import WatchListScreen from "./Screens/WatchListScreen";
import AboutScreen from "./Screens/AboutScreen";
export const { width, height } = Dimensions.get("screen");

//init firebase
const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "react-nativedemo-902aa.firebaseapp.com",
  databaseURL: "https://react-nativedemo-902aa.firebaseio.com",
  projectId: "react-nativedemo-902aa",
  storageBucket: "react-nativedemo-902aa.appspot.com"
};

firebase.initializeApp(firebaseConfig);

//init db
// Get a reference to the database service
// var database = firebase.database();

// console.log("====================================");
// console.log(database);
// console.log("====================================");
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appReady: false,
      user: {}
    };

    //use this word inside function
    // this.signUpUser = this.signUpUser.bind(this);
    // this.logInUser = this.logInUser.bind(this);
    // this.loginWithFacebook = this.loginWithFacebook.bind(this);
    // this.signOut = this.signOut.bind(this);
  }

  componentWillMount() {
    this.loadFonts();
    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        this.setState({
          user
        });
        console.log("User is authentificated!");
      } else {
        console.log("Guest online");
        this.setState({
          user: {}
        });
      }
      // Do other things
    });
    console.log("App started ");
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
    return <AppDrawer />;
  }
}
const AppDrawer = DrawerNavigator(
  {

    Home: {
      screen: HomeScreen
      // navigationOptions: {
      //   tabBarLabel: "Settings"
      // }
    },
    Login: {
      screen: LoginScreen
    },
    SignUp: {
      screen: SignUpScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    Category: {
      screen: CategoryScreen
    },
    About: {
      screen: AboutScreen
    },
    WatchList: {
      screen: WatchListScreen
    }
  },
  {
    initialRouteName: "SignUp",
    contentComponent: props => <DrawerContent {...props} />
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    height: 150,
    backgroundColor: "white",
    paddingTop: 20
  },
  drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 75,
    left: "25%"
  }
});


