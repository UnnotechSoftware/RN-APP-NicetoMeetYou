import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import { format } from "date-fns";

import HeaderButton from '../components/HeaderButton';
import generateISBN from '../functions/ISBN';
import {editBookRequest} from '../functions/Requests';
import {editBook} from '../state/Action';
import showMessage from '../functions/showMessage';

const EditScreen = (props) => {
  const navigation = useNavigation();
  const {params} = props.route;
  const {id, title, author, date, content, reviews} = params;
  const [book, setBook] = useState({
    'title':title,
    'author':author,
    'date':date,
    'description':content,
  })  

  const onSubmit = async() => {
    let payload = {
      '@id': id,
      title: book.title || 'Empty Title',
      author: book.author || 'Unnamed Author',
      publicationDate: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      description: book.description || 'Empty Description',
      isbn: generateISBN(),
      reviews: reviews,
    }    

    // sending request    
    let result = await editBookRequest(id, payload);
    showMessage(result);

    // editing card
    props.edit(id, payload);
    
    navigation.navigate('main');
  }

  useEffect(()=>{
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButton title='Submit' onPress={onSubmit}/>
      )
    })
  },[book]) 

  return (
    <View style={styles.container}>
      <TextInput 
        autoFocus
        value={book.title} 
        style={styles.input}
        placeholder='Title'
        numberOfLines={2}
        multiline
        onChangeText={(inputText) => setBook({...book,'title':inputText})}
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
        multiline
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
    textAlignVertical:'top'
  }
});

const mapStatetoProps = (state) => {
  return {
    books: state.bookReducer.bookList,
  }
} 

const mapDispatchtoProps = (dispatch) => {
  return {
    edit: (id, book) => dispatch(editBook(id, book))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(EditScreen);