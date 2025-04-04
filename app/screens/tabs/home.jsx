import { StyleSheet, FlatList, StatusBar, Text, View, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default function HomeScreen() {
  const [storedPassword, setStoredPassword] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const password = await AsyncStorage.getItem('password');
      if (password !== null) {
        setStoredPassword(password);  
      }
    } catch (err) {
      console.error('Error retrieving data', err);
    }
  };
  const DATA = [
    { key: '1', title: 'Barcelona', duration: 'maart 2024 - april 2024', image: require('../../../assets/images/Barcelona.png') },
    { key: '2', title: 'New York', duration: 'januari 2024 - februari 2024', image: require('../../../assets/images/New-York.png') },
    { key: '3', title: 'Tokyo', duration: 'september 2023 - december 2023', image: require('../../../assets/images/Tokyo.png') },
    { key: '4', title: 'Rome', duration: 'januari 2023 - februari 2023', image: require('../../../assets/images/Rome.png') },
    { key: '5', title: 'Chongqing', duration: 'januari 2023 - februari 2023', image: require('../../../assets/images/Chongqing.png') }
  ];

  return (
    <>
      <StatusBar backgroundColor="#212121" barStyle="light-content" />
      <Text style={styles.header}>🏖️ My Trips {storedPassword}</Text>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <Link href={`/screens/detail?id=${item.key}`} asChild>
              <Pressable>
                <ImageBackground source={item.image} style={styles.item}>
                  <View style={styles.overlay}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                  </View>
                </ImageBackground>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
  },
  item: {
    height: 150,
    justifyContent: 'flex-end',
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  itemTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});