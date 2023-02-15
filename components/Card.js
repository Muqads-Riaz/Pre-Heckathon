import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Data from './Data'
import styles from '../MyStyling'

export default function Card({navigation}) {
    let [isFavourite, setIsFavourite] = useState(false)
    return (
        <ScrollView style={{ marginBottom: 170 }}>
            {Data ? Data.map((e, i) => {
                return <TouchableOpacity onPress={()=>navigation.navigate("SingleProduct")} style={{ margin: 10, marginLeft: 20 }} key={i}>
                    <View style={{ backgroundColor: `${e.color}`, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 70, width: "80%", display: "flex", alignItems: 'center', justifyContent: 'space-between', flexDirection: "row" }}>
                        <View>
                            <View style={{ display: "flex", alignItems: 'center', flexDirection: "row" }}>
                            <Text style={{ color: "black", margin: 10, marginLeft: 20, fontSize: 18 }}>{e.text}</Text>
                            <Image source={require("../Images/img7.png")} style={{ width: 20, height: 20, marginLeft: 30, marginTop: 10 }} />
                            </View>
                            <Text style={{ color: "black", marginLeft: 20, fontSize: 25 }}>{e.name}</Text>
                            <View style={{ display: "flex", alignItems: 'center', flexDirection: "row" , justifyContent: 'space-between' }}>
                            <Text style={{ color: "black", marginLeft: 20,marginVertical: 10, fontSize: 20 }}>${e.price}</Text>
                            <Image source={require("../Images/emoji.png")} style={{ width: 40, height: 50, marginVertical: 10 }} />
                            </View>
                            {/* <View style={{ display: "flex", alignItems: 'center', flexDirection: "row" , justifyContent: 'space-between'}}>
                            <TouchableOpacity>
                           <Image source={{uri: 'https://www.iconpacks.net/icons/3/free-icon-black-shopping-cart-10923.png'}} style={{ width: 25, height: 23, marginLeft: 20 , marginBottom:20 }} />
                           </TouchableOpacity> 
                           {isFavourite? 
                            <TouchableOpacity onPress={()=>setIsFavourite(false)}>
                            <Image source={{uri: 'https://www.iconpacks.net/icons/1/free-icon-heart-992.png'}} style={{width: 25, height: 23, marginBottom:20 }} />
                            </TouchableOpacity>
                            :<TouchableOpacity  onPress={()=>setIsFavourite(true)} >
                             <Image source={{uri: 'https://www.iconpacks.net/icons/2/free-icon-heart-3510.png'}} style={{ width: 25, height: 23, marginBottom:20 }} />
                            </TouchableOpacity>}
                            <Text>              </Text>
                            </View> */}
                        </View>
                        <Image source={e.img} style={{ width: 140, height: 150,  marginBottom: 10 ,  marginLeft: 50}} />
                    </View>
                </TouchableOpacity>
            }) : null}
        </ScrollView>
    )
}