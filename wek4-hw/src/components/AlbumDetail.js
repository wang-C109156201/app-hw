import React from "react";
import { ScrollView } from "native-base";
import { StyleSheet, View, Image,Box, HStack, VStack, AspectRatio, Text, Pressable } from "react-native"

const AlbumDetail = props => {
  let { album,navigation } = props;
  return (
     <ScrollView  style={{backgroundColor: 'white'}}>
       
       <View style={styles.cardSectionStyle}>
       <Pressable 
            onPress={() => navigation.navigate('Detail', album)}
          >
         <Image
           style={styles.imageStyle}
           source={{uri: album.image}}
         />
        </Pressable> 
       </View>
       <View style={[styles.thumbnailContainerStyle, 
                     styles.cardSectionStyle]}>
         <View style={styles.headerContentStyle}>
           <Text style={styles.titleStyle}>{album.title}</Text>
           <Text style={{color: 'gray'}}>{album.artist}</Text>
         </View>
       </View>
     </ScrollView >
 )};

const styles = StyleSheet.create({
 thumbnailContainerStyle: {
   flexDirection: "row",
   justifyContent: "flex-start",
   backgroundColor: "#fff",
 },
 thumbnailStyle: {
   height: 50,
   width: 50,
   margin: 5
 },
 headerContentStyle: {
   flexDirection: "column",
   justifyContent: "space-around",
   
 },
 
 cardSectionStyle: {
   padding: 5,
   backgroundColor: "#fff",
   borderColor: "#fff",
   borderBottomWidth: 1,
   
 },
 titleStyle: {
  fontSize:20,
  fontWeight:"700",
  paddingBottom:5,
  },
 imageStyle: {
   height:250,
   width: 165,
   borderRadius:5,
 }
});
export default AlbumDetail;