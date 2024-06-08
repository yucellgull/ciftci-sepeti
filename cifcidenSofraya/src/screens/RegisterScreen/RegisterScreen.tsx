import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Kayıt Başarılı');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        placeholderTextColor="#FFA726"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#FFA726"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        placeholderTextColor="#FFA726"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Kayıt Ol</Text>
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => Alert.alert('Twitter ile kayıt henüz uygulanmadı.')}>
          <Text style={styles.socialButton}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Facebook ile kayıt henüz uygulanmadı.')}>
          <Text style={styles.socialButton}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Google ile kayıt henüz uygulanmadı.')}>
          <Text style={styles.socialButton}>Google</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Zaten kayıt oldun mu? Giriş yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#FB8C00',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFA726',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: '#FB8C00',
  },
  registerButton: {
    backgroundColor: '#FB8C00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    color: '#FB8C00',
  },
  loginText: {
    color: '#FB8C00',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default RegisterScreen;
