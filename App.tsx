import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../ProjectName/components/Header';
import ListItems from './components/ListItems';
import AddItem from './components/AddItem';


function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function App() {
  const [items, setItems] = useState([
    { id: generateUniqueId(), text: 'Milk' },
    { id: generateUniqueId(), text: 'bread' },
    { id: generateUniqueId(), text: 'juice' },
    { id: generateUniqueId(), text: 'eggs' },
    { id: generateUniqueId(), text: 'water' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };


  const addItem = (text) => {
    setItems(prevItems => {
      return [{id: generateUniqueId() , text}, ...prevItems]
    });
  };
  

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem ={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItems item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
