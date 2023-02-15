import React from "react"
import { View, Text, Image , TouchableOpacity} from "react-native"
import styles from "../MyStyling"

export default function Order({navigation}) {
  return (
    <View>
    <Image source={require("../Images/img8.png")} style={{width: 250 , height: 200  ,marginTop : 50 , marginLeft: 130 }}/>
    <Text style={{textAlign: "center" , color:"green" , fontSize : 40 }}>Order</Text>
    <Text style={{textAlign: "center" , color:"green" , fontSize : 40 }}>Received</Text>
    <Text style={{textAlign: "center" , color:"black" , fontSize : 18, marginTop: 20 }}>Order ID : #465652367812</Text>
    <Image source={require("../Images/logo2.png")} style={{width: 120 , height: 100  ,marginTop : 100 , marginLeft: 130 }}/>
    <TouchableOpacity style={{margin: 20 , display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"green" , borderRadius: 15}} onPress={()=>navigation.navigate("Home")} ><Text style={styles.button}>Back To Home</Text></TouchableOpacity> 
    
  </View>
  )
}