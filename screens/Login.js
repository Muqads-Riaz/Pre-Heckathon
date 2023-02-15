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
    console.log(obj)
    axios
      .post(`${base_url}/login` , obj)
      .then((success) => {
        if(success.data.status=="true"){
          navigation.navigate("Home")
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
   <Text style={{color: 'green' , fontSize: 30,marginLeft : 20 , textAlign:"center"}}>Login</Text>
  <Text style={{color: 'green' , fontSize: 15,marginLeft : 20 , marginTop:15 , textAlign:"center"}}>Good to see you again</Text>
  <Text style={{color: 'grey' , fontSize: 15,marginLeft : 20 , marginTop:15 }}>UserName/Email</Text>
  <TextInput onChangeText={(e)=>setObj({...obj , email : e})} placeholderTextColor={'grey'}  style={styles.inp} keyboardType="email-address" placeholder="Email" />
  <Text style={{color: 'grey' , fontSize: 15,marginLeft : 20 , marginTop:15 }}>Password</Text>
  <TextInput onChangeText={(e)=>setObj({...obj , password : e})} placeholderTextColor={'grey'}  style={styles.inp} secureTextEntry={true} placeholder="Password" />
     <TouchableOpacity style={{ display:"flex" , flexDirection:"row" ,alignItems: 'center', justifyContent:"space-around"}}>
      <Text>                                      </Text>
      <Text style={styles.account}>Forgot Password</Text></TouchableOpacity>
        <TouchableOpacity style={{margin: 20 , display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"green" , borderRadius: 15}} onPress={()=>login()} ><Text style={styles.button}>Login</Text></TouchableOpacity> 
        <View style={{flexDirection:"row" , justifyContent:"center"}}>
                <Text style={styles.subheading}>Don't have an account yet? </Text>
                <TouchableOpacity onPress={()=>movetoScreen('Signup')} ><Text style={styles.account}>Signup</Text></TouchableOpacity> 
        </View>
  </View>

  )
}                                                               