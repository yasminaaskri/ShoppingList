/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




function ListItems({item , deleteItem}){
  return(
  <TouchableOpacity style={styles.listItem}>
    <View style={styles.listItemView}>
        <Text style={styles.listItemText}>
            {item.text}
        </Text>
        <Icon name="remove" size={30} color="red"  onPress={() => deleteItem(item.id)}
         />
    </View> 

 </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
listItem:{
    padding :17,
    backgroundColor:'lightgrey',
    borderBottomWidth:5,
    borderColor:'#eee',
},
listItemView:{
    flexDirection:'row',
    justifyContent:'space-around',
     alignItems: 'center'
},
listItemText:{
fontSize:20,
color:'black'
}

})

export default ListItems;
