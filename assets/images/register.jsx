import { StyleSheet, Text, View, FlatList, Image, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Register() {
    const router = useRouter();

    const DATA = [
        { id: 1, title: 'Nika', color: '#6ECDD8', colorTwo: 'black', image: require('../../../assets/images/nika.png'), description: 'The blue one. Gives a small boost to all fishing stats.' },
        { id: 2, title: 'Rokue', color: '#FFE677', colorTwo: 'black', image: require('../../../assets/images/rokue.png'), description: 'The yellow one. Gives a small boost to all farming stats.' },
        { id: 3, title: 'Mio', color: '#91F1B4', colorTwo: 'black', image: require('../../../assets/images/mio.png'), description: 'The green one. Gives a small boost to all animal stats.' },
        { id: 4, title: 'Teruyuki', color: '#d3b7ee', colorTwo: 'black', image: require('../../../assets/images/teruyuki.png'), description: 'The purple one. Doesn\'t give any buffs to anything' },
        { id: 5, title: 'Saba', color: '#00173a', colorTwo: 'white', image: require('../../../assets/images/saba.png'), description: 'The shady one. Gives a small discount on all purchases' }
    ];

    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [farmName, setFarmName] = useState('');
    const [nameConfirm, setNameConfirm] = useState(false);
    const [confirmationText, setConfirmationText] = useState('');
    const [statSheet, setStatSheet] = useState(null);
    const [inventory, setInventory] = useState([null]);

    const chooseConfirmation = () => {
        const nameConfs = require('../../nameConfirmations.json');
        const randomIndex = Math.floor(Math.random() * nameConfs.length);
        setConfirmationText(nameConfs[randomIndex].text);
    };

    const saveStatSheet = async () => {
        try {
            if (statSheet) {
                await AsyncStorage.setItem("statSheet", JSON.stringify(statSheet));
                console.log("Stat sheet saved successfully:", statSheet);
            } else {
                console.error("StatSheet is not set yet!");
            }
        } catch (error) {
            console.error("Error saving stat sheet:", error);
        }
    };

    const createStatSheet = async () => {
        const newStatSheet = {
            fishing: {
                fishingPower: 1,
                fishCaught: 0,
                totalFishCaught: 0
            },
            farming: {
                farmingPower: 1,
                cropsHarvested: 0,
                totalCropsHarvested: 0
            },
            animals: {
                barnPower: 1,
                animalsCaught: 0,
                totalAnimalsCaught: 0
            },
            purchases: {
                priceMultiplier: 1,
                totalSpent: 0,
                totalPurchases: 0
            }
        };
    
        if (selectedCharacter.title === 'Nika') {
            newStatSheet.fishing.fishingPower += 0.1;
        } else if (selectedCharacter.title === 'Rokue') {
            newStatSheet.farming.farmingPower += 0.1;
        } else if (selectedCharacter.title === 'Mio') {
            newStatSheet.animals.barnPower += 0.1;
        } else if (selectedCharacter.title === 'Saba') {
            newStatSheet.purchases.priceMultiplier -= 0.1;
        }
        setStatSheet(newStatSheet);
        saveStatSheet();
    };

    const saveInventory = async () => {
        try {
            if (inventory && inventory.length > 0) {
                await AsyncStorage.setItem("inventory", JSON.stringify(inventory)); 
                console.log("Inventory saved successfully:", inventory);
            } else {
                console.error("Inventory is empty, cannot save.");
            }
        } catch (error) {
            console.error("Error saving inventory:", error);
        }
    };

    const saveCharacter = async () => {
        try {
            if (!selectedCharacter) {
                console.error("No character selected!");
                return;
            }
            await AsyncStorage.setItem("selectedCharacter", JSON.stringify(selectedCharacter));
            console.log("Character saved successfully:", selectedCharacter);
        } catch (error) {
            console.error("Error saving character:", error);
        }
    };

    const saveFarmName = async () => {
        try {
            if (!farmName) {
                console.error("No farm name provided!");
                return;
            }
            await AsyncStorage.setItem("farmName", JSON.stringify(farmName));
            console.log("Farm name saved successfully:", farmName);
        } catch (error) {
            console.error("Error saving farm name:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Let's make your farm</Text>
            <View style={styles.flatListContainer}>
                <Text style={styles.subHeader}>First of all, choose your character:</Text>
                <FlatList
                    data={DATA}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.flatList}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => setSelectedCharacter(item)} style={styles.characterCard}>
                            <Image source={item.image} style={styles.image} />
                        </Pressable>
                    )}
                />
            </View>
            {selectedCharacter ? (
                <>
                    <View style={[styles.detailsContainer, { borderColor: selectedCharacter.color }]}>
                        <Text style={styles.title}>{selectedCharacter.title}</Text>
                        <Text style={styles.description}>{selectedCharacter.description}</Text>
                    </View>

                    <View style={styles.flatListContainer}>
                        <Text style={styles.subHeader}>Then, name your farm</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setFarmName(text)}
                            placeholder="Farm name here..."
                        />

                        {farmName ? (
                            <Pressable
                                style={[styles.button, { backgroundColor: selectedCharacter.color }]}
                                onPress={() => {
                                    setNameConfirm(true);
                                    chooseConfirmation();
                                }}
                            >
                                <Text style={[styles.buttonText, { color: selectedCharacter.colorTwo }]}>Confirm</Text>
                            </Pressable>
                        ) : null}
                    </View>
                </>
            ) : null}

            {nameConfirm && confirmationText ? (
                <Text style={styles.confirmationText}>{confirmationText}</Text>
            ) : null}

            {nameConfirm && (
                <Pressable
                    style={[styles.bottomButton, { backgroundColor: selectedCharacter.color }]}
                    onPress={async () => {
                        await saveCharacter();
                        await saveFarmName();
                        await createStatSheet();
                        await saveInventory();
                        router.push("/screens/tabs/HomeScreen");
                    }}
                >
                    <Text style={[styles.buttonText, { color: selectedCharacter.colorTwo }]}>Continue to your farm</Text>
                </Pressable>
            )}
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 20,
        justifyContent: 'flex-start'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
    },
    flatListContainer: {
        width: '100%',
        marginBottom: 10
    },
    subHeader: {
        fontSize: 18,
        color: '#555',
    },
    flatList: {
        flexDirection: 'row',
        gap: 14,
        padding: 10
    },
    characterCard: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '100%',
        padding: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        resizeMode: 'contain'
    },
    detailsContainer: {
        alignItems: 'center',
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 20,
        borderWidth: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center'
    },
    footerText: {
        fontSize: 16,
        color: '#333',
        marginTop: 20,
    },
    bottomButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        padding: 15,
        backgroundColor: '#6ECDD8',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmationText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginVertical: 20,
    },
})
