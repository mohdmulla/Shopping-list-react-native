import React, {useState} from 'react';
import {Text,View,StyleSheet,FlatList,Alert} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Header from  './components/Header';
import Listitem from './components/listitems';
import Additem from './components/Additem';


const App = () => {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: 'orange',
    },
    {
      id: uuidv4(),
      text: 'Eggs',
    },
    {
      id: uuidv4(),
      text: 'Bread',
    },
    {
      id: uuidv4(),
      text: 'Juice',
    },
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', 'Please Enter an item', { text:'OK'});
    }
    else {
      setItems(prevItems => {
        return [{id: uuidv4(), text}, ...prevItems]
      });
  }
}; 

  return (
  <View style={styles.container}>
    <Header />
    <Additem addItem={addItem} />
    < FlatList
    data={items}
    renderItem={({item}) => <Listitem item={item}
    deleteItem={deleteItem} />}/> 
  </View>
  );
  };

  const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:60,
    }
  })

  export default App;