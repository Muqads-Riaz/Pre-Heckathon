import React from 'react'
import{ Text , Image, View}from "react-native"

function Pending(){
  return (
    <View style={{ height : "100%" ,display:"flex" , justifyContent : "center" ,  alignItems: "center"}}>
   <Image source={{uri:'https://st.depositphotos.com/2274151/2766/i/600/depositphotos_27660123-stock-photo-pending-stamp.jpg'}} style={{width: 400, height: 360 }}/>
    </View>
  )
}

export default Pending
