import { Stack } from 'expo-router'
export default function layout() {
    return (<>
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="screens/auth/login" />
            <Stack.Screen name="screens/auth/register" />
            <Stack.Screen name="screens/detail" options={{ presentation: "modal", title: "Details" }} />
        </Stack>
    </>
    )
}
