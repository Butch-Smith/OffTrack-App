import { View, Text, TextInput, Pressable, StyleSheet, Button, Image, ImageBackground } from 'react-native'
import { useRouter } from 'expo-router'

export default function login() {
    const router = useRouter()

    return (<>
        <ImageBackground source={require("../../../assets/images/loginscr.png")} resizeMode='cover' style={styles.bgImage}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../../assets/images/OffTracklogo.png")} />
            </View>
            <View style={styles.formContainer}>
            <Pressable>
                    <TextInput placeholder='Email adress' style={styles.textInput}></TextInput>
                </Pressable>
                <Pressable>
                    <TextInput placeholder='Password' style={styles.textInput}></TextInput>
                </Pressable>
                <Pressable>
                    <Text style={styles.loginButton} onPress={() => router.push("/screens/tabs/home")}>LOGIN</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.smallButton} onPress={() => router.push("/screens/auth/register")}>Don't have an account? Sign up</Text>
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
        marginRight: "auto"
    },
    formContainer: {
        width: '100%',
        gap: 16,
        height: "fit-content",
        marginBottom : 34,
    },
    loginButton: {
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        padding: 10,
        borderRadius: 50,
        fontSize: 16,
        fontWeight: 'bold',
    },
    smallButton: {
        width: "100%",
        position: 'absolute',
        textAlign: 'center',
        color: 'white',
        padding: 10,
        borderRadius: 50,
        fontSize: 14,
        fontWeight: 'bold',
    },
    textInput: {
        textAlign: 'start',
        backgroundColor: 'white',
        color: 'black',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 0.9
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