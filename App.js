import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

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

        


        <View style={styles.HomeButtonContainer}>
            <Button title="Continue" />
        </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47ceff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  first_div: {
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 10,
  },

  first_div_letters: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },


  second_div: {
    marginTop: 20,
    borderWidth: 2,
    marginBottom: 30,
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 10,
  },

  second_div_letters: {
    fontWeight: 'bold'
  },



  HomeButtonContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#333',
    width: "80%"
  }

});
