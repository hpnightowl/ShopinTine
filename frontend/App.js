import 'react-native-gesture-handler';
import * as React from 'react';

import { Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoadingScreen from './src/screens/loading';
import Leaderboard from './src/screens/leaderboard';
import Chat from './src/screens/chat';
import SearchResources from './src/screens/resources-search';
import AddResource from './src/screens/resource-add';
import EditResource from './src/screens/resource-edit';
import MyResources from './src/screens/resources-my';
import Map from './src/screens/map';
import Profile from './src/screens/profile'

import { HomeIcon, ShopIcon, SearchIcon, ProfileIcon } from './src/images/svg-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ResourcesStackOptions = ({ navigation }) => {
  return ({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('Chat')}
        title='Chat '
      />
    )
  });
};

const ShopStackOptions = ({ navigation }) => {
  return ({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('Add a Shop')}
        title='Add '
      />
    )
  });
};

const tabBarOptions = {
  // showLabel: false,
  activeTintColor: '#1062FE',
  inactiveTintColor: '#000',
  style: {
    backgroundColor: '#F1F0EE',
    paddingTop: 5
  }
};

const TabLayout = () => (
  <Tab.Navigator
    style={{paddingTop: 50}}
    initialRouteName='Leader Board'
    tabBarOptions={tabBarOptions} >
       <Tab.Screen
      name='Leader Board'
      component={Leaderboard}
      options={{
        tabBarIcon: ({color}) => (<HomeIcon fill={color} />)
      }}
    />
    <Tab.Screen
      name='Submit'
      component={ShopStackLayout}
      options={{
        tabBarIcon: ({color}) => (<ShopIcon fill={color} />)
      }}
    />
    <Tab.Screen
      name='Search'
      component={SearchStackLayout}
      options={{
        tabBarIcon: ({color}) => (<SearchIcon fill={color} />)
      }}
    />
    <Tab.Screen
      name='Profile'
      component={Profile}
      options={{
        tabBarIcon: ({color}) => (<ProfileIcon fill={color} />)
      }}
    />
  </Tab.Navigator>
);

const ShopStackLayout = () => (
  <Stack.Navigator>
  <Stack.Screen name='Shops' component={MyResources} options={ShopStackOptions} />
    <Stack.Screen name='Add a Shop' component={AddResource} />
    <Stack.Screen name='Edit Shop' component={EditResource} />
  </Stack.Navigator>
);

const SearchStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='Search' component={SearchResources} options={ResourcesStackOptions} />
    <Stack.Screen name='Chat' component={Chat} />
    <Stack.Screen name='Map' component={Map} />
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (<LoadingScreen />);
  } else {
    return (
      <NavigationContainer>
        <TabLayout/>
      </NavigationContainer>
    );
  }
};

export default App;
