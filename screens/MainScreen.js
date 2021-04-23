import React, {useState, useEffect} from 'react';
import {View, Text, Image, Dimensions, ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Card from '../components/Card';
import {getBooks} from '../functions/Requests';
import {addBook, deleteBook} from '../state/Action';
import showMessage from '../functions/showMessage';

const {width, height} = Dimensions.get('window');

const MainScreen = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    getBooks(page)
      .then((res)=>{
        res.map((card) => props.add(card));
        if (!isLoaded){
          setIsLoaded(true);
        }
        setRefreshing(false);
      });  
  },[page]) 

  const renderRefreshing = () => {
    return (
      <View style={styles.refreshingcontainer}>
        <Text style={styles.refreshingText}>Updating</Text>
        <ActivityIndicator color='rgb(252, 84, 83)' style={styles.indicator}/>
      </View>
    )
  }

  if (!isLoaded){
    return (
      <View style={styles.loadingContainer}>
        <Image 
          source={require('../assets/icon.png')}
          style={styles.appIcon}
          width={width * 0.4}
          height={width * 0.4}
        />
        <Text style={styles.loadingText}>Fetching Data...</Text>
        <ActivityIndicator color='rgb(252, 84, 83)' size={50} style={styles.indicator}/>
      </View>
    )
  }

  return (    
    <View style={styles.container}>         
      <FlatList
          data={props.books}
          numColumns={2}
          keyExtractor={(item) => item['@id']}
          renderItem={({item, index})=>{  
            let id = item['@id'];   
                       
            if (id){              
              return <Card 
                serial={index + 1}
                title={item['title']}
                author={item['author']}
                content={item['description']}
                date={item['publicationDate']}
                reviews={item['reviews']}
                id={id}
                onDelete={() => {
                  props.delete(id);
                  showMessage('Book has been deleted');
                }}
              />
            }      
          }}
          columnWrapperStyle={styles.cardList}
          onEndReachedThreshold={1}
          onEndReached={()=>{
            setPage(page+1);
            setRefreshing(true);
          }}
        />
      {refreshing && renderRefreshing()}
    </View>    
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'gainsboro',
    flex:1,
    alignItems:'center'
  },
  headerText:{
    color:'white',
    fontSize:20,
  },
  cardList:{
    width:width, 
    padding: width * 0.03,
    justifyContent:'space-between',
  },
  indicator:{    
    alignSelf:'center'
  },
  refreshingcontainer:{
    width:width,
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    position:'absolute',
    alignSelf:'center',
    paddingVertical:15,
    bottom:0,
    backgroundColor:'gray',
    opacity:0.9
  },
  refreshingText:{
    marginRight:20,
    fontSize:18,
    color:'gainsboro',
  },
  loadingContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  appIcon:{
    width: width * 0.4,
    height: width * 0.4,
  },
  loadingText:{
    fontSize:18,
    marginBottom:15,
    opacity: 0.56,
  }
})

const mapStatetoProps = (state) => {
  //console.log(state)
  return {
    books: state.bookReducer.bookList,
  }
} 

const mapDispatchtoProps = (dispatch) => {
  return {
    add: (book) => dispatch(addBook(book)),
    delete: (id) => dispatch(deleteBook(id))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (MainScreen);