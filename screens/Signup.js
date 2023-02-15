import React, { useState , useEffect } from "react"
import { View, Text , TextInput , TouchableOpacity , Image} from "react-native"
import styles from "../MyStyling"
import axios from "axios"
const base_url = "https://smiling-suit-moth.cyclic.app"

export default function Signup({navigation}) {
  let[obj , setObj] = useState({})
  let signup = () => {
    axios
      .post(`${base_url}/signup` , obj)
      .then((success) => {
        if(success.data.status=="true"){
          navigation.navigate("Login")
        }else{
          alert(success.data.message)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
 
  return (
    <View>
    <View style={{ display:"flex" , flexDirection:"row" ,alignItems: 'center', justifyContent:"space-around" ,  marginTop: 100 , marginBottom: 10}}>
    <Image source={require("../Images/logo2.png")} style={{width: 30 , height: 25  ,marginLeft : 20  }}/>
    <Text style={{color: 'black' , fontSize: 25,marginLeft : 20 }}>Plantify</Text>
    <Text>                                                                   </Text>
    </View>
 <Text style={{color: 'green' , fontSize: 30,marginLeft : 20, textAlign:"center" }}>Signup</Text>
<Text style={{color: 'green' , fontSize: 15,marginLeft : 20 , marginTop:15, textAlign:"center" }}>Create your account</Text>
<TextInput onChangeText={(e)=>setObj({...obj , firstName : e})} placeholderTextColor={'grey'}  style={styles.inp}  placeholder="First Name" />
<TextInput onChangeText={(e)=>setObj({...obj , lastName : e})} placeholderTextColor={'grey'}  style={styles.inp}  placeholder="Last Name" />
<TextInput onChangeText={(e)=>setObj({...obj , email : e})} placeholderTextColor={'grey'}  style={styles.inp} keyboardType="email-address" placeholder="Email" />
<TextInput onChangeText={(e)=>setObj({...obj , password : e})} placeholderTextColor={'grey'}  style={styles.inp} secureTextEntry={true} placeholder="Password" />
      <TouchableOpacity style={{margin: 20 , display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"green" , borderRadius: 15}} onPress={()=>signup()} ><Text style={styles.button}>Signup</Text></TouchableOpacity> 
</View>
  )
}