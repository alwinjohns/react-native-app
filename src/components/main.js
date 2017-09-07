import React from 'react'
import { Alert, StyleSheet, Text, View, FlatList } from 'react-native'
import { actors } from './../reducers/fakeActorsList'
import { getMoviesFromApiAsync } from './../reducers/actors'

const ListItem = ({item, navigate}) => <Text style={styles.item} onPress={() => navigate('Chat', { actor: item.key })}>{item.key}</Text>

export default class Main extends React.Component {
    render() {
      const { navigate } = this.props
      return (
        <View style={styles.container}>
            <FlatList
              data={actors}
              renderItem={({item}) => <ListItem item={item} navigate={navigate}/>}
            />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 22
  },
  header: {
      paddingTop: 20,
      paddingBottom: 20,
      fontSize: 25,
  },
  item: {
      padding: 10,
      fontSize: 18,
      height: 44,
  },
})
