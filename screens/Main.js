import React , { useState , useEffect } from "react"
import { View, Text , Image, Button , TouchableOpacity} from "react-native"
import styles from "../MyStyling"

export default function Main({navigation}) {
  let movetoScreen = (route)=>{
    navigation.navigate(route)
  }
  return (
    <View>
    <View style={{ height: '65%',borderBottomRightRadius: 50,borderBottomLeftRadius: 50, backgroundColor:"darkgreen" , display:"flex" ,alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require("../Images/logo.png")} style={{width: 180 , height: 150  }}/>
        <Text style={{color: 'white' , fontSize: 70 }}>Plantify</Text>
  </View>
  <Text style={{color: 'green' , fontSize: 30 , marginLeft : 20 , marginTop:10 }}>Get Ready</Text>
  <Text style={{color: 'green' , fontSize: 30,marginLeft : 20  }}>Be Higyenic</Text>
  <Text style={{color: 'green' , fontSize: 15,marginHorizontal : 20 , marginTop:15 }}>When you plant something , you invest in a beautiful future amidst a stressfull</Text>
  <TouchableOpacity style={{margin: 20 , display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"green" , borderRadius: 15}} onPress={()=>movetoScreen('Login')} ><Text style={styles.button}>Get Started</Text></TouchableOpacity>
  </View>
  )
}