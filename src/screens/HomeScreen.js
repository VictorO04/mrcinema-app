import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';

const emCartazData = [
  { id: '1', nome: 'Hail Mary', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3ZX1uL02xsVtK2cSus1yGMzTdljjROxS2Q&s' },
  { id: '2', nome: 'Michael', imagem: 'https://www.estadao.com.br/resizer/v2/JJEYVX3G3RA3VF7RCQHMWEUWPE.jpg?quality=80&auth=88cc49b168b2aa57b596f9274a0e6c35225e769eeeecbdf22e98e6f9e8cc44dd&width=380' },
];

const top10Data = [
  { id: '3', nome: 'The Boys', imagem: 'https://i.ebayimg.com/00/s/MTYwMFgxMDgw/z/pyIAAOSwA8tfMGX9/$_57.JPG?set_id=8800005007' },
  { id: '4', nome: 'Invencível', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4vK00pQYnpiJKwnKaXVu44qKanXjb-pf6wQ&s' },
  { id: '5', nome: 'Pânico 7', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfIMXIJr8aYcnfLzXGKa38i6Zfan0yDLuw7w&s' },
];

export default function HomeScreen({ navigation }) {
  const renderMovieItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('Detalhes', { filmeId: item.id })}
    >
      <Image source={{ uri: item.imagem }} style={styles.poster} />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Em cartaz</Text> 
        <FlatList
          data={emCartazData}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top 10 da semana</Text>
        <FlatList
          data={top10Data}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  section: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 15,
  },
  listContainer: {
    paddingLeft: 15,
  },
  card: {
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  poster: {
    width: 140,
    height: 210,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});