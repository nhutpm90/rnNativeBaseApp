import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
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
            <Title>Default</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button primary disabled style={styles.mb15}>
                <Text>disabled</Text>
            </Button>
            <Button info bordered style={styles.mb15}>
                <Text>bordered</Text>
            </Button>
            <Button primary rounded style={styles.mb15}>
                <Text>rounded</Text>
            </Button>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button small danger style={styles.mb15}>
                <Text>small</Text>
            </Button>
            <Button large dark style={styles.mb15}>
                <Text>large</Text> 
            </Button>
            <Button transparent success style={styles.mb15}>
                <Text>transparent</Text>
            </Button>
          </View>

          <Button block success style={styles.mb15}>
            <Text>block</Text>
          </Button>
          <Button full warning style={styles.mb15}>
            <Text>full</Text>
          </Button>
          
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button iconLeft light style={styles.mb15}>
              <Icon active name="arrow-back" />
              <Text>Back</Text>
            </Button>
            <Button light iconRight style={styles.mb15}>
              <Text>Next</Text>
              <Icon active name="arrow-forward" />
            </Button>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button iconLeft style={styles.mb15}>
              <Icon active name="home" />
              <Text>Home</Text>
            </Button>
            <Button iconLeft success style={styles.mb15}>
              <Icon active name="people" />
              <Text>People</Text>
            </Button>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button iconLeft danger style={styles.mb15}>
              <Icon active name="close" />
              <Text>Trash</Text>
            </Button>
            <Button iconLeft warning style={styles.mb15}>
              <Icon active name="warning" />
              <Text>Dont</Text>
            </Button>
            <Button iconLeft info style={styles.mb15}>
              <Icon name="alert" />
              <Text>Help</Text>
            </Button>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button iconLeft dark style={styles.mb15}>
              <Icon active name="cog" />
              <Text>Settings</Text>
            </Button>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button danger transparent style={{ marginBottom: 20, marginLeft: 10 }} >
              <Icon active name="trash" />
            </Button>
            <Button warning bordered style={{ marginBottom: 20, marginLeft: 10 }} >
              <Icon active name="warning" />
            </Button>
            <Button info style={{ marginBottom: 20, marginLeft: 10 }}>
              <Icon name="alert" />
            </Button>
            <Button iconLeft transparent style={styles.mb15}>
              <Icon active name="beer" />
              <Text>Pub</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
      },
      buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
        justifyContent: "center",
        marginTop: 10
      },
      mb15: {
        marginBottom: 20
      },
      mt15: {
        marginTop: 15
      },
      mb20: {
        marginBottom: 20
      },
      iconButton: {
        color: "#007aff"
      },
      margin: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#FFF"
      },
      mf: {
        flexGrow: 1,
        alignSelf: "center",
        alignItems: "center"
      }
});