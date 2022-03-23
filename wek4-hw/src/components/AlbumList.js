import React from "react";
import { FlatList ,SectionList,StyleSheet,Text } from "react-native";
import AlbumDetail from "./AlbumDetail";
import sections from "../json/albums.json";

const AlbumList = ({ list, navigation,album }) => {
  const renderSectionHeader = ({section}) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      {section.horizontal ? (
        <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <AlbumDetail navigation={navigation} album={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
      ) : null}
    </>
  );
  const renderItem = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }
    return <AlbumDetail navigation={navigation}  album={item} />
  };
  return (
    <SectionList 
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 10 ,paddingBottom:40,paddingTop:0,backgroundColor:"white"}}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  );
};
const styles = StyleSheet.create({
  sectionHeader: {
    fontFamily:'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 8,
    paddingLeft: 10,
    backgroundColor:"white",
    
  },
})
export default AlbumList;

