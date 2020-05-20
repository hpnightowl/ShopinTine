import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Alert } from 'react-native';

import { search, userID } from '../lib/utils'

const styles = StyleSheet.create({
  flatListView: {
    backgroundColor: '#FFF'
  },
  itemTouchable: {
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.25
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemName: {
    fontSize: 24,
  },
  itemDescription: {
    fontSize: 15,
    color: 'gray',
    fontWeight: "bold"
  },

  itemuser: {
    fontSize: 5,
    color: 'gray',
    fontWeight: "bold"
  },
  itemnop: {
    fontSize: 14,
    color: 'gray',
    fontWeight: "bold"

  },
  emptyListView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyListText: {
    color: '#999999',
    fontSize: 16
  }
});

const MyResources = function ({ navigation }) {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      search({ userID: userID() })
        .then(setItems)
        .catch(err => {
          console.log(err);
          Alert.alert('ERROR', 'Please try again. If the problem persists contact an administrator.', [{text: 'OK'}]);
        });
    })
  }, []);

  const Item = (props) => {
    return (
      <TouchableOpacity style={styles.itemTouchable}
          onPress={() => { navigation.navigate('Edit Shop', { item: props }); }}>
        <View style={styles.itemView}>
          <Text style={styles.itemName}>{props.name}</Text>
          <Text style={styles.itemnop}> No of People ( {props.nop} ) </Text>
        </View>
        <Text style={styles.itemDescription}>{props.adiinfo}</Text>
        <Text style={styles.user}>UserId: {props.userID}</Text>
      </TouchableOpacity>
    );
  };
  
  if (items.length > 0) {
    return (
      <FlatList style={styles.flatListView}
        data={items}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={item => item.id || item['_id']}
      />
    )
  } else {
    return (
      <View style={styles.emptyListView}>
        <Text style={styles.emptyListText}>You currently have no Shops listed</Text>
      </View>
    )
  }
};

export default MyResources;
