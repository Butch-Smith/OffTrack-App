import { StyleSheet, StatusBar, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { React, useEffect, useState } from 'react'

export default function profileScreen() {
  const [userName, setUserName] = useState('')
  useEffect(() => {
    getData();
  }, []);
  
  const getData = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('email')
      if (storedEmail) {
        setUserName(storedEmail)
      }
      else {
        Alert.alert('Username not found')
      }
    }
    catch (e) {
      console.error('Failed to load username' + e)
    }
  }
  return (<>
    <StatusBar backgroundColor="#212121" barStyle="light-content" />
    <View>
      <Text>{userName}</Text>
    </View>
  </>
  )
}

const styles = StyleSheet.create({})