import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
    screenOptions={{
      headerShown:false
     }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name='signup' />
      <Stack.Screen name='login' />
    </Stack>
  );
}
