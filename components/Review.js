import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Review = ({content, serial}) => {
  return (    
    <View style={styles.container}>
      <Text style={styles.serial}>{serial}</Text>
      <Text style={styles.review}>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    marginVertical:15,
    paddingHorizontal:10,
    paddingVertical:5,
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
  serial:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:5
  },
  review:{
    fontSize:16,
  }
})

export default Review;