import { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

const DATA = [
  { key: "1", title: "Barcelona", duration: "maart 2024 - april 2024", image: require("../../assets/images/Barcelona.png") },
  { key: "2", title: "New York", duration: "januari 2024 - februari 2024", image: require("../../assets/images/New-York.png") },
  { key: "3", title: "Tokyo", duration: "september 2023 - december 2023", image: require("../../assets/images/Tokyo.png") },
  { key: "4", title: "Rome", duration: "januari 2023 - februari 2023", image: require("../../assets/images/Rome.png") },
  { key: "5", title: "Chongqing", duration: "januari 2023 - februari 2023", image: require("../../assets/images/Chongqing.png") },
];

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const item = DATA.find((city) => city.key === id);

  useEffect(() => {
    if (item) {
      navigation.setOptions({ title: item.title });
    }
  }, [item]);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Stad niet gevonden</Text>
      </View>
    );
  }

  return (
    <>
      <Text style={styles.header}>{item.title}</Text>
      <View style={styles.container}>

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
});