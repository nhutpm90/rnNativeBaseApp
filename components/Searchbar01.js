import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Icon,
  Item,
  Input,
  Content,
  Text
} from "native-base";

class NHSearchbar extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search" />
            <Icon active name="people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content padder>
          <Button
            block
            onPress={() => this.props.navigation.goBack()}
          >
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default NHSearchbar;
