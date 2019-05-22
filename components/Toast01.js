import React, { Component } from "react";

import { StyleSheet } from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Toast
} from "native-base";

class BasicToast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Basic Toast</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay"
              })
            }
          >
            <Text>Default Toast</Text>
          </Button>
          <Button
            success
            style={styles.mb15}
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                type: "success"
              })
            }
          >
            <Text>Success Toast</Text>
          </Button>
          <Button
            warning
            style={styles.mb15}
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                type: "warning"
              })
            }
          >
            <Text>Warning Toast</Text>
          </Button>
          <Button
            danger
            style={styles.mb15}
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                type: "danger"
              })
            }
          >
            <Text>Danger Toast</Text>
          </Button>
          <Button
            style={styles.mb15}
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                position: "top",
                duration: 3000,
                textStyle: { color: "yellow" },
                buttonTextStyle: { color: "#008000" },
                buttonStyle: { backgroundColor: "#5cb85c" }
              })}
          >
            <Text>Top Toast (3s)</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mb15: {
    marginTop: 10
  }
});

export default BasicToast;
