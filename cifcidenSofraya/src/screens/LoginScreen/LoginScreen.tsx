import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Giriş Başarılı');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
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
      <TouchableOpacity onPress={() => Alert.alert('Şifre sıfırlama işlemi henüz uygulanmadı.')}>
        <Text style={styles.forgotPassword}>Şifremi Unuttum?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => Alert.alert('Twitter ile giriş henüz uygulanmadı.')}>
          <Text style={styles.socialButton}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Facebook ile giriş henüz uygulanmadı.')}>
          <Text style={styles.socialButton}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Google ile giriş henüz uygulanmadı.')}>
          <Text style={styles.socialButton}>Google</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Yeni Misin? Kayıt Ol</Text>
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
  forgotPassword: {
    color: '#FB8C00',
    textAlign: 'right',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#FB8C00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
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
  registerText: {
    color: '#FB8C00',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
