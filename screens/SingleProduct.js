import React , {useState} from "react"
import { View, Text , Image , TouchableOpacity} from "react-native"
import axios from "axios"
const base_url = "https://smiling-suit-moth.cyclic.app"

export default function SingleProduct({navigation , route}) {
  let [isFavourite, setIsFavourite] = useState(false)
  let obj = route.params
  let addToCart = ()=>{
    axios
    .post(`${base_url}/card` , obj)
    .then((success) => {
        alert(success.data.message)
        navigation.navigate("Cart")
      })
    .catch((error) => {
      console.log(error)
    })  
  
  }
  let addToWishlist = ()=>{
     console.log(obj)
       axios
       .post(`${base_url}/wishCard` , obj)
       .then((success) => {
         if(success.data.status=="true"){
          setIsFavourite(true) 
         }else{
           alert(success.data.message)
           navigation.navigate("Wishlist")
         }
       })
       .catch((error) => {
         console.log(error)
       })       
  }
 


  return (
    <View>
 <View style={{backgroundColor: `${obj.color}` , height:"75%" , borderBottomLeftRadius : 50 , borderBottomRightRadius : 50}}>
 <View style={{ display:"flex" , flexDirection:"row" ,alignItems: 'center', justifyContent:"space-around" ,  marginTop: 30 , marginBottom: 40}}>
    <Image source={require("../Images/logo2.png")} style={{width: 30 , height: 25  ,marginLeft : 30  }}/>
    <Text style={{color: 'black' , fontSize: 25,marginLeft : 30 }}>Plantify</Text>
    <Text>                                                                   </Text>
    </View>

    <View style={{ display: "flex", alignItems: 'center', flexDirection: "row" }}>
    <Text style={{ color: "black", margin: 10, marginLeft: 30, fontSize: 20 }}>{obj.text}</Text>
    <Image source={require("../Images/img7.png")} style={{ width: 20, height: 20, marginLeft: 10 }} />
    <View style={{backgroundColor:"white" ,padding : 10, marginLeft: 80 , borderRadius : 10 , display: "flex", justifyContent: 'space-around' , flexDirection:"row"}}>
    <Image source={{uri: 'https://img.icons8.com/ios-filled/1x/filled-star.png'}} style={{width: 30 , height: 25 }}/> 
      <Text style={{color: 'black' , fontSize: 20 , marginLeft : 10 }}>4.8</Text></View>
    </View>
    
    <Text style={{ color: "black", marginLeft: 30, fontSize: 40 }}>{obj.name}</Text>
    <View style={{display: "flex", justifyContent: 'space-around' , flexDirection:"row"}}>
    <View style={{display: "flex", justifyContent: 'space-between'}}>
    <View style={{ display: "flex" , marginLeft: 60}}>
         <Text style={{color: 'grey' , fontSize: 20 }}>Price</Text>
         <Text style={{color: 'black' , fontSize: 20 }}>${obj.price}</Text>
         <Text style={{color: 'grey' , fontSize: 20 , marginTop : 20}}>Size</Text>
         <Text style={{color: 'black' , fontSize: 20 }}>{obj.size} "h</Text>
                            
      </View>
    <View style={{ display: "flex", alignItems: 'center', flexDirection: "row", marginLeft:50 , marginBottom:150 }}>
                           <TouchableOpacity onPress={()=>addToCart(obj)}>
                           <Image source={{uri: 'https://www.iconpacks.net/icons/3/free-icon-black-shopping-cart-10923.png'}} style={{ width: 50, height: 50}} />
                           </TouchableOpacity> 
                           {isFavourite? 
                            <TouchableOpacity>
                            <Image source={{uri: 'https://www.iconpacks.net/icons/1/free-icon-heart-992.png'}} style={{width: 50, height: 50 ,marginLeft:15 }} />
                            </TouchableOpacity>
                            :<TouchableOpacity  onPress={addToWishlist} >
                             <Image source={{uri: 'https://www.iconpacks.net/icons/2/free-icon-heart-3510.png'}} style={{ width: 50, height: 50 ,marginLeft:15}} />
                            </TouchableOpacity>}
                            <Text>              </Text>
      </View>
      </View>
    <Image source={obj.img} style={{ width: 280, height: 400  , marginTop : 50}} />
    </View>
    </View>
    <View>
      <Text style={{color: 'black' , fontSize: 25,marginLeft : 30 ,marginTop: 50 , marginBottom:20 }}>OverView</Text>
      <View style={{display: "flex", alignItems: 'center', flexDirection:"row", justifyContent:"space-around"}}>
        <View style={{display: "flex"}}><Text  style={{color: 'green' , fontSize: 18 }}>250ml</Text><Text style={{color: 'grey' , fontSize: 16 }}>Water</Text></View>
        <View style={{display: "flex"}}><Text style={{color: 'green' , fontSize: 18 }}>35-40%</Text><Text style={{color: 'grey' , fontSize: 16 }}>Light</Text></View>
        <View style={{display: "flex"}}><Text style={{color: 'green' , fontSize: 18 }}>250gm</Text><Text style={{color: 'grey' , fontSize: 16 }}>Fertilizer</Text></View>
      </View>
    
    </View>
  </View>                                                 
  )
}