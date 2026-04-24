import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function ContactScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.title}>Fale conosco</Text>
        
        <View style={styles.emailContainer}>
          <Ionicons name="mail" size={20} color="#E50914" />
          <Text style={styles.emailText}>filmes@gmail.com</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome..."
          placeholderTextColor="#888"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu email..."
          placeholderTextColor="#888"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Digite sua mensagem"
          placeholderTextColor="#888"
          multiline
          numberOfLines={4}
          value={mensagem}
          onChangeText={setMensagem}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <View style={styles.socialSection}>
          <Text style={styles.socialText}>Nos siga nas redes sociais</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="instagram" size={24} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="linkedin" size={24} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="twitter" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    padding: 20,
    flexGrow: 1,
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  emailText: {
    color: '#CCC',
    fontSize: 16,
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#1E1E1E',
    color: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#E50914',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialSection: {
    marginTop: 50,
    alignItems: 'center',
  },
  socialText: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 15,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 20,
  },
  iconButton: {
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 20,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});