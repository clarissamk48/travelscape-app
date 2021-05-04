import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import '../App';

class EntertainmentScreen extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <ScrollView>
              <Image source={require('../assets/images/concert.jpg')} style={{width: '100%', height: 300}}></Image>
              <Feather onPress={() => {alert('Menu function is currently disabled. Please check back later!');}} name={'menu'} size={30} color="#FFFFFF" style={{position: 'absolute', top: 20, left: 30}}/>
              <Feather onPress={() => {alert('No new notifications.');}} name={'bell'} size={30} color="#FFFFFF" style={{position: 'absolute', top: 20, right: 30}} />  
              <Text style={styles.UpcomingTitle}>SHOWS</Text>

              <Text style={styles.DoobieBrothersTitle}>1. THE DOOBIE BROTHERS</Text>
              <Text style={styles.DoobieBrothersSubTitle}>PPL CENTER | ALLENTOWN, PA</Text>
              <Text style={styles.DoobieBrothersSubTwoTitle}>JUNE 26, 2020 @ 7:30 PM</Text>

              <Text style={styles.MethodRedManTitle}>2. METHOD MAN + REDMAN</Text>
              <Text style={styles.MethodRedManSubTitle}>THE ELECTRIC FACTORY | PHILADELPHIA, PA</Text>
              <Text style={styles.MethodRedManSubTwoTitle}>JUNE 29, 2020 @ 8:00 PM</Text>

              <Text style={styles.DaveMatthewsTitle}>3. DAVE MATTHEWS TRIBUTE BAND</Text>
              <Text style={styles.DaveMatthewsSubTitle}>MAUCH CHUNK OPERA HOUSE | JIM THORPE, PA</Text>
              <Text style={styles.DaveMatthewsSubTwoTitle}>JULY 10, 2020 @ 8:00 PM</Text>

              <Text style={styles.LynyrdTitle}>4. LYNYRD SKYNYRD</Text>
              <Text style={styles.DaveMatthewsSubTitle}>PPL CENTER | ALLENTOWN, PA</Text>
              <Text style={styles.DaveMatthewsSubTwoTitle}>SEPTEMBER 11, 2020 @ 7:30 PM</Text>

              <Text style={styles.RichVosTitle}>5. RICH VOS COMEDY SHOW</Text>
              <Text style={styles.RichVosSubTitle}>MAUCH CHUNK OPERA HOUSE | JIM THORPE, PA</Text>
              <Text style={styles.RichVosSubTwoTitle}>SEPTEMBER 25, 2020 @ 8:00 PM</Text>

              <Text style={styles.ChicagoTitle}>6. CHICAGO</Text>
              <Text style={styles.ChicagoSubTitle}>BLOOMSBURG FAIR | BLOOMSBURG, PA</Text>
              <Text style={styles.ChicagoSubTwoTitle}>OCTOBER 2, 2020 @ 8:00 PM</Text>

              <Text style={styles.TenaciousDTitle}>7. TENACIOUS D</Text>
              <Text style={styles.TenaciousDSubTitle}>THE MET PHILADELPHIA | PHILADELPHIA PA</Text>
              <Text style={styles.TenaciousDSubTwoTitle}>OCTOBER 7, 2020 @ 8:00 PM</Text>

              <Text style={styles.ThirtyEightTitle}>8. 38 SPECIAL</Text>
              <Text style={styles.ThirtyEightSubTitle}>PENNS PEAK | JIM THORPE, PA</Text>
              <Text style={styles.ThirtyEightSubTwoTitle}>OCTOBER 9, 2020 @ 8:00 PM</Text>

              <Text style={styles.McCartneyTitle}>9. THE MCCARTNEY YEARS</Text>
              <Text style={styles.McCartneySubTitle}>KESWICK THEATRE | GLENSIDE, PA</Text>
              <Text style={styles.McCartneySubTwoTitle}>NOVEMBER 20, 2020 @ 8:00 PM</Text>

              <Text style={styles.TemptationsTitle}>10. THE TEMPTATIONS</Text>
              <Text style={styles.TemptationsSubTitle}>THE MET PHILADELPHIA | PHILADELPHIA, PA</Text>
              <Text style={styles.TemptationsSubTwoTitle}>MAY 8, 2021 @ 8:00 PM</Text>
            </ScrollView>
          </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF'
    }, 

    UpcomingTitle: {
      position: 'absolute',
      fontWeight: 'bold',
      fontSize: 110,
      top: 50,
      letterSpacing: 1,
      color: '#E74C3C'
    },

    DoobieBrothersTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
      marginTop: 20
    },

    DoobieBrothersSubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35,
    },

    DoobieBrothersSubTwoTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35
    },

    MethodRedManTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
      marginTop: 20
    },

    MethodRedManSubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35,
    },

    MethodRedManSubTwoTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35
    },

    DaveMatthewsTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
      marginTop: 20
    },

    DaveMatthewsSubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35,
    },

    DaveMatthewsSubTwoTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35
    },

    LynyrdTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
      marginTop: 20
    },

    LynyrdSubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35,
    },

    LynrydSubTwoTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35
    },

    RichVosTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
      marginTop: 20
    },

    RichVosSubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35,
    },

    RichVosSubTwoTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35
    },

    ChicagoTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
      marginTop: 20
    },

    ChicagoSubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35,
    },

    ChicagoSubTwoTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35
    },

    TenaciousDTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
      marginTop: 20
    },

    TenaciousDSubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35,
    },

    TenaciousDSubTwoTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35
    },

    ThirtyEightTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
      marginTop: 20
    },

    ThirtyEightSubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35,
    },

    ThirtyEightSubTwoTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35
    },

    McCartneyTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
      marginTop: 20
    },

    McCartneySubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35,
    },

    McCartneySubTwoTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35
    },

    TemptationsTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 20,
      left: 15,
      marginTop: 20
    },

    TemptationsSubTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35,
    },

    TemptationsSubTwoTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      fontStyle: 'italic',
      color: '#E74C3C',
      left: 35,
      paddingBottom: 20
    },



});

export default EntertainmentScreen;