import React, { useState } from "react"
import { View, Text , TextInput , TouchableOpacity , Image} from "react-native"
import styles from "../MyStyling"
import axios from "axios"
const base_url = "https://smiling-suit-moth.cyclic.app"

export default function Login({navigation}) {
  let[obj , setObj] = useState({})
  let movetoScreen = (route)=>{
    navigation.navigate(route)
  }
  let login = () => {
    axios
      .post(`${base_url}/login` , obj)
      .then((success) => {
        if(success.data.status=="true"){
        if(success.data.data.last_name=="admin" || success.data.data.last_name=="Admin" ){
          navigation.navigate("Requests")
        }else{
          navigation.navigate("Home" , success.data.data)
        }
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
   <Text style={{color: 'red' , fontSize: 30,marginLeft : 20 , textAlign:"center"}}>Login</Text>
  <Text style={{color: 'red' , fontSize: 15,marginLeft : 20 , marginTop:15 , textAlign:"center"}}>Good to see you again</Text>
  <Text style={{color: 'grey' , fontSize: 15,marginLeft : 20 , marginTop:15 }}>UserName/Email</Text>
  <TextInput onChangeText={(e)=>setObj({...obj , email : e})} placeholderTextColor={'grey'}  style={styles.inp} keyboardType="email-address" placeholder="Email" />
  <Text style={{color: 'grey' , fontSize: 15,marginLeft : 20 , marginTop:15 }}>Password</Text>
  <TextInput onChangeText={(e)=>setObj({...obj , password : e})} placeholderTextColor={'grey'}  style={styles.inp} secureTextEntry={true} placeholder="Password" />
     <TouchableOpacity style={{ display:"flex" , flexDirection:"row" ,alignItems: 'center', justifyContent:"space-around"}}>
      <Text>                                      </Text>
      <Text style={styles.account}>Forgot Password</Text></TouchableOpacity>
        <TouchableOpacity style={{margin: 20 , display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"red" , borderRadius: 15}} onPress={()=>login()} ><Text style={styles.button}>Login</Text></TouchableOpacity> 
        <View style={{flexDirection:"row" , justifyContent:"center"}}>
                <Text style={styles.subheading}>Don't have an account yet? </Text>
                <TouchableOpacity onPress={()=>movetoScreen('Signup')} ><Text style={styles.account}>Signup</Text></TouchableOpacity> 
        </View>
  </View>

  )
}                                                               