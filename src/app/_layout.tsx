import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    // Use Safe Area Provider to ensure that the app content is rendered within the safe area boundaries of a device.
    <SafeAreaProvider>
      {/* Use Safe Area View as well, a component that provides a safe area for the app content */}
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
