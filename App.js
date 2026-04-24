import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
import HomeScreen from './HomeScreen';
 
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
 
function FilmesPlaceholder() {
  return <View style={s.placeholder}><Text style={s.txt}>Filmes</Text></View>;
}
function SeriesPlaceholder() {
  return <View style={s.placeholder}><Text style={s.txt}>Séries</Text></View>;
}
function BuscarPlaceholder() {
  return <View style={s.placeholder}><Text style={s.txt}>Buscar</Text></View>;
}
function SobrePlaceholder() {
  return <View style={s.placeholder}><Text style={s.txt}>Sobre</Text></View>;
}
function ContatoPlaceholder() {
  return <View style={s.placeholder}><Text style={s.txt}>Contato</Text></View>;
}
 
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1c1c1c',
          borderTopColor: '#333',
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: '#e05050',
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Filmes: 'grid-outline',
            Buscar: 'search-outline',
            Series: 'tv-outline',
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Filmes" component={HomeScreen} />
      <Tab.Screen name="Buscar" component={BuscarPlaceholder} />
      <Tab.Screen name="Series" component={SeriesPlaceholder} />
    </Tab.Navigator>
  );
}
 
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: { backgroundColor: '#1c1c1c' },
          drawerLabelStyle: { color: '#fff', fontSize: 15 },
          drawerActiveTintColor: '#e05050',
          drawerInactiveTintColor: '#aaa',
        }}
      >
        <Drawer.Screen name="Início" component={Tabs} />
        <Drawer.Screen name="Sobre" component={SobrePlaceholder} />
        <Drawer.Screen name="Contato" component={ContatoPlaceholder} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
 
const s = StyleSheet.create({
  placeholder: { flex: 1, backgroundColor: '#1c1c1c', justifyContent: 'center', alignItems: 'center' },
  txt: { color: '#fff', fontSize: 18 },
});