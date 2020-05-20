import React from 'react';
import { StyleSheet,View,  Text, TouchableOpacity } from 'react-native';
import Leaderboard from 'react-native-leaderboard';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  scroll: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    paddingTop: 75
  },
    title: {
    fontSize: 50,
    color: '#FFFFFF',
    paddingTop: 50
  },
    bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
    header:{
    backgroundColor: "#1062FE",
    height:200,
    width:400 ,
    alignItems: 'center'
  },
   soon: {
    fontSize: 30,
    color: '#FFFFFF',
    paddingTop: 10
  },
   name: {
    fontSize: 20,
    color: '#000000',
    paddingTop: 20,
    paddingLeft: 50,
    fontWeight: "bold",
    textDecorationLine: 'underline'
  },
  highScore:{
    fontSize: 20,
    color: '#000000',
    paddingTop: 20,
    paddingLeft: 200,
    fontWeight: "bold",
    textDecorationLine: 'underline'
  },
  team:{
    fontSize:30,
    paddingBottom:150,
    paddingLeft:100
  }

});
state = {
    data: [
        {userName: 'Harsh', highScore: 130},
        {userName: 'Adarsh', highScore: 150},
        {userName: 'Mohit', highScore:120},
        {userName: 'Anish',highScore:140}
        //...
    ] //can also be an object of objects!: data: {a:{}, b:{}}
}

const Leader = () => {
  return (
<View style={styles.center}>
     <View style={styles.header}>
        <Text style={styles.title}>Leaderboard</Text>
        <Text style={styles.soon}>(Coming Soon)</Text>   
     </View>
     <View style={{flexDirection:"row"}}>
     <Text style={styles.name}>Name</Text>
      <Text style={styles.highScore}>Score</Text>
     </View>
           <View style={styles.bodyContent}>
              <Leaderboard 
              data={state.data} 
              sortBy='highScore' 
              labelBy='userName'/>
           </View>
        <Text style={styles.team}>#TEAMAHAM</Text>
</View>
 )

}

export default Leader;
