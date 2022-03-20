import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "./wek4-hw/src/components/Header";
import AlbumList from "./wek4-hw/src/components/AlbumList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
