import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
 
export default function DetalhesScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7a0000" />
      <ScrollView>
        <View style={styles.imageBox}>
          <Image source={{ uri: item.imagem }} style={styles.image} />
          <View style={styles.overlay} />
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
 
        <View style={styles.content}>
          <Text style={styles.genero}>{item.genero}</Text>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.descricao}>{item.descricao}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  imageBox: {
    height: 280,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  backBtn: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 6,
  },
  content: {
    padding: 20,
  },
  genero: {
    color: '#e05050',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  nome: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 12,
  },
  descricao: {
    color: '#aaa',
    fontSize: 14,
    lineHeight: 22,
  },
});