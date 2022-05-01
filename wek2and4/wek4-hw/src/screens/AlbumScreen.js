import React from "react";
import { Box } from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
import {  StyleSheet } from "react-native";

const AlbumScreen = ({ navigation }) => {
  return (
    <Box style={{backgroundColor: 'white'}}>
      <AlbumList 
        list={albumData.data}
        navigation={navigation}
      />
    </Box>
  );
};

export default AlbumScreen;
