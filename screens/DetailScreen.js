import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MaterialCommunityIcons, Entypo} from '@expo/vector-icons';
import {Tooltip} from 'react-native-elements';

import HeaderButton from '../components/HeaderButton';
import Review from '../components/Review';
import { ScrollView } from 'react-native-gesture-handler';

const DetailScreen = (props) => { 
  const params = props.route.params;
  const {id, title, author, date, content, reviews} = params;

  const parseDate = (date) => {
    return date.substring(0,10);
  }

  const onEditBook = () => {    
    props.navigation.navigate('edit', {id, title, author, content, date, reviews});
  }

  useEffect(()=>{
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButton title='Edit' page='edit' onPress={onEditBook}/>
      )
    })
  },[])  

  const renderReviews = () => {
    if (Array.isArray(reviews)){
      return reviews.map((item,index) => {
        return <Review serial={++index} content={item['body']} key={item['@id']}/>;
      })
    }
  }

  return (    
    <ScrollView style={styles.scroll}> 
    <View style={styles.container}>      
      <Text style={styles.title}>{title}</Text>
      <View style={styles.itemHolder}>
        <Tooltip popover={<Text>Author</Text>}>
          <MaterialCommunityIcons name='face-profile' style={styles.icon}/>
        </Tooltip>        
        <Text style={styles.author}>{author}</Text>
      </View>
      <View style={styles.itemHolder}>
        <Tooltip popover={<Text>Publication Date</Text>}>
          <Entypo name='calendar' style={styles.icon}/>
        </Tooltip>
        <Text style={styles.date}>{parseDate(date)}</Text>
      </View>         
      <Text style={styles.content}>{content}</Text>

      {Array.isArray(reviews) 
        && reviews.length > 0 
        &&　<Text style={styles.reviewTitle}>Reviews:</Text>}
      {renderReviews()}      
    </View>   
    </ScrollView>   
  )
}

const styles = StyleSheet.create({
  scroll:{
    flex:1,
    backgroundColor:'gainsboro',
  },
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'gainsboro',
    paddingHorizontal:15
  },  
  title:{
    width:'100%',
    marginTop:15,
    marginBottom:10,
    fontSize:20,
    fontWeight:'bold',
  },
  author:{
    width:'100%',
    fontSize: 16
  },
  date:{
    width:'100%',
    fontSize: 16
  },
  content:{
    marginTop:20,
    marginBottom:20,
    width:'100%',
    fontSize: 18,
    lineHeight:26
  },
  itemHolder:{
    marginVertical:10,
    width:'100%',
    flexDirection:'row',
    alignItems:'center'
  },
  icon:{
    fontSize:26,
    marginRight:10
  },
  reviewTitle:{
    width:'100%',
    fontSize: 20,
    fontWeight:'bold',
  }
})

export default DetailScreen;