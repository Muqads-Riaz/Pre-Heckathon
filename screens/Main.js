import React , { useState , useEffect } from "react"
import { View, Text , Image, Button , TouchableOpacity} from "react-native"
import styles from "../MyStyling"

export default function Main({navigation}) {
  let movetoScreen = (route)=>{
    navigation.navigate(route)
  }
  return (
    <View>
     <Image source={{uri:'https://w7.pngwing.com/pngs/429/539/png-transparent-emergency-alert-system-emergency-management-emergency-broadcast-system-disaster-emergency-s-ambulance-emergency-vehicle-911.png'}} style={{width: 400, height: 550 }}/>
  <Text style={{color: 'grey' , fontSize: 28 , marginLeft : 20 , marginTop:10 }}>Safe and</Text>
  <Text style={{color: 'grey' , fontSize: 28,marginLeft : 20  }}>Quick Pakistan</Text>
  <Text style={{color: 'grey' , fontSize: 15,marginHorizontal : 20 , marginTop:15 }}>Our Services offer you secure and safe life</Text>
  <TouchableOpacity style={{margin: 20 , display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"red" , borderRadius: 15}} onPress={()=>movetoScreen('Login')} ><Text style={styles.button}>Get Started</Text></TouchableOpacity>
  </View>
  )
}