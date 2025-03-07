import { StyleSheet, StatusBar, Text, View } from 'react-native'
import React from 'react'

export default function homeScreen() {
  return (<>
    <StatusBar backgroundColor="#212121" barStyle="light-content" />
    <View>
      <Text>home</Text>
    </View>
  </>
  )
}

const styles = StyleSheet.create({})