import React, {useState} from 'react';
import Header from  './components/Header'
import {Text,View,StyleSheet,FlatList} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Listitem from './components/listitems';

  const App = () => {
    const [items, setItems] = useState([
      {
        id: uuidv4(),
        text: 'Hasham',
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


  return (
  <View style={styles.container}>
    <Header />
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