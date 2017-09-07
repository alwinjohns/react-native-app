import React, { PureComponent } from 'react'
import { Animated, View, Text, StyleSheet, Image } from 'react-native'
import { TabViewAnimated, TabBar } from 'react-native-tab-view'
import SimplePage from './SimplePage'
import Synonyms from './Synonyms'
import Wiki from './wiki'
import Role from './Roles'
import type { NavigationState } from 'react-native-tab-view/types';

type Route = {
  key: string,
  title: string,
  icon: string,
}

type State = NavigationState<Route>

export default class TopBarIconExample extends PureComponent<void, *, State> {
  static title = 'Bottom bar with indicator'
  static appbarElevation = 4

  state: State = {
    index: 0,
    routes: [
      { key: '1', title: 'Synonyms', icon: 'icon1' },
      { key: '2', title: 'Wiki', icon: 'icon2' },
      { key: '3', title: 'Roles', icon: 'icon3' },
    ],
  }

  _handleIndexChange = index => {
    this.setState({
      index,
    })
  }

  _renderIndicator = props => {
    const { width, position } = props

    const translateX = Animated.multiply(position, width)

    return (
      <Animated.View
        style={[styles.container, { width, transform: [{ translateX }] }]}
      >
        <View style={styles.indicator} />
      </Animated.View>
    )
  }

  _renderIcon = ({ route }) => {

    // return <Ionicons name={route.icon} size={24} style={styles.icon} />;
    // console.log('route: ', './../images/' + route.icon + '.jpg')
    return <Image source={require('./../images/icon1.jpg')} />
  }

  _renderBadge = ({ route }) => {
    if (route.key === '2') {
      return (
        <View style={styles.badge}>
          <Text style={styles.count}>2</Text>
        </View>
      );
    }
    return null
  }

  _renderFooter = props => {
    return (
      <TabBar
        {...props}
        renderIcon={this._renderIcon}
        renderBadge={this._renderBadge}
        renderIndicator={this._renderIndicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
      />
    )
  }

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return (
          <Synonyms actor={this.props.navigation.state.params.actor} />
        )
      case '2':
        return (
          <Wiki actor={this.props.navigation.state.params.actor} />
        )
      case '3':
        return (
          <Role actor={this.props.navigation.state.params.actor} />
        )
      default:
        return null
    }
  }

  render() {
    // console.log('log: ', this.props.navigation.state.params.actor)
    return (
        <TabViewAnimated
          style={[styles.container, this.props.style]}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderFooter={this._renderFooter}
          onIndexChange={this._handleIndexChange}
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#222',
  },
  tab: {
    padding: 0,
  },
  icon: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  indicator: {
    flex: 1,
    backgroundColor: '#0084ff',
    margin: 4,
    borderRadius: 2,
  },
  badge: {
    marginTop: 4,
    marginRight: 32,
    backgroundColor: '#f44336',
    height: 24,
    width: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  count: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -2,
  },
})
