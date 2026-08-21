import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    // Use Safe Area Provider to ensure that the app content is rendered within the safe area boundaries of a device.
    <SafeAreaProvider>
      {/* Use Safe Area View as well, a component that provides a safe area for the app content */}
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ title: "Feed", headerShown: false }}
          />
          <Stack.Screen name="profile" options={{ title: "Profile" }} />
          <Stack.Screen
            name="notifications"
            options={{ title: "Notifications" }}
          />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
