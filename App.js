import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import ContactScreen from './src/screens/ContactScreen';

const DetailsScreen = ({ route }) => (
  <HomeScreen isDetails={true} route={route} />
);

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MovieStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Lista" component={HomeScreen} />
      <Stack.Screen name="Detalhes" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#121212', borderTopColor: '#333' },
        tabBarActiveTintColor: '#E50914',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === 'Filmes' ? 'film' : 'tv';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Filmes" component={MovieStack} />
      <Tab.Screen name="Séries" component={MovieStack} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#fff',
          drawerStyle: { backgroundColor: '#121212', width: 240 },
          drawerActiveTintColor: '#E50914',
          drawerInactiveTintColor: '#fff',
        }}
      >
        <Drawer.Screen 
          name="Início" 
          component={TabNavigator} 
          options={{
            drawerIcon: ({ color }) => <Ionicons name="home" size={22} color={color} />
          }}
        />
        <Drawer.Screen 
          name="Sobre" 
          component={AboutScreen} 
          options={{
            drawerIcon: ({ color }) => <Ionicons name="information-circle" size={22} color={color} />
          }}
        />
        <Drawer.Screen 
          name="Contato" 
          component={ContactScreen} 
          options={{
            drawerIcon: ({ color }) => <Ionicons name="mail" size={22} color={color} />
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
 
const s = StyleSheet.create({
  placeholder: { flex: 1, backgroundColor: '#1c1c1c', justifyContent: 'center', alignItems: 'center' },
  txt: { color: '#fff', fontSize: 18 },
});