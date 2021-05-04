import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import '../App';

class DiningScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <ScrollView>
            <Image source={require('../assets/images/burger.jpg')} style={{width: '100%', height: 400}}></Image>
            <Feather onPress={() => {alert('Menu function is currently disabled. Please check back later!');}} name={'menu'} size={30} color="#FFFFFF" style={{position: 'absolute', top: 20, left: 30}}/>
            <Feather onPress={() => {alert('No new notifications.');}} name={'bell'} size={30} color="#FFFFFF" style={{position: 'absolute', top: 20, right: 30}} />  
            <Text style={styles.DiningTitle}>HUNGRY?</Text>

            <Text style={styles.StoneRowTitle}>1. STONE ROW PUB & EATERY</Text>
            <Text style={styles.StoneRowSubTitle}>JIM THORPE, PA | AMERICAN GASTROPUB</Text>
            <Feather name={'dollar-sign'} size={15} color="#000000" style={{top: 5, left: 32}}></Feather>
            <Feather name={'dollar-sign'} size={15} color="#000000" style={{top: -11, left: 45}}></Feather>
            <Feather name={'dollar-sign'} size={15} color="#000000" style={{top: -27, left: 59}}></Feather>

            <Text style={styles.VictorTitle}>2. THE VICTOR CAFE</Text>
            <Text style={styles.VictorSubTitle}>PHILADELPHIA,PA | ITALIAN</Text>
            <Feather name={'dollar-sign'} size={15} color="#000000" style={{top: 5, left: 32}}></Feather>
            <Feather name={'dollar-sign'} size={15} color="#000000" style={{top: -11, left: 45}}></Feather>
            <Feather name={'dollar-sign'} size={15} color="#000000" style={{top: -27, left: 59}}></Feather>

            <Text style={styles.SakuraTitle}>3. SAKURA</Text>
            <Text style={styles.SakuraSubTitle}>LANCASTER, PA | SUSHI, ASIAN, JAPANESE </Text>
            <Feather name={'dollar-sign'} size={15} color="#000000" style={{top: 5, left: 32}}></Feather>
            <Feather name={'dollar-sign'} size={15} color="#000000" style={{top: -11, left: 45}}></Feather>
            <Feather name={'dollar-sign'} size={15} color="#000000" style={{top: -27, left: 59}}></Feather>

            <Text style={styles.TandorTitle}>4. TANDOR GRILL</Text>
            <Text style={styles.TandorSubTitle}>EASTON, PA | INDIAN </Text>
            <Feather name={'dollar-sign'} size={15} color="#000000" style={{top: 5, left: 32}}></Feather>
            <Feather name={'dollar-sign'} size={15} color="#000000" style={{top: -11, left: 45}}></Feather>

            <Text style={styles.BlueClawTitle}>5. BLUE CLAW CRAB EATERY</Text>
            <Text style={styles.BlueClawSubTitle}>BENSALEM, PA | SEAFOOD </Text>
            <Feather name={'dollar-sign'} size={15} color="#000000" style={{top: 5, left: 32}}></Feather>
            <Feather name={'dollar-sign'} size={15} color="#000000" style={{top: -11, left: 45}}></Feather>
            <Feather name={'dollar-sign'} size={15} color="#000000" style={{top: -27, left: 59}}></Feather>

          </ScrollView>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    DiningTitle: {
      position: 'absolute',
      fontSize: 85,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginTop: 20,
      left: 5,
      top: 295
    },

    StoneRowTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
      marginTop: 20
    },

    StoneRowSubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#737577',
      left: 35,
    },

    VictorTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
    },

    VictorSubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#737577',
      left: 35,
    },

    SakuraTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
    },

    SakuraSubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#737577',
      left: 35,
    },

    TandorTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
    },

    TandorSubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#737577',
      left: 35,
    },

    BlueClawTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
      marginTop: 15
    },

    BlueClawSubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#737577',
      left: 35,
    },


  });

  export default DiningScreen;