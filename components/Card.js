import React from 'react';
import {View, StyleSheet, Dimensions, Text, TouchableOpacity, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Entypo, MaterialIcons} from '@expo/vector-icons';

const {width, height} = Dimensions.get('window');

const Card = (props) => {
  const navigation = useNavigation();
  const {serial, title, author, content, date, reviews, id, style} = props;

  const navigate = () => {
    navigation.navigate('detail',{title, author, content, date, reviews, id});
  }

  const parseDate = (date) => {
    return date.substring(0,10);
  }

  return(
    <TouchableOpacity style={[styles.card,style]} onPress={navigate}>
      <View style={styles.container}>
        <Text style={styles.serial}>{serial}</Text>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.content} numberOfLines={4}>{content}</Text>
        <View style={styles.dateContainer}>
          <Entypo name='calendar' style={styles.calendarIcon}/>
          <Text style={styles.date}>{parseDate(date)}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.deleteIconContainer} onPress={props.onDelete}>
        <View style={styles.deleteButtonContainer}>
          <MaterialIcons name='delete' style={styles.deleteIcon} size={20}/>
          <Text style={styles.deleteButtonTitle}>Delete</Text>
        </View>        
      </TouchableOpacity>           
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:'white',
    marginVertical:5,
    borderRadius:10,
    ...Platform.select({
      ios:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
      },
      android:{
        elevation:10,
      }
    })    
  },
  container:{    
    width: width * 0.45,
    height: height * 0.28,
    paddingHorizontal: 10,
    paddingVertical:10,
    justifyContent:'space-between',
  },
  title:{
    marginBottom:10,
    fontSize:18,
    fontWeight:'bold',
  },
  content:{
    marginBottom:10,
    flex: 1
  },
  date:{
    opacity: 0.56,
  },
  dateContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  calendarIcon:{
    fontSize:18,
    marginRight:5
  },
  deleteIconContainer:{
    width:'90%',    
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',
    alignSelf:'center',
    borderRadius:5,
    marginTop:5,
    marginBottom:10,
    paddingVertical:3,
    paddingHorizontal:10,
  },
  deleteIcon:{
    color:'white',    
  },
  deleteButtonContainer:{
    flexDirection:'row',
    alignItems:'center',    
  },
  deleteButtonTitle:{
    color:'white',
    fontSize:16
  },
  serial:{
    marginBottom:5,
    fontSize:18,
    fontWeight:'bold',
    opacity: 0.56,
  }
})

export default Card;