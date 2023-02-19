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
    <View style={{marginTop:150}}>
 <Text style={{color: 'red' , fontSize: 30,marginLeft : 20, textAlign:"center" }}>Signup</Text>
<Text style={{color: 'red' , fontSize: 15,marginLeft : 20 , marginTop:15, textAlign:"center" }}>Create your account</Text>
<TextInput onChangeText={(e)=>setObj({...obj , firstName : e})} placeholderTextColor={'grey'}  style={styles.inp}  placeholder="First Name" />
<TextInput onChangeText={(e)=>setObj({...obj , lastName : e})} placeholderTextColor={'grey'}  style={styles.inp}  placeholder="Admin/User" />
<TextInput onChangeText={(e)=>setObj({...obj , email : e})} placeholderTextColor={'grey'}  style={styles.inp} keyboardType="email-address" placeholder="Email" />
<TextInput onChangeText={(e)=>setObj({...obj , password : e})} placeholderTextColor={'grey'}  style={styles.inp} secureTextEntry={true} placeholder="Password" />
      <TouchableOpacity style={{margin: 20 , display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"red" , borderRadius: 15}} onPress={()=>signup()} ><Text style={styles.button}>Signup</Text></TouchableOpacity> 
</View>
  )
}