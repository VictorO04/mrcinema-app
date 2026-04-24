import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
import dados from '../dados.json';
 
export default function HomeScreen() {
  const navigation = useNavigation();
 
  const renderPoster = ({ item }) => (
    <TouchableOpacity
      style={styles.poster}
      onPress={() => navigation.navigate('Detalhes', { item })}
    >
      <Image source={{ uri: item.imagem }} style={styles.posterImg} />
    </TouchableOpacity>
  );
 
  const renderTop10 = ({ item, index }) => (
    <TouchableOpacity
      style={styles.top10Card}
      onPress={() => navigation.navigate('Detalhes', { item })}
    >
      <Image source={{ uri: item.imagem }} style={styles.top10Img} />
      <Text style={styles.top10Num}>{index + 1}</Text>
      {item.usuario ? (
        <View style={styles.nameTag}>
          <Text style={styles.nameTagText}>{item.usuario}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7a0000" />
 
      <View style={styles.topbar}>
        <TouchableOpacity style={styles.hamburger}>
          <View style={styles.hambLine} />
          <View style={styles.hambLine} />
          <View style={styles.hambLine} />
        </TouchableOpacity>
      </View>
 
      <Text style={styles.pageLabel}>Inicio</Text>
 
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.heroBox}
          onPress={() => navigation.navigate('Detalhes', { item: dados.destaque })}
        >
          <Image source={{ uri: dados.destaque.imagem }} style={styles.heroImg} />
          <View style={styles.heroOverlay} />
          <Text style={styles.heroTitle}>{dados.destaque.nome}</Text>
        </TouchableOpacity>
 
        <Text style={styles.sectionLabel}>Em cartaz</Text>
        <FlatList
          data={dados.emCartaz}
          renderItem={renderPoster}
          keyExtractor={(item) => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.hscroll}
        />
 
        <Text style={[styles.sectionLabel, { paddingTop: 4 }]}>Top 10 d...</Text>
        <FlatList
          data={dados.top10}
          renderItem={renderTop10}
          keyExtractor={(item) => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.hscroll}
        />
 
        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  topbar: {
    height: 44,
    backgroundColor: '#7a0000',
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  hamburger: {
    gap: 4,
  },
  hambLine: {
    width: 20,
    height: 2,
    backgroundColor: '#fff',
    borderRadius: 1,
    marginBottom: 4,
  },
  pageLabel: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
    paddingVertical: 8,
  },
  heroBox: {
    marginHorizontal: 14,
    borderRadius: 10,
    height: 150,
    overflow: 'hidden',
    backgroundColor: '#2a2a2a',
    position: 'relative',
  },
  heroImg: {
    width: '100%',
    height: '100%',
    opacity: 0.55,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  heroTitle: {
    position: 'absolute',
    bottom: 8,
    left: 10,
    right: 10,
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  sectionLabel: {
    color: '#e05050',
    fontSize: 13,
    fontWeight: '700',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 8,
  },
  hscroll: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    gap: 8,
  },
  poster: {
    width: 72,
    height: 105,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#333',
    marginRight: 8,
  },
  posterImg: {
    width: '100%',
    height: '100%',
  },
  top10Card: {
    width: 104,
    height: 70,
    position: 'relative',
    marginRight: 8,
  },
  top10Img: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 80,
    height: 70,
    borderRadius: 6,
  },
  top10Num: {
    position: 'absolute',
    left: 0,
    bottom: -4,
    fontSize: 42,
    fontWeight: '900',
    color: '#2a2a2a',
    lineHeight: 42,
    textShadowColor: '#666',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1,
    zIndex: 2,
  },
  nameTag: {
    position: 'absolute',
    bottom: 0,
    left: 18,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 3,
  },
  nameTagText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: '600',
    textAlign: 'center',
  },
});