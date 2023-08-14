import React from "react";
import { StyleSheet, Text, View } from "react-native-web";

const ChatItem = () => {
  return (
    <View style={styles.container}>
      {/* <View style={StyleSheet.chatField}> */}
      <View style={styles.avatar} />
      <View style={styles.rightInfo}>
        <View style={styles.topInfo}>
          <Text style={styles.displayName}>User</Text>
          <Text style={styles.lastSeen}>16:00</Text>
        </View>

        <View style={styles.bottomInfo}>
          <Text style={styles.Textmessage} numberOfLines={1}>
            Hey, Z'khiphani on the CodeTribe full-time work based skills
            development programme? 123458697452
          </Text>
          {/* message notification counter */}
          <View style={styles.notifications}>
            <Text style={styles.countText}>2</Text>
          </View>
        </View>
        {/* </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 72,
    // width: "auto",
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    borderBottomColor: "#a7d3ff53",
    borderBottomWidth: 1.2,
  },
  avatar: {
    height: 42,
    width: 42,
    backgroundColor: "#26262621",
    borderRadius: "50%",
  },
  chatField: {
    flexDirection: "row",
    flex: 1,
  },
  topInfo: { flexDirection: "row", justifyContent: "space-between" },
  rightInfo: { flex: 1, marginLeft: 8, justifyContent: "center" },
  bottomInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  displayName: {
    fontSize: 12,
    textAlign: "left",
    fontWeight: "bold",
    letterSpacing: 0.2,
    // marginVertical: 6,
  },
  lastSeen: {
    fontSize: 10,
    fontWeight: "light",
    letterSpacing: 0.2,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 22,
    color: "#616161ac",
  },
  Textmessage: {
    fontSize: 10,
    flex: 1,
    color: "#2d2d2d",
    flexWrap: "wrap",
    width: 280,
    marginRight: 12,
  },
  notifications: {
    padding: 4,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    height: 14,
    width: 14,
    backgroundColor: "#a7d3ff",
    color: "#61616120",
    borderRadius: "50%",
  },
  countText: {
    fontSize: 8,
    fontWeight: "bold",
    letterSpacing: 0.2,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default ChatItem;
