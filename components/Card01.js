import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right
} from "native-base";

import {View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Basic Card</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Card style={styles.mb}>
            <CardItem>
              <Body>
                <Text>This is just a basic card with some text to boot.</Text>
                <Text>Like it? Keep Scrolling...</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
      },
      text: {
        alignSelf: "center",
        marginBottom: 7
      },
      mb: {
        marginBottom: 15
      }
});
