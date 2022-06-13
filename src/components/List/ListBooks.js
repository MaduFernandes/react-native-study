import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import {
  useNavigation
} from '@react-navigation/core'


import {
  Ionicons
} from '@expo/vector-icons';
import axios from 'axios'


const ListBooks = ({ data }) => {
  const navigation = useNavigation();

  const handleRemoveBook = async (id) => {
    await axios.delete(`http://localhost:3000/livros/${id}`)
    console.log('Livro removido com sucesso')
  }

  const handleNavigateToForm = () => {
    navigation.navigate('Forms', { data: data })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={handleNavigateToForm}>
        <Text>{data.item.name}</Text>
         <Text>{data.item.author}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actions} onPress={() => handleRemoveBook(data.item.id)}>
        <Ionicons name="remove-circle" size={24} color="red" />      
      </TouchableOpacity>
    </View>
  )
}

export default ListBooks

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        backgroundColor: '#FFF',
        paddingStart: 18,
        paddingEnd: 18,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content: {

    },
    actions: {

    }
})