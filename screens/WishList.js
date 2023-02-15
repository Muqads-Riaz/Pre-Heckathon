import React, { useEffect, useState } from "react"
import { View, Text , Image , TouchableOpacity , ScrollView} from "react-native"
import Data from "../components/Data"
import axios from "axios"
const base_url = "https://smiling-suit-moth.cyclic.app"

export default function WishList({navigation}) {
  let[wishlist, setWishlist] = useState([])
  
   let receiveData = () => {
    axios
      .get(`${base_url}/wishCard`)
      .then((success) => {
        setWishlist([...success.data.data])
      })
      .catch((error) => {
        console.log(error)
      })
  }
  let deleteCard = (id) => {
    axios
  .delete(`${base_url}/wishCard/${id}`)
    .then((success) => {
     alert(success.data.message)
     receiveData()
    })
    .catch((error) => {
      console.log(error)
    })
  }
  console.log(wishlist)
  useEffect(()=>{
  receiveData()
  },[])
  return (
   <View>
      <View style={{ display:"flex" , flexDirection:"row" ,alignItems: 'center', justifyContent:"space-around" ,  marginTop: 50 }}>
       <Image source={require("../Images/logo2.png")} style={{width: 30 , height: 25  ,marginLeft : 20  }}/>
       <Text style={{color:'black' , fontSize: 25,marginLeft : 20 }}>Plantify</Text>
       <Text>                                                                   </Text>
       </View>
       <Text style={{color:'green' , fontSize: 35,marginLeft : 20 , marginVertical: 20 }}>Your Wishlist</Text>
    {wishlist && wishlist.length > 0?
    wishlist.map((obj , i)=>{
      return  <View key={obj._id} style={{marginVertical: 10}}>
       <View style={{ display:"flex" , flexDirection:"row" ,alignItems: 'center', justifyContent:"space-around"}}>
       <Image source={obj.img} style={{width: 65 , height: 60 }}/>
       <View style={{ display:"flex" ,alignItems: 'center', justifyContent:"space-around" }}>
       <Text style={{color:'black' , fontSize: 25 }}>{obj.name}</Text>
       <Text style={{color:'green' , fontSize: 20 , marginLeft:5}}>${obj.price}</Text>
       </View>
       <TouchableOpacity onPress={()=>deleteCard(obj._id)}>
         <Image source={{uri: 'https://thenounproject.com/api/private/icons/1123165/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABj52GO1eZzZx7xY54P13ZiWHBwgnmL63Pc-VG1MxL5HQFNZtPqV3AbNtZfN00_PMpp1XSr42gnjYMsMwFYSnF29LLhXg%3D%3D'}} style={{width: 40, height: 40 ,marginLeft:15 }}/>
       </TouchableOpacity>
       </View>
     </View>
    })
   :<Text style={{color:"black" , fontSize : 30 ,marginTop: 20,textAlign:"center"}}>Your Wishlist is empty</Text>}
  </View>
  )
}