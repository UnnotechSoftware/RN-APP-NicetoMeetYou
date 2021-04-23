import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Button = (props) => {
  const navigation = useNavigation();
  const {title, page, onPress} = props;

  const activate = () => {
    if (onPress){
      onPress();
    } else if (page){
      navigation.navigate(page);  
    }
  }

  return(
    <TouchableOpacity style={styles.container} onPress={activate}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:20
  },
  title:{
    fontSize:18,
    color:'green'
  }
});

export default Button;