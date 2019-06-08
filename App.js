import React from "react";
import * as Font from 'expo-font';
import * as Expo from "expo";
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



