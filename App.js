import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Main from './src/components/main'
import Synonyms from './src/components/Synonyms'
import TopBarIconExample from './src/components/BottomBarIconText'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'New Political Actors',
  };
  render() {
    const { navigate } = this.props.navigation
    return(
      <View style={styles.container}>
        <Main navigate={navigate}/>
      </View>)
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: TopBarIconExample },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2feff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
