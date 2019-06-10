import React from 'react';
import { Col, Row } from "react-native-easy-grid";
import {
  Text,
  Button,
  Icon,
  H1,
} from "native-base";

const SocialMediaButtons = (props) => {
  return (
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
  );
};

export default SocialMediaButtons;