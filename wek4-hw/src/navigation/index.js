import React,{useState}  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable } from "native-base";
import { Text, TouchableOpacity } from "react-native";
import { shadowOffset } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import Wishlist from '../screens/WishlistScreen';
import Mybooks from '../screens/Mybooks';

import albumData from "../json/albums.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        // headerShown: false
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen 
        name="Wishlist" 
        component={Wishlist} 
        options={{
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="My books" 
        component={Mybooks} 
        options={{
          title: "My books",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator
      //screenOptions={{
      //headerShown: false
     //}}
    >
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{
          
          title: albumData.albumTitle,
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ navigation }) => ({
          title:" ",
          headerStyle: {
            backgroundColor: '#fff',
          },
          
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <Pressable>
                <MaterialCommunityIcons 
                name={'chevron-left'} 
                color={'black'} 
                size={30}
                onPress={ () => {navigation.goBack();}}
            />
            </Pressable>
            ),
          headerRight:() =>(
            <Pressable>
                <MaterialCommunityIcons 
                name={'bookmark-outline'} 
                color={'black'} 
                size={30}
                onPress={ () => <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={25} />}
            />
            </Pressable>
          )
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigation;