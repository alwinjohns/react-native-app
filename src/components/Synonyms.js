import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TextInput, KeyboardAvoidingView } from 'react-native'
import { getActorSynonyms } from './../reducers/fakeSynonyms'

const ListItem = ({item, remove}) =>
    <View>
      <Text
        style={styles.item}>{item.key}
      </Text>
      <Button
        style={styles.removeButton}
        title={'Remove'}
        onPress={() => {remove(item.key)}}
        color="#841584"
      />
    </View>

export default class Synonyms extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      synonymList: getActorSynonyms(this.props.actor) || [],
      text: '',
    }
    this.removeSynonym = this.removeSynonym.bind(this)
    this.addSynonym = this.addSynonym.bind(this)
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Add synonyms for ${this.props.actor}`,
  })

  removeSynonym(name) {
    const index = this.state.synonymList.findIndex((e) => e === name)
    this.setState({synonymList: [...this.state.synonymList.slice(0, index), ...this.state.synonymList.slice(index + 1)]})
  }
  addSynonym() {
    this.state.text !== '' && this.setState({synonymList: [...this.state.synonymList, this.state.text]})
    this.state.text = ''
  }
  render() {
    const { actor } = this.props
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.header}>{`Add synonyms for ${actor}`}</Text>
        <FlatList
          data={this.state.synonymList.map(e => ({key: e}))}
          renderItem={({item}) => <ListItem item={item} remove={this.removeSynonym}/>}
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
          onPress={this.addSynonym}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0dbd9',
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
