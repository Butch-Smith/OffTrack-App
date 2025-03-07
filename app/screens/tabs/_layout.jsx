import { StyleSheet, Text, View, } from 'react-native'
import { Tabs, tabBarIcon } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"
import React from 'react'

export default function tabsLayout() {
  return (
    <Tabs screenOptions={{tabBarShowLabel: false, headerShown: false }}>
      <Tabs.Screen name="home" options={{ tabBarIcon: ({ size }) => (<Ionicons name="home-outline" size={size} />) }} />
      <Tabs.Screen name="search" options={{ tabBarIcon: ({ size }) => (<Ionicons name="search-outline" size={size} />) }} />
      <Tabs.Screen name="addTrip" options={{ tabBarIcon: ({ size }) => (<Ionicons name="add-outline" size={size} />) }} />
      <Tabs.Screen name="notifs" options={{ tabBarIcon: ({ size }) => (<Ionicons name="notifications-outline" size={size} />) }} />
      <Tabs.Screen name="profile" options={{ tabBarIcon: ({ size }) => (<Ionicons name="person-outline" size={size} />) }} />
    </Tabs>
  )
}

const styles = StyleSheet.create({})