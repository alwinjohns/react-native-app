import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native'
import { actorSynonyms } from './../reducers/fakeSynonyms'

const ListItem = ({item}) => <Text style={styles.item}>{item.key}</Text>

export default class Synonyms extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' };
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Synonyms for ${navigation.state.params.actor}`,
  })
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{`Actor : ${params.actor}`}</Text>
        <FlatList
          data={actorSynonyms}
          renderItem={({item}) => <ListItem item={item} />}
        />
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={'Add new synonyms'}
        />
        <Button
          title={'Add'}
          onPress={() => {}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  inputText: {
    height: 40,
    width: 250,
    margin: 30,
    borderColor: 'gray',
    borderWidth: 1,
  },
})
