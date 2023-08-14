import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Image,
} from "react-native-web";

const HomeSearchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)} // Handle user input changes
      />
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            style={styles.searchIcon}
            source={{
              uri: "https://thenounproject.com/api/private/icons/5959186/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 8,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 24,
  },
  input: {
    height: 40,
    width: "84%",
    borderColor: "#141414",
    borderWidth: 1.5,
    borderRadius: 0,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  searchBtn: {
    Color: "#93e6ff",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },
  searchIcon: {
    width: 30,
    height: 30,
    zIndex: 4,
  },
  ctaText: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  actionContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    backgroundColor: "#a7d3ff",
    // borderRadius: 24,
    // marginTop: 12,
  },
});
export default HomeSearchbar;
