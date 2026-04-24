import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sobre Nós</Text> 
        <Text style={styles.paragraph}>
          Um app simples pra te ajudar a encontrar filmes e séries sem perder tempo.
        </Text> 
        <Text style={styles.paragraph}>
          Aqui você descobre o que vale a pena assistir, vê novidades e acha boas opções rápido.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  paragraph: {
    color: '#CCCCCC',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 26,
  },
});