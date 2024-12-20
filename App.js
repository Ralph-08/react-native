import { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import NavigationBar from "./components/NavigationBar/NavigationBar";

export default function App() {
  const [count, setCount] = useState(0);

  const handleCountPress = (operation) => {
    if (operation === "+") {
      setCount(count + 1);
    } else if (operation === "-") {
      setCount(count - 1);
    } else {
      return;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleCountPress("+")}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{count}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleCountPress("-")}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bolder",
  },
  button: {
    backgroundColor: "deepskyblue",
    // padding: 16,
    // paddingHorizontal: 40,
    // margin: 16,
    // width: "50%",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 32,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
