import React, { Component } from "react";
import { Image } from "react-native";
import { starRating } from '../assets/GenerateStarRating';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import styles from "../assets/styling";
import HeaderBack from "../Components/HeaderBack";
import SpaceLoader from "../Components/Loaders/SpaceLoader";

class ResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: [],
      pageCount: 1,
      totalPages: 0,
      isReady: false
    };
    //use this word inside function
    this.fetchItem = this.fetchItem.bind(this);
    this.fetchItemsByCategory = this.fetchItemsByCategory.bind(this);
  }

  componentDidMount() {
    //get props passed from search screens
    const { params } = this.props.navigation.state;
    if (params.searchQuery) {
      this.fetchItem();
    }
    if (params.categoryQuery) {
      this.fetchItemsByCategory();
    }


  }


  //gets all items based on user query
  async fetchItem() {
    //code
  }
  //gets all items based on category
  async fetchItemsByCategory() {
    //code
  }



  //if 0 then return free shipping
  shipping(i) {
    if (i == 0) {
      return <Text>Free shipping</Text>;
    } else {
      return <Text note>Shipping : {i}</Text>;
    }
  }
  //if the item is available return green icon
  checkItem(status) {
    if (status == true) {
      return (
        <Icon
          style={{ color: "green", fontSize: 15 }}
          active
          name="check-circle-o"
          type="FontAwesome"
        />
      );
    } else {
      return (
        <Icon
          style={{ color: "red", fontSize: 15 }}
          active
          name="times-circle-o"
          type="FontAwesome"
        />
      );
    }
  }

  render() {
    const { isReady, searchData } = this.state;
    //get params as props from home screen search
    const { params } = this.props.navigation.state;

    const itemCards = searchData.map((item, i) => {
      return (
        <Card key={i} style={{ flex: 0 }}>
          <CardItem
            bordered
            button
            onPress={() =>
              this.props.navigation.navigate("ShowCaseScreen", {
                serialNumber: item.sku
              })
            }
          >
            <Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.manufacturer}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody bordered>
            <Image
              source={{ uri: item.image }}
              style={{ height: 250, width: null, flex: 1 }}
              resizeMode="contain"
            />
          </CardItem>

          <CardItem bordered footer>
            <Left>
              <Text> $ {item.salePrice}</Text>
            </Left>
            <Right>
              {this.shipping(item.shippingCost)}
              <Text>Save % {item.percentSavings}</Text>
            </Right>
          </CardItem>
          {/* <CardItem footer></CardItem> */}

          <CardItem>
            <Left>
              {starRating(item.customerReviewAverage)}

              {/* <Text>Orders {item.customerReviewCount}</Text> */}
            </Left>
            <Body />
            <Right>{this.checkItem(item.inStoreAvailability)}</Right>
          </CardItem>
        </Card>
      );
    });

    return (
      !isReady ? <SpaceLoader /> :
        <Container style={styles.container}>
          <HeaderBack
            title={`${params.searchQuery ? params.searchQuery : params.categoryName}`}
            goBack={() => this.props.navigation.goBack()}
          />
          <Content>{itemCards}</Content>
        </Container>
    );
  }
}

export default ResultScreen;
