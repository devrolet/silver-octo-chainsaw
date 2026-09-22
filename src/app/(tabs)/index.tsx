import { Link } from "expo-router";
import { View } from "react-native";
import { styles } from "../../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Links to pages */}
      <Link href="/profile">profile</Link>
      <Link href="/notifications">notifications</Link>
    </View>
  );
}
