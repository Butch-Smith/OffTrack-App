import { View, Text, StatusBar, TextInput, Pressable, StyleSheet, Button, Image, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (!email || !password) {
            setError('All fields are required');
            return;
        }
        setError('');
        // Handle login logic here
        router.push("/screens/tabs/home");
    };

    return (
        <>
            <StatusBar backgroundColor="#212121" barStyle="light-content" />
            <ImageBackground source={require("../../../assets/images/loginscr.png")} resizeMode='cover' style={styles.bgImage}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../../../assets/images/OffTracklogo.png")} />
                </View>
                <View style={styles.formContainer}>
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                    <TextInput 
                        placeholder='Email address' 
                        style={styles.textInput} 
                        value={email} 
                        onChangeText={setEmail}
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />
                    <TextInput 
                        placeholder='Password' 
                        style={styles.textInput} 
                        value={password} 
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <Pressable onPress={handleSubmit}>
                        <Text style={styles.loginButton}>LOGIN</Text>
                    </Pressable>
                    <Pressable onPress={() => router.push("/screens/auth/register")}>
                        <Text style={styles.smallButton}>Don't have an account? Sign up</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </>
    );
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
        paddingVertical: 40,
    },
    welcomeText: {
        width: '70%',
        fontSize: 45,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 100,
        marginRight: "auto",
    },
    formContainer: {
        width: '100%',
        gap: 16,
        height: "fit-content",
        marginBottom: 34,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 14,
        fontWeight: 'bold',
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
        opacity: 0.9,
    },
    logo: {
        width: 200,
        resizeMode: 'contain',
    },
    logoContainer: {
        width: "100%",
        flex: 1,
        justifyContent: 'start',
    },
});
