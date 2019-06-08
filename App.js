import React from "react";
import * as Font from 'expo-font';
import { DrawerNavigator } from "react-navigation";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import DrawerContent from "./Components/DrawerContent";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
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

    Login: {
      screen: LoginScreen
    },
    SignUp: {
      screen: SignUpScreen
    },
    Home: {
      screen: HomeScreen
      // navigationOptions: {
      //   tabBarLabel: "Settings"
      // }
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: "SignUp",
    contentComponent: props => <DrawerContent {...props} />
  }
);



