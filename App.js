import React, { Component } from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';

import { createStackNavigator, createAppContainer } from "react-navigation";

import { Root } from "native-base";

import Header01 from './components/Header01';

const screens = ["Header01"];

class MainScreen extends React.Component {
  _renderButtons = (screens) => {
    return screens.map((screen, idx) => {
      return (
        <Button key={idx} title={screen} onPress={() => this.props.navigation.navigate(screen)}/>
      );
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#95a5a6" }}>
        <Text>Main</Text>
        { this._renderButtons(screens) }
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  { 
    MainScreen: {
      screen: MainScreen,
    },
    Header01: {
      screen: Header01,
    },
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  }
)

const AppContainer = createAppContainer(RootStack);

export default () =>
  <Root>
    <AppContainer />
  </Root>;