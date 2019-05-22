import React, { Component } from 'react';
import { FlatList } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";

import { Root, Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, ListItem, List } from "native-base";

import Header01 from './components/Header01';
import Footer01 from './components/Footer01';
import Accordion01 from './components/Accordion01';
import ActionSheet01 from './components/ActionSheet01';
import Badge01 from './components/Badge01';
import Button01 from './components/Button01';
import Card01 from './components/Card01';
import CheckBox01 from './components/CheckBox01';
import Radio01 from './components/Radio01';
import FAB01 from './components/FAB01';
import Layout01 from './components/Layout01';
import Layout02 from './components/Layout02';
import Layout03 from './components/Layout03';
import Layout04 from './components/Layout04';
import Layout05 from './components/Layout05';
import List01 from './components/List01';
import Searchbar01 from './components/Searchbar01';
import Segment01 from './components/Segment01';
import Spinner01 from './components/Spinner01';
import Tab01 from './components/Tab01';
import Tab02 from './components/Tab02';
import Toast01 from './components/Toast01';
import Typography01 from './components/Typography01';
import Form01 from './components/Form01';

const screens = ["Header01", "Footer01", "Accordion01", "ActionSheet01", "Badge01", "Button01", "Card01", "CheckBox01", "Radio01", "FAB01", 
  "Layout01", "Layout02", "Layout03", "Layout04", "Layout05", 
  "List01", "Searchbar01", "Segment01", "Spinner01", "Tab01", "Tab02", "Toast01", "Typography01", "Form01"
];

class MainScreen extends React.Component {
  state = {
    screens,
    selected: "Simon Mignolet"
  };

  render() {
    console.log('render1', screens);
    return (
      <Container>
        <Content>
          <FlatList
            data={this.state.screens}
            extraData={this.state}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item, index}) => {
              return(
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(item)}
              >
                <Left>
                  <Text>{item}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            )
            }}
          />
        </Content>
      </Container>
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
    Footer01: {
      screen: Footer01,
    },
    Accordion01: {
      screen: Accordion01,
    },
    ActionSheet01: {
      screen: ActionSheet01,
    },
    Badge01: {
      screen: Badge01,
    },
    Button01: {
      screen: Button01,
    },
    Card01: {
      screen: Card01,
    },
    CheckBox01: {
      screen: CheckBox01,
    },
    Radio01: {
      screen: Radio01,
    },
    FAB01: {
      screen: FAB01,
    },
    Layout01: {
      screen: Layout01,
    },
    Layout02: {
      screen: Layout02,
    },
    Layout03: {
      screen: Layout03,
    },
    Layout04: {
      screen: Layout04,
    },
    Layout05: {
      screen: Layout05,
    },
    List01: {
      screen: List01,
    },
    Searchbar01: {
      screen: Searchbar01,
    },
    Segment01: {
      screen: Segment01,
    },
    Spinner01: {
      screen: Spinner01
    },
    Tab01: {
      screen: Tab01
    },
    Tab02: {
      screen: Tab02
    },
    Toast01: {
      screen: Toast01
    },
    Typography01: {
      screen: Typography01
    },
    Form01: {
      screen: Form01
    }
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