import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Notification({ image, userName, message }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.notifText}>
                <Text style={styles.headerText}>{userName} posted:</Text>
                <Text style={styles.messageText}>{message}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: '#F5F5F5',
        backgroundColor: 'white',
        gap: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        borderRadius: 50,

    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    messageText: {
        color: '#A5A5A5',
        marginTop: 5,
    }
}
)