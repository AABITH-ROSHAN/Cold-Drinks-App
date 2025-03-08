import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';

export default function SodaDetailsScreen({ route, navigation }) {
  const { itemName, itemImage, description, price } = route.params || {
    itemName: 'Soda',
    itemImage: require('../assets/soda1.jpg'), 
    description: 'Cool and refreshing soda with a burst of flavor.',
    price: 120,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Main Soda Details */}
      <Image source={itemImage} style={styles.productImage} />
      <Text style={styles.title}>{itemName} Details</Text>
      <Text style={styles.price}>Price: ₹{price}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        title="Order Now"
        onPress={() => navigation.navigate('OrderConfirmation')}
      />

      {/* Horizontal Scroll for other items */}
      <Text style={styles.relatedTitle}>Explore Other Drinks</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {/* Milkshake Section */}
        <TouchableOpacity onPress={() => navigation.navigate('MilkshakeDetailsScreen', {
          itemName: 'Milkshake',
          itemImage: require('../assets/milkshake1.jpg'),
          description: 'Creamy and delicious milkshake made with fresh ingredients.',
          price: 200,
        })}>
          <Image source={require('../assets/milkshake1.jpg')} style={styles.relatedImage} />
          <Text style={styles.relatedText}>Milkshake</Text>
        </TouchableOpacity>

        {/* Falooda Section */}
        <TouchableOpacity onPress={() => navigation.navigate('FaloodaDetailsScreen', {
          itemName: 'Falooda',
          itemImage: require('../assets/fallooda1.jpg'),
          description: 'Refreshing and flavorful falooda with rose syrup and nuts.',
          price: 180,
        })}>
          <Image source={require('../assets/fallooda1.jpg')} style={styles.relatedImage} />
          <Text style={styles.relatedText}>Falooda</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C70039',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C70039',
    marginVertical: 10,
  },
  relatedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 60,
    marginBottom: 10,
  },
  horizontalScroll: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  relatedImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 8,
    marginHorizontal: 8,
  },
  relatedText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
});
