import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { useNavigation } from '@react-navigation/native';

const USERS_FILE = `${FileSystem.documentDirectory}users.json`; 

export default function SignupScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const loadUsers = async () => {
    try {
      const usersData = await FileSystem.readAsStringAsync(USERS_FILE);
      return JSON.parse(usersData);
    } catch (error) {
      return [];
    }
  };

  const saveUsers = async (users) => {
    await FileSystem.writeAsStringAsync(USERS_FILE, JSON.stringify(users));
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match!');
      return;
    }

    const users = await loadUsers();
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      Alert.alert('User with this email already exists!');
      return;
    }

    const newUser = { email, password };
    users.push(newUser);
    await saveUsers(users);

    Alert.alert('Account created successfully!');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo.png')} 
        style={styles.logo}
      />

      <Text style={styles.titleText}>Signup</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Social Media Icons */}
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity onPress={() => console.log('Google Signup')}>
          <Image 
            source={require('../assets/google.png')} 
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Facebook Signup')}>
          <Image 
            source={require('../assets/facebook.png')} 
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Instagram Signup')}>
          <Image 
            source={require('../assets/instagram.png')} 
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.accountLink}>
        <Text style={styles.accountText}>
          Already have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Go to Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ffffff', 
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#C70039', 
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginVertical: 16,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 8,
  },
  accountLink: {
    marginTop: 16,
  },
  accountText: {
    fontSize: 16,
    color: '#333',
  },
  linkText: {
    color: '#0066CC',
    textDecorationLine: 'underline',
  },
});
