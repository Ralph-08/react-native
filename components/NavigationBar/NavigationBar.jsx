import {
  View,
  Image,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";

export default function NavigationBar() {


    
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navButton} onPress={() => ""}>
        <Image
          source={require("../../assets/images/home.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => ""}>
        <Image
          source={require("../../assets/images/clock.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>Time</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => ""}>
        <Image
          source={require("../../assets/images/sheets.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>Timesheet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => ""}>
        <Image
          source={require("../../assets/images/user.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => ""}>
        <Image
          source={require("../../assets/images/menu.png")}
          style={styles.icon}
        />

        <Text style={styles.text}>More</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    paddingBottom: 30,
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -9 }, // Negative height for top shadow
    shadowOpacity: 0.12,
    shadowRadius: 4,
    ...Platform.select({
      android: {
        elevation: 4, // Elevation applies shadow uniformly
      },
    }),
  },
  navButton: {
    width: 70,
    paddingVertical: 10,
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    backgroundColor: "gray",
    width: 25,
    height: 25,
    borderRadius: 20,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
