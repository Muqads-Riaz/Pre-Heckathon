import React, { useState , useEffect } from "react"
import { View, Text , TextInput , TouchableOpacity , Image} from "react-native"
import styles from "../MyStyling"

export default function OrderForm({navigation}) {
    let[obj , setObj] = useState({})
  return (
    <View>
    <View style={{ display:"flex" , flexDirection:"row" ,alignItems: 'center', justifyContent:"space-around" ,  marginTop: 100 , marginBottom: 10}}>
    <Image source={require("../Images/logo2.png")} style={{width: 30 , height: 25  ,marginLeft : 20  }}/>
    <Text style={{color: 'black' , fontSize: 25,marginLeft : 20 }}>Plantify</Text>
    <Text>                                                                   </Text>
    </View>
 <Text style={{color: 'green' , fontSize: 30,marginLeft : 20 }}>Order Form</Text>
<TextInput onChangeText={(e)=>setObj({...obj , userName : e})} placeholderTextColor={'grey'}  style={styles.inp}  placeholder="User Name" />
<TextInput onChangeText={(e)=>setObj({...obj , email : e})} placeholderTextColor={'grey'}  style={styles.inp} keyboardType="email-address" placeholder="Email" />
<TextInput onChangeText={(e)=>setObj({...obj , phoneNumber : e})} placeholderTextColor={'grey'}  style={styles.inp} keyboardType="numeric" placeholder="Phone Number" />
<TextInput onChangeText={(e)=>setObj({...obj , address : e})} placeholderTextColor={'grey'}  style={styles.inp}  placeholder="Address" />
      <TouchableOpacity style={{margin: 20 , display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"green" , borderRadius: 15}} onPress={()=>navigation.navigate("Order")} ><Text style={styles.button}>Order Confirm</Text></TouchableOpacity> 
</View>
  )
}
