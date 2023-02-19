import React, { useState, useEffect } from "react"
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from "react-native"
import Card from "../components/Card"
import styles from "../MyStyling"
import axios from "axios"
const base_url = "https://smiling-suit-moth.cyclic.app"


export default function Home({ navigation , route}) {
  let obj = route.params 
  console.log(obj)

  let movetoPolice = (route) => {
    navigation.navigate(route ,{category : "Police" , name : obj.first_name})
  }
  let movetoAmbulance = (route) => {
    navigation.navigate(route  , {category : "Ambulance" , name : obj.first_name})
  }
  let movetoFireBrigade = (route) => {
    navigation.navigate(route  , {category : "Fire Brigade" , name : obj.first_name})
  }


  return (
    <View>
      <Image source={{ uri: 'https://www.pngfind.com/pngs/m/557-5579045_24-7-emergency-service-logo-hd-png-download.png' }} style={{ width: 380, height: 350, marginBottom: 50 }} />
      <TouchableOpacity style={{ margin: 20, display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "red", borderRadius: 15 }}  onPress={() => movetoPolice('LiveLocation')} ><Text style={styles.button}>Police</Text></TouchableOpacity>
      <TouchableOpacity style={{ margin: 20, display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "red", borderRadius: 15 }} onPress={() => movetoAmbulance('LiveLocation')} ><Text style={styles.button}>Ambulance</Text></TouchableOpacity>
      <TouchableOpacity style={{ margin: 20, display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "red", borderRadius: 15 }} onPress={() => movetoFireBrigade('LiveLocation')} ><Text style={styles.button}>Fire Brigade</Text></TouchableOpacity>

    </View>
  )
}
