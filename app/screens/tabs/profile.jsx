import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Image, Alert } from 'react-native';

export default function ProfileScreen() {
  const [email, setEmail] = useState('')
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('email')
      if (storedEmail) {
        setEmail(storedEmail)
      }
      else {
        Alert.alert('Can\'t find email')
      }
    }
    catch (e) {
      console.error(e)
    }
  }
  const DATA = [
    { key: '1', title: 'Barcelona', duration: 'maart 2024 - april 2024', image: require('../../../assets/images/Barcelona.png') },
    { key: '2', title: 'New York', duration: 'januari 2024 - februari 2024', image: require('../../../assets/images/New-York.png') },
    { key: '3', title: 'Tokyo', duration: 'september 2023 - december 2023', image: require('../../../assets/images/Tokyo.png') },
    { key: '4', title: 'Rome', duration: 'januari 2023 - februari 2023', image: require('../../../assets/images/Rome.png') },
    { key: '5', title: 'Chongqing', duration: 'januari 2023 - februari 2023', image: require('../../../assets/images/Chongqing.png') }
  ];
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/refuge.jpg")} style={styles.topImage} />
      <Image source={require("../../../assets/images/download.png")} style={styles.profileImage} />
      <View style={styles.main}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{email}</Text>
          <Text style={styles.pronouns}>ki/wi</Text>
        </View>

        <View style={styles.aboutMeContainer}>
          <Text style={styles.aboutMeText}>
            haiiiiiii (≧∇≦)ﾉ
          </Text>
        </View>

        <Text style={styles.favoritesTitle}>❤️ My Favorites</Text>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'start',
    paddingBottom: 20
  },
  topImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  main: {
    paddingHorizontal: 20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    top: 130,
    left: 25,
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileInfo: {
    marginTop: 50,
    alignItems: 'start',
    marginLeft: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pronouns: {
    fontSize: 14,
    color: 'gray',
  },
  aboutMeContainer: {
    marginVertical: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: 20,
    marginBottom: 30
  },
  aboutMeText: {
    fontSize: 14,
    textAlign: 'center',
  },
  favoritesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});