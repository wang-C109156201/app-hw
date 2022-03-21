import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const AlbumDetail = ({ album, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} shadow={2}>
      <HStack bg='#fff'>
        <AspectRatio w="50" ratio={1}>
          <Image
            margin="1"
            source={{ uri: album.thumbnail_image }}
            alt="artist"
          />
        </AspectRatio>
        <VStack paddingLeft={2} justifyContent="space-around">
          <Text>{album.title}</Text>
          <Text>{album.artist}</Text>
        </VStack>
      </HStack>
      <Box p={1} bg="#fff">
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio w="100%" ratio={1}>
            <Image
              source={{ uri: album.image }}
              alt="album"
            />            
          </AspectRatio>
        </Pressable>
      </Box>   
    </Box>
  )};

export default AlbumDetail;
