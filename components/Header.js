/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';




function Header(){
  return(
  <View style={styles.header}>
<Text style={styles.text}>
  
 shopping list
</Text>

  </View>
  );
}

const styles = StyleSheet.create({
 header:{
    height:72,
    padding:10,
    backgroundColor:'darkslateblue',
    
 },
 text :{
    color:'white',
    fontSize:25,
    textAlign:'center'
 }
})

export default Header;
