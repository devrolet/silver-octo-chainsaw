import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello,</Text>
      <Text>Welcome to The Olorun Universe!</Text>
      {/* Shows a simple opacity touch upon interaction */}
      <TouchableOpacity onPress={() => alert("Dont get touched")}>
        <Text>Login</Text>
      </TouchableOpacity>

      {/* A simple pressable button component */}
      <Pressable onPress={() => alert("They super pressed")}>
        <Text>Press Me</Text>
      </Pressable>

      {/* Displays an image from local source */}
      <Image
        source={require("../../assets/images/icon.png")}
        style={{ width: 200, height: 200 }}
      />

      {/* Displays an image from remote/online source */}
      {/* 
        <Image
          source={{ uri: "https://example.com/path/to/your/image.png" }}
          style={{ width: 200, height: 200 }}
        />
      */}
    </View>
  );
}
