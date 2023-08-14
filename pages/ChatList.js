import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native-web";
import ChatItem from "./ChatItem";
import HomeSearchbar from "./HomeSearchbar";
import ChatInput from "./ChatInput";

const ChatList = () => {
  return (
    <View style={styles.container}>
    
    {/* Sccroll view | mobile scroll for more content */}
    <HomeSearchbar/>
    {/* <ChatInput/> */}
      <ScrollView scrollEnabled={true} style={styles.scrollView}>

      
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#26262621",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  //   DEBUG SCROLL VIEW TO TEST FLAT LIST NTON NTON
scrollView: {
    backgroundColor: '#ffd89d',
    marginHorizontal: 12,
  },

});

export default ChatList;
