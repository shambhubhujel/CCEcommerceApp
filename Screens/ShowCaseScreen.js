import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Button,
  Icon,
  Text,
  Content,
  Card,
  CardItem,
  Body,
  Left,
  Right,
} from "native-base";

import styles from "../assets/styling";
import HeaderBack from "../Components/HeaderBack";
import SpinBubble from "../Components/Loaders/SpinBubble";


class ShowCaseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { searchData: {}, isReady: false };

    //use this word inside function
    this.fetchItem = this.fetchItem.bind(this);
  }

  //gets item based on serial #y
  async fetchItem() {
    //code
  }

  //post item to cart - db
  postItem() {
    //code
  }


  componentDidMount() {
    //get params as props from home screen search
    const { params } = this.props.navigation.state;

    const query = params ? params.serialNumber : null;
    if (query == null) {
      console.log("query is empty");
    } else {
      this.fetchItem();
    }
  }
  render() {
    const item = this.state.searchData;
    const { isReady } = this.state;

    return (
      !isReady ? <SpinBubble /> :
        <Container style={styles.container}>
          <HeaderBack
            title="Showcase"
            goBack={() => this.props.navigation.goBack()}
          />

          <Content>
            <Card style={{ flex: 0 }}>
              <CardItem header>
                <Text>{item.name}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{item.manufacturer}</Text>
                  <Text note>{item.modelNumber}</Text>
                </Body>
                <Right>
                  <Text>{item.color}</Text>
                  <Text note>{item.salePrice}</Text>
                </Right>
              </CardItem>

              <CardItem cardBody bordered>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 400, width: null, flex: 1 }}
                  resizeMode="contain"
                />
              </CardItem>

              <CardItem bordered>
                <Text>{item.longDescription}</Text>
              </CardItem>

              <CardItem>
                <Left>
                  <Button
                    transparent
                    textStyle={{ color: "#87838B" }}
                  // onPress={() =>
                  //   this.props.navigation.navigate("WatchList", {
                  //     serialNumber: item.sku,
                  //     item: item
                  //   })
                  // }
                  >
                    <Icon name="ios-add-circle" type="Ionicons" />
                    <Text>Watch</Text>
                  </Button>
                </Left>
                <Body />
                <Right>
                  <Button
                    transparent
                    textStyle={{ color: "#87838B" }}
                    // onPress={() =>
                    //   this.props.navigation.navigate("ShoppingCart", {
                    //     serialNumber: item.sku,
                    //     item: item
                    //   })
                    // }
                    onPress={() => {
                      this.postItem(
                        
                      );
                    }}
                  >
                    <Icon name="cart-arrow-down" type="FontAwesome" />
                    <Text>Buy</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
          </Content>
        </Container>

    );
  }
}

export default ShowCaseScreen;
