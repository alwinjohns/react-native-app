import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native'
import { getActorSynonyms } from './../reducers/fakeSynonyms'

const ListItem = ({item}) =>
    <View>
      <Text
        style={styles.item}>{item.key}
      </Text>
      <Button
        style={styles.removeButton}
        title={'Remove'}
        onPress={() => {}}
        color="#841584"
      />
    </View>

export default class Synonyms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      synonymList: getActorSynonyms(this.props.navigation.state.params.actor) || [],
      text: '',
    }
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
          data={this.state.synonymList.map(e => ({key: e}))}
          renderItem={({item}) => <ListItem item={item} />}
        />
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={'Add new synonyms'}
        />
        <Button
          style={styles.addButton}
          title={'Add'}
          onPress={() => {this.setState({synonymList: [...this.state.synonymList, this.state.text]})
        }}
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
  removeButton: {
    height: 40,
    width: 250,
    marginLeft: 330,
  },
  addButton: {
    height: 40,
    width: 250,
    marginBottom: 130,
  },
})
