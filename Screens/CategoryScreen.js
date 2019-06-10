import React, { Component } from "react";
import {
  Container,
  Text,
  Content,
  Card,
  CardItem,
  Body
} from "native-base";

import NavBar from "../Components/NavBar";
import styles from "../assets/styling";
import SpinBubble from "../Components/Loaders/SpinBubble";

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryData: [],
      pageCount: 1,
      totalPages: 0,
      isReady: false,
    };

    //use this word inside function
    this.fetchCategories = this.fetchCategories.bind(this);
  }
  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    //code

  }

  render() {
    const { categoryData, isReady } = this.state;
    const categoryCards = categoryData.map((item, i) => {
      return (
        <Card key={i}>
          <CardItem
            button
            onPress={() =>
              this.props.navigation.navigate("ResultScreen", {
                categoryQuery: item.id,
                categoryName: item.name
              })
            }
          >
            <Body>
              <Text>{item.name}</Text>
            </Body>
          </CardItem>
        </Card>
      );
    });

    return (
      <Container style={styles.container}>
        <NavBar
          title="Category"
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        {!isReady ? <SpinBubble /> : <Content>{categoryCards}</Content>}
      </Container>
    );
  }
}
