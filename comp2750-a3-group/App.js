import React from "react";
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker'; 

export default function App() {


  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.row1}>
    <Text style={styles.heading}>POGS</Text>
    </View>

    <View style={{justifyContent: 'center', alignContent: 'center'}}>
    <Image 
      style={styles.banner1} 
      source={require('./assets/illustration-organic-farming-concept-with-farmer_23-2148424155.jpg')}
    />
    </View>

  </SafeAreaView>
  );}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffcc'
    },
      heading: {
        fontSize:30,
        textAlign:'center',
        marginTop: 30
      },
  });
