import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function OrderConfirmationScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 2000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>

      <Image 
        source={require('../assets/orderconfirmed.png')} 
        style={styles.image}
      />

      <Text style={styles.confirmationText}>Your order is confirmed!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  confirmationText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50', 
  },
});
