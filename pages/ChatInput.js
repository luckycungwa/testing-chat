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

const ChatInput = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <View style={styles.imoji}/>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          onChange={(e) => setSearchQuery(e.target.value)} // Handle user input changes
        />
        
        {/* <View style={styles.sendhBtn}></View> */}
        <View style={styles.chatFeatures}>
          <View style={styles.camera} />
          <View style={styles.uploadMedia} />
          
        </View>
        <View style={styles.sendhBtn}>
        <View style={styles.mic} />
        </View>

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
  leftView: {
    backgroundColor: "#3196c8",
    height: 70,
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
    width: "100%",
    borderColor: "#141414",
    borderWidth: 1.5,
    borderRadius: 0,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 25,
  },
  sendhBtn: {
    Color: "#93e6ff",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },
  inputText: {
    fontSize: 14,
    flex: 1,
    color: "#2d2d2d",
    flexWrap: "wrap",
  },
  chatFeatures: {
    flexDirection: "row",
    flex: 1,
    // position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    
  },
  imoji: {
    height: 24,
    width: 24,
    backgroundColor: "#26262621",
    borderRadius: "50%",
    marginRight: 12,
  },
  camera: {
    height: 24,
    width: 24,
    backgroundColor: "#fa0c0c1f",
    borderRadius: "50%",
    marginHorizontal: 8,
  },
  uploadMedia: {
    height: 24,
    width: 24,
    backgroundColor: "#09ff0020",
    borderRadius: "50%",
  },
  mic: {
    height: 24,
    width: 24,
    backgroundColor: "#26262621",
    borderRadius: "50%",
    // marginHorizontal: 12,
  },
});
export default ChatInput;
