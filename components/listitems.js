import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from  'react-native-vector-icons/dist/FontAwesome';

const Listitem = ({item, deleteItem}) => {
  return (
  <TouchableOpacity style={styles.listitem}>
    <View style={styles.listitemView}>
  <Text style={styles.listitemText}>{item.text}</Text>
  <Icon
            name="remove"
            size={20}
            color="firebrick"
            onPress={() => deleteItem(item.id)}
          />
  </View>
  </TouchableOpacity>
  ); 
};



const styles = StyleSheet.create({
  listitem:{
    padding:15,
    backgroundColor:'#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listitemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  listitemText:{
      fontSize: 18,
  },    
})

export default Listitem;
