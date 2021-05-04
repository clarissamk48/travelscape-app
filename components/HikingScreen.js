import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import '../App';


class HikingScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <ScrollView>
            <Image source={require('../assets/images/hiking.jpg')} style={{width: '100%', height: 400}}></Image>
            <Feather onPress={() => {alert('Menu function is currently disabled. Please check back later!');}} name={'menu'} size={30} color="#FFFFFF" style={{position: 'absolute', top: 20, left: 30}}/>
            <Feather onPress={() => {alert('No new notifications.');}} name={'bell'} size={30} color="#FFFFFF" style={{position: 'absolute', top: 20, right: 30}} />  
            <Text style={styles.HikingTitle}>TOP 10 TRAILS IN PENNSYLVANIA</Text>
            <Text style={styles.SchuylkillTitle}>1. SCHUYLKILL RIVER TRAIL</Text>
            <Text style={styles.SchuylkillText}>The Schuylkill River Trail is a multi-use trail in Southeastern Pennsylvania 
            with a projected length of almost 130 miles between Philadelphia and Pottsville. 
            There are currently more than 60 miles complete in sections, including a 30-plus mile 
            stretch from Philadelphia to Parkerford. From there, cyclists can follow a 20-mile 
            signed on-road route to Hamburg. In Hamburg, trail users can access a scenic seven-mile 
            stretch to Auburn in Schuylkill County. The trail is a great way to enjoy the outdoors, 
            exercise, or commute.</Text>

            <Text style={styles.ShamokinTitle}>2. THE GREAT SHAMOKIN PATH</Text>
            <Text style={styles.ShamokinText}>Tracing a section of the abandoned 
            Rural Valley Railroad corridor, the Great Shamokin Path parallels the Cowanshannock 
            Creek for 3.5 miles. Once a major trail that connected the two largest Native American 
            towns in Pennsylvania, hikers can walk along the trail for views of western Pennsylvania.</Text>

            <Text style={styles.StandingTitle}>3. STANDING STONE TRAIL</Text>
            <Text style={styles.StandingText}>The Standing Stone Trail is a hiking trail stretching 
            84 miles through Fulton, Huntingdon, and Mifflin counties; the trail traverses central 
            Pennsylvania ridges and valleys from Cowans Gap State Park in the south, to Rothrock 
            State Forest’s Detweiler Natural Area and the Mid-State Trail in the north. 
            It was also named the state’s 2016 Trail of the Year. Standing Stone Trail is part 
            of the 1,600-mile Great Eastern Trail, which starts at Flagg Mountain, Ala., and extends 
            to the Finger Lakes Trail in New York. More than 80 percent of the trail traverses state 
            owned forest and Pa. Game Commission game lands. The popular Thousand Steps portion of the 
            trail is located near Mount Union.</Text>

            <Text style={styles.LaurelTitle}>4. LAUREL HIGHLANDS HIKING TRAIL</Text>
            <Text style={styles.LaurelText}>Enjoy the picturesque Youghiogheny River and the 
            Laurel Mountain during a hike along this 70-mile trail. A stop at Ohiopyle State 
            Park offers breathtaking views and waterfalls to explore.</Text>

            <Text style={styles.PresqueTitle}>5. PRESQUE ISLE STATE PARK</Text>
            <Text style={styles.PresqueText}>Presque Isle State Park offers 10 miles of hiking 
            trails that will take you through scenic views of Pennsylvania’s only seashore. 
            These sandy trails offer hikers a glimpse at the beautiful coastline of this 
            National Natural Landmark, known as a favorite spot for migrating birds.</Text>

            <Text style={styles.QuehannaTitle}>6. QUEHANNA TRAIL</Text>
            <Text style={styles.QuehannaText}>The Quehanna Trail is a 75-mile loop hiking 
            trail in the Moshannon and Elk State Forests. The Trail passes through some 
            of the most wild and beautiful country Pennsylvania has to offer. 
            The main orange blazed trail begins on the western end at Parker Dam State Park. 
            From Parker Dam the trail goes east into the Quehanna Wild Area toward Karthaus and Piper, 
            then north toward Sinnemahoning and finally west through the Marion Brooks Natural Area 
            back to Parker Dam.</Text>

            <Text style={styles.AlleghenyTitle}>7. ALLEGHENY NATIONAL FOREST</Text>
            <Text style={styles.AlleghenyText}>Hikers can head to the Allegheny National Forest, 
            the only national forest in Pennsylvania, to enjoy scenic views along more than 200 miles 
            of trails. The North Country National Scenic Trail is the longest trail in the Allegheny
            National Forest at 96.3 miles long and is one of three designated National Scenic Trails in Pennsylvania. 
            This trail takes visitors to vistas of the Allegheny Reservoir passing through rock outcroppings, 
            open hardwoods, old growth forests and stands of hemlock.</Text>

            <Text style={styles.PineTitle}>8. PINE GROVE FURNACE STATE PARK</Text>
            <Text style={styles.PineText}>Nestled deep in Michaux State Forest near Chambersburg, 
            Pine Grove Furnace State Park is a perfect spot for an outdoor adventure! 
            Featuring four miles of looping trails, scenic overlooks, and Laurel and Fuller lakes, 
            the park’s wooded, mountainous atmosphere attracts hikers of all skill levels. 
            The Pole Steeple Trail, the most famous in the park, is a steep, .75 mile trail that 
            ends at the Pole Steeple Overlook, a quartzite outcropping that overlooks the entire park 
            and the surrounding valleys.</Text>

            <Text style={styles.RickettsTitle}>9. RICKETTS GLEN STATE PARK</Text>
            <Text style={styles.RickettsText}>A National Natural Landmark, Ricketts Glen State Park 
            is best characterized by the Falls Trail System, a difficult, 7.2 mile trail that provides 
            views of 22 named waterfalls. Ranging from 11 feet to the towering 94-foot Ganoga Falls, 
            the waterfalls are each unique and provide tranquil resting stops along the rocky trail. 
            Other trails roam through the park’s 13,193 acres, including the short Beach Trail that runs 
            by the park’s swimming area and the Grand View Trial, which leads to the highest point on 
            Red Rock Mountain. Each of the 26 miles of trails offers something different and are well 
            worth the challenge.</Text>

            <Text style={styles.DelawareTitle}>10. D&L RAIL TRAIL</Text>
            <Text style={styles.DelawareText}>The varied trail surfaces and beautiful surroundings 
            are what make the unique D&H Rail Trail a treat for any outdoor enthusiast. 
            This 38-mile pathway stands in place of the historic Delaware and Hudson railroad, 
            a small but vital rail line during the 1800s. The multi-use trail runs for several miles 
            along the Lackawanna River and alternates between tree-lined sections and open stretches.</Text>
          </ScrollView>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    HikingTitle: {
        position: 'absolute',
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 20
    },

    SchuylkillTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        left: 25,
        marginTop: 10
    },

    SchuylkillText: {
        width: 350,
        left: 25,
        lineHeight: 20,
        marginTop: 5
    },

    ShamokinTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        left: 25,
        marginTop: 10
    },

    ShamokinText: {
        width: 350,
        left: 25,
        lineHeight: 20,
        marginTop: 5
    },

    StandingTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        left: 25,
        marginTop: 10
    },

    StandingText: {
        width: 350,
        left: 25,
        lineHeight: 20,
        marginTop: 5
    },

    LaurelTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        left: 25,
        marginTop: 10
    },

    LaurelText: {
        width: 350,
        left: 25,
        lineHeight: 20,
        marginTop: 5
    },

    PresqueTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        left: 25,
        marginTop: 10
    },

    PresqueText: {
        width: 350,
        left: 25,
        lineHeight: 20,
        marginTop: 5
    },

    QuehannaTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        left: 25,
        marginTop: 10
    },

    QuehannaText: {
        width: 350,
        left: 25,
        lineHeight: 20,
        marginTop: 5
    },

    AlleghenyTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        left: 25,
        marginTop: 10
    },

    AlleghenyText: {
        width: 350,
        left: 25,
        lineHeight: 20,
        marginTop: 5
    },

    PineTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        left: 25,
        marginTop: 10
    },

    PineText: {
        width: 350,
        left: 25,
        lineHeight: 20,
        marginTop: 5
    },

    RickettsTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        left: 25,
        marginTop: 10
    },

    RickettsText: {
        width: 350,
        left: 25,
        lineHeight: 20,
        marginTop: 5
    },

    DelawareTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        left: 25,
        marginTop: 10
    },

    DelawareText: {
        width: 350,
        left: 25,
        lineHeight: 20,
        marginTop: 5,
        marginBottom: 10
    }
});

    export default HikingScreen;