import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {format} from "date-fns";

import HeaderButton from '../components/HeaderButton';
import { addBookRequest } from '../functions/Requests';
import {addBook} from '../state/Action';
import generateISBN from '../functions/ISBN';
import showMessage from '../functions/showMessage';

const IncrementScreen = (props) => {
  const navigation = useNavigation()
  const [book, setBook] = useState({
    'title':'',
    'author':'',
    'date':'',
    'description':''
  })  

  const onSubmit = async() => {
    let id = Math.random().toString();

    let payload = {
      '@id': id,
      title: book.title || 'Empty Title',
      author: book.author || 'Unnamed Author',
      publicationDate: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      description: book.description || 'Empty Description',
      isbn: generateISBN(),
      reviews: [],
    }    
    
    // sending request
    let result = await addBookRequest(id, payload);
    showMessage(result);

    // adding card
    props.add(payload);

    navigation.navigate('main');
  }

  useEffect(()=>{
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButton title='Save' onPress={onSubmit}/>
      )
    })
  },[book])  

  return (
    <View style={styles.container}>      
      <TextInput 
        value={book.title} 
        style={styles.input}
        placeholder='Title'
        onChangeText={(inputText) => setBook({...book,'title':inputText})}
        numberOfLines={2}
        multiline
      />
      <TextInput 
        value={book.author} 
        style={styles.input}
        placeholder='Author'
        onChangeText={(inputText) => setBook({...book,'author':inputText})}
      />
      <TextInput 
        value={book.description} 
        style={{...styles.input,flex:1}}
        placeholder='Please input description here'
        onChangeText={(inputText) => setBook({...book,'description':inputText})}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'gainsboro',
    paddingHorizontal:10,
    paddingBottom:40
  },
  input:{    
    width:'100%',
    marginVertical:10,
    backgroundColor:'white',
    borderRadius:5,
    fontSize:20,
    paddingHorizontal:10,
    paddingVertical:5,
    textAlignVertical:'top',
  },
});

const mapStatetoProps = (state) => {
  //console.log(state)
  return {
    books: state.bookReducer.bookList,
  }
} 

const mapDispatchtoProps = (dispatch) => {
  return {
    add: (book) => dispatch(addBook(book))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(IncrementScreen);