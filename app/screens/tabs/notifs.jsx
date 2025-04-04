import { StyleSheet, StatusBar, Text, View, FlatList } from 'react-native'
import React from 'react'
import Notification from '../../components/Notification';

export default function notifsScreen() {
    const DATA = [
        {
            key: 1,
            image: require('../../../assets/images/nika.png'),
            username: 'Nika',
            content: 'nika desc',
        },
        {
            key: 2,
            image: require('../../../assets/images/rokue.png'),
            username: 'Rokue',
            content: 'rokue desc',
        },
        {
            key: 3,
            image: require('../../../assets/images/mio.png'),
            username: 'Mio',
            content: 'mio desc',
        },
        {
            key: 4,
            image: require('../../../assets/images/teruyuki.png'),
            username: 'Teruyuki',
            content: 'teruyuki desc',
        },
        {
            key: 5,
            image: require('../../../assets/images/saba.png'),
            username: 'Saba',
            content: 'saba desc',
        },
    ]
    return (<>
        <Text style={styles.header}>🔔 Notifications</Text>
        <View style={styles.container}>
            <FlatList
                data={DATA}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (
                    <Notification image={item.image} userName={item.username} message={item.content} />
                )}
            />
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