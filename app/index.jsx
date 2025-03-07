import { View, Text, Pressable, StyleSheet, Button, Image, ImageBackground } from 'react-native'
import { useRouter } from 'expo-router'

export default function App() {
    const router = useRouter()

    return (<>
        <ImageBackground source={require("../assets/images/welcomescr.png")} resizeMode='cover' style={styles.bgImage}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/images/OffTracklogo.png")} />
            </View>
            <Text style={styles.welcomeText}>Explore a new world with us</Text>
            <View style={styles.buttonContainer}>
                <Pressable>
                    <Text style={styles.homeButton} onPress={() => router.push("/screens/auth/register")}>REGISTER</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.homeButton} onPress={() => router.push("/screens/auth/login")}>LOGIN</Text>
                </Pressable>
            </View>
        </ImageBackground>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImage: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 22,
        paddingVertical: 40 
    },
    welcomeText: {
        width: '70%',
        fontSize: 45,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 100,
        marginRight: "auto",

    },
    buttonContainer: {
        width: '100%',
        gap: 16,
        height: "fit-content",
        marginBottom : 34,
    },
    homeButton: {
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        padding: 10,
        borderRadius: 50,
        fontSize: 16,
        fontWeight: 'bold',
    },
    logo: {
        width: 200,
        resizeMode: 'contain'
    },
    logoContainer: {
        width: "100%",
        flex: 1,
        justifyContent: 'start'
    }
})