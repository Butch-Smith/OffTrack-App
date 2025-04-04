import { useEffect } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useRouter } from "expo-router";

const DATA = [
  { key: "1", title: "Barcelona", duration: "maart 2024 - april 2024", image: require("../../assets/images/Barcelona.png") },
  { key: "2", title: "New York", duration: "januari 2024 - februari 2024", image: require("../../assets/images/New-York.png") },
  { key: "3", title: "Tokyo", duration: "september 2023 - december 2023", image: require("../../assets/images/Tokyo.png") },
  { key: "4", title: "Rome", duration: "januari 2023 - februari 2023", image: require("../../assets/images/Rome.png") },
  { key: "5", title: "Chongqing", duration: "januari 2023 - februari 2023", image: require("../../assets/images/Chongqing.png") },
];

export default function DetailScreen() {
  const router = useRouter()
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
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.title}</Text>
        <Pressable onPress={() => router.push('screens/tabs/home')}>
          <Image style={styles.backButton} source={require("../../assets/images/backButton.png")} />
        </Pressable>
      </View>
      <View style={styles.container}>
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.item} source={item.image} />
          </View>
          <Text style={styles.durationText}>{item.duration}</Text>
        </View>
        <View style={styles.diaryEntryContainer}>
          <Text style={styles.diaryHeaderText}>Day 1</Text>
          <Text style={styles.diaryEntry}>
            The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly but gets faster each minute after you hear this signal bodeboop. A sing lap should be completed every time you hear this sound. ding Remember to run in a straight line and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark. Get ready!… Start. ding
          </Text>
        </View>
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
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    resizeMode: 'contain',
    width: 35,
    height: 34,
  },
  diaryEntryContainer: {
    marginTop: 10
  },
  diaryHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  },
  diaryEntry: {
    fontSize: 15
  },
  durationText: {
    marginTop: 2,
    marginLeft: 6,
    fontSize: 12,
    color: '#A5A5A5'
  },
  imageContainer: {
    padding: 6,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  item: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
});