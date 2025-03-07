import { StyleSheet, Text, View, } from 'react-native'
import { ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

export default function tabsLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen name="home" options={{title: "home", tabBarIcon: "home-outline"}} />
        <Tabs.Screen name="profile" options={{title: "profile"}} />
    </Tabs>
  )
}

const styles = StyleSheet.create({})