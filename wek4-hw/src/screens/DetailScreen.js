import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking } from 'react-native';
import Star from 'react-native-star-view';

const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    star,
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
        <Text style={styles.discountStyle} >{title}</Text>
        <Text style={styles.authorStyle}>{artist}</Text>
        {/*<Text style={styles.priceStyle} >Price: ${price}</Text>*/}
        <View style={{flexDirection:"row",justifyContent: 'center'}}>
            <Star score={star} style={styles.starStyle}/>
            <Text style={styles.fostarstyle}>{star}.0</Text>
            <Text style={styles.fistarstyle}>/5.0</Text>
          </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <Text style={{lineHeight: 30,textAlign: 'center',fontSize: 17}}>{'\t'}{description}</Text>
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
  starStyle:{
    width:86,
    height:18,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  startextStyle:{
    flexWrap:"nowrap",
  },
  imageStyle: {
    height: 370,
    width:270,
    flexDirection:"row",
    justifyContent:"center",
    marginTop:8,
    backgroundColor: '#fff',
    borderRadius:15,
   
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
    marginHorizontal:100,
    borderRadius:5,
    paddingTop:30,
  },
  cardContainerStyle: {
    backgroundColor: '#fff',
    marginTop:15,
    marginHorizontal: 7,
    
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