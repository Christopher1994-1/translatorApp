import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Easing, Animated, Image, SafeAreaView } from 'react-native';





export default function App() {

  return (
    <View style={styles.container}>

        <View style={styles.first_div}>
          <Text style={styles.first_div_letters}>Personal</Text>
          <Text style={styles.first_div_letters}>Interpreter</Text>
        </View>

        <View style={styles.second_div}>
          <Text style={styles.second_div_letters}>Translate easy and fast into 100+ languages!</Text>
        </View>


          <View style={styles.flags_div}>
            <Image
              source={require('./images/uk.png')}
              style={styles.image}/>

              <Image
              source={require('./images/jnjn.png')}
              style={styles.image2} resizeMode="stretch" />

            <Image
              source={require('./images/german.png')}
              style={styles.image3}/>
          </View>


        <View style={styles.HomeButtonContainer}>
            <Button title="Continue" />
        </View>
      
      <StatusBar style="auto" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47ceff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  first_div: {
    // borderWidth: 2,
    // borderColor: 'black',
    // borderStyle: 'solid',
    padding: 10,
  },

  first_div_letters: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },


  second_div: {
    marginTop: 20,
    marginBottom: 30,
    width: 300,
    padding: 10,
  },

  second_div_letters: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },



  HomeButtonContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#333',
    width: "80%",
    marginTop: 50,
  },



  flags_div: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 20
  },
  image2: {
    width: 70,
    height: 40,
    marginBottom: 20
  },
  image3: {
    width: 200,
    height: 100,
  },

});
