import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const juiceImages = [
  require('../assets/juice1.jpg'),
  require('../assets/juice2.jpg'),
  require('../assets/juice3.jpg')
];

const milkshakeImages = [
  require('../assets/milkshake1.jpg'),
  require('../assets/milkshake2.jpg'),
  require('../assets/milkshake3.jpg')
];

const sodaImages = [
  require('../assets/soda1.jpg'),
  require('../assets/soda2.jpg'),
  require('../assets/soda3.jpg')
];

const faloodaImages = [
  require('../assets/fallooda1.jpg'),
  require('../assets/fallooda2.jpg'),
  require('../assets/fallooda3.jpg')
];

export default function HomeScreen() {
  const navigation = useNavigation();

  const navigateToDetails = (type) => {
    navigation.navigate(`${type}DetailsScreen`);
  };

  const renderImages = (images, type) => (
    images.map((image, index) => (
      <TouchableOpacity
        key={index}
        style={styles.itemContainer}
        onPress={() => navigateToDetails(type)}
      >
        <Image source={image} style={styles.itemImage} />
        <Text style={styles.itemText}>{`${type} ${index + 1}`}</Text>
      </TouchableOpacity>
    ))
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cold Drinks App</Text>

      <Text style={styles.sectionTitle}>Fresh Juices</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {renderImages(juiceImages, 'Juice')}
      </ScrollView>

      <Text style={styles.sectionTitle}>Milk Shakes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {renderImages(milkshakeImages, 'Milkshake')}
      </ScrollView>

      <Text style={styles.sectionTitle}>Soda</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {renderImages(sodaImages, 'Soda')}
      </ScrollView>

      <Text style={styles.sectionTitle}>Falooda</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {renderImages(faloodaImages, 'Falooda')}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#C70039',
    marginBottom: 8,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
    textAlign: 'center',
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  itemImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
});
