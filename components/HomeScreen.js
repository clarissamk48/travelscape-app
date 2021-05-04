import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import '../App';

class HomeScreen extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Image source={require('../assets/images/mountains.jpg')} style={{width: '100%', height: 400, marginTop: -375}}></Image>
            <Text style={styles.TitleText}>WELCOME TO TRAVELSCAPE</Text>
            <Text style={styles.SmallTitleText}>EXPLORE PENNSYLVANIA TODAY</Text>
  
            <View style={styles.SearchBox}/>
            <TextInput style={styles.SearchText} placeholder="Where would you like to go?"/>
            
            <Feather onPress={() => {alert('Menu function is currently disabled. Please check back later!');}} name={'menu'} size={30} color="#737577" style={{position: 'absolute', top: 20, left: 30}}/>
            <Feather onPress={() => {alert('No new notifications.');}} name={'bell'} size={30} color="#737577" style={{position: 'absolute', top: 20, right: 30}} />   
            <Feather onPress={() => {alert('Search function is currently disabled. Please check back later!');}} name={'search'} size={20} color="#737577" style={{position: 'absolute', top: 268, right: 35}} />  
  
            <Text style={styles.SpotlightText}>SPOTLIGHT</Text>
            <Text style={styles.TownText}>JIM THORPE, PA</Text>
            <Text style={styles.ParagraphText}>Jim Thorpe, PA is consistently ranked on national media “Best” lists, 
            and recognized among the most fun, most beautiful, most romantic and best adventure towns to visit.
            You’ll enjoy the walkable downtown’s accommodations, shops, restaurants, pubs, wine-tasting and live entertainment, 
            as well as all the outdoor adventures you'd expect! Jim Thorpe is perfect for a weekend 
            jaunt or an extended stay vacation - so come visit today!</Text>

          </View>
        )

    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    TitleText: {
      position: 'absolute', 
      paddingBottom: 455, 
      fontSize: 45,
      fontWeight: 'bold',
      textAlign: 'center', 
      width: '100%', 
      color: '#F4F7FA'
    },
  
    SmallTitleText: {
      position: 'absolute',
      paddingBottom: 285,
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold'
    },
  
    SearchBox: {
      width: 365,
      height: 55,
      position: 'absolute',
      backgroundColor: '#FFFFFF',
      top: 250,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
      borderTopLeftRadius: 40,
      borderBottomLeftRadius: 40,
    },
  
    SearchText: {
      position: 'absolute',
      top: 252,
      left: 40,
      color: '#737577'
    },
  
    SpotlightText: {
      position: 'absolute',
      color: '#000000',
      width: '100%',
      fontSize: 25,
      fontWeight: 'bold',
      fontStyle: 'italic',
      top: 365,
      left: 25,
      color: '#737577',
    },
  
    TownText: {
      position: 'absolute',
      left: 25,
      top: 395,
      fontSize: 40,
      fontStyle: 'italic',
      color: '#F39C12'
    },
  
    ParagraphText: {
      position: 'absolute',
      top: 470,
      left: 25,
      width: 350,
      lineHeight: 20
    }

  
  });
  
  
  

  export default HomeScreen;
  