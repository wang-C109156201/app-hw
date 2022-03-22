import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking } from 'react-native';

const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    price,
    url,
    image,
    description
  } = route.params;
  return (
    <ScrollView style={styles.bgcolorStyle}>
      <View style={styles.imageboxStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={styles.cardContainerStyle}>
        <Text style={styles.discountStyle} >Yves Saint Laurent</Text>
        <Text style={styles.authorStyle}>Suzy Menkes</Text>
        {/*<Text style={styles.priceStyle} >Price: ${price}</Text>*/}
      
      </View>
      <View style={styles.cardContainerStyle}>
        <Text style={{lineHeight: 25,textAlign: 'center'}}>{'\t'}{description}</Text>
      </View>
      <View style={styles.ButtomStyle}>
        <Button 
          onPress={() => Linking.openURL(url)}
          title="Buy  Now  FOR  $46.99"
          color="#6200EE" 
        />   
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  bgcolorStyle:{
    backgroundColor:"#fff"
  },
  imageStyle: {
    height: 370,
    width:270,
    flexDirection:"row",
    justifyContent:"center",
    marginTop:8,
    backgroundColor: '#fff',
   
  },
  imageboxStyle: {
    flexDirection:"row",
    justifyContent:"center",
    alignItems: 'center',
    marginTop:10,
    backgroundColor: '#fff',
   
  },
  ButtomStyle: {
    backgroundColor:"#fff",
    marginHorizontal:130,
    borderRadius:5,
    
  },
  cardContainerStyle: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10
  },
  discountStyle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  authorStyle: {
    color: '#666666',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 10,
  }
});

export default DetailScreen;