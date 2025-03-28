import { StyleSheet, StatusBar, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { React, useState } from 'react';

export default function AddTripScreen() {
    const [formData, setFormData] = useState({
        location: '',
        duration: '',
        diaryEntry: '',
        image: null,
    });

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setFormData({ ...formData, image: result.assets[0].uri });
        }
    };

    return (
        <>
            <Text style={styles.header}>📘 New Diary Entry</Text>
            <View style={styles.container}>
                <View style={styles.containerTwo}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Location of vacation</Text>
                        <TextInput
                            style={styles.basicInput}
                            value={formData.location}
                            onChangeText={(text) => setFormData({ ...formData, location: text })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Banner image</Text>
                        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
                            {formData.image ? (
                                <Image source={{ uri: formData.image }} style={styles.image} />
                            ) : (
                                <Text style={styles.plus}>+</Text>
                            )}
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Duration</Text>
                        <TextInput
                            style={styles.basicInput}
                            value={formData.duration}
                            onChangeText={(text) => setFormData({ ...formData, duration: text })}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Diary entry</Text>
                        <TextInput
                            style={styles.DiaryInput}
                            multiline
                            value={formData.diaryEntry}
                            onChangeText={(text) => setFormData({ ...formData, diaryEntry: text })}
                        />
                    </View>

                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>SUBMIT</Text>
                    </TouchableOpacity>
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
    containerTwo: {
        height: '100%',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20,
    },
    inputContainer: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    basicInput: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    DiaryInput: {
        width: '100%',
        height: 130,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        fontSize: 18,
        fontWeight: 'bold',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    imagePicker: {
        width: '100%',
        height: 160,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 1.41,
        elevation: 3,
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    plus: {
        fontSize: 40,
        color: '#999',
    },
    submitButton: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
