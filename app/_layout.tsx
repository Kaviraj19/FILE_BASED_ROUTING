import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{
     headerShown:false
    }}>
      <Stack.Screen  name="(Welcome)" />
      <Stack.Screen  name="(home)" />
    </Stack>
  );
}