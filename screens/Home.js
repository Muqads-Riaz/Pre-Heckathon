import React , { useState , useEffect } from "react"
import { View, Text , Image , TextInput, ScrollView , TouchableOpacity} from "react-native"
import Card from "../components/Card"
import styles from "../MyStyling"
import axios from "axios"
const base_url = "https://smiling-suit-moth.cyclic.app"
import Data from "../components/Data"

export default function Home({navigation}) {
  let [data, setData] = useState([])
  let [showData, setShowData] = useState([])
 

  // let receiveData = () => {
  //   axios
  //     .get(`${base_url}/todos`)
  //     .then((success) => {
  //       console.log(success.data.data)
  //       setData(success.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  let searchData = (val)=>{
      showData = Data.filter((e) => {
        return e.name.toLowerCase().includes(val.toLowerCase())
      })
      setShowData([...showData])
    }

  useEffect(() => {
  setShowData([...Data])
  }, [])

  return (
    <View>
    <View style={{ display:"flex" , flexDirection:"row" ,alignItems: 'center', justifyContent:"space-around" ,  marginTop: 50 , marginBottom: 10}}>
    <Image source={require("../Images/logo2.png")} style={{width: 30 , height: 25  ,marginLeft : 20  }}/>
    <Text style={{color: 'black' , fontSize: 25,marginLeft : 20 }}>Plantify</Text>
    <Text>                                                                   </Text>
    </View>
    <TextInput onChangeText={(e)=>searchData(e)} placeholderTextColor={'grey'} style={styles.inp} placeholder="Search any product..." />


    <ScrollView style={{ marginBottom: 170 }}>
    <Image source={require("../Images/Banner.png")} style={{width: 360 , height: 230  ,margin : 10  }}/>
            {showData && showData.length > 0 ? showData.map((e, i) => {
                return <TouchableOpacity onPress={()=>navigation.navigate("SingleProduct" , e)} style={{ margin: 10, marginLeft: 20 }} key={i}>
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
                        </View>
                        <Image source={e.img} style={{ width: 140, height: 150,  marginBottom: 10 ,  marginLeft: 50}} />
                    </View>
                </TouchableOpacity>
            }) : <Text style={{color:"black" , fontSize : 30 ,marginTop: 20,textAlign:"center"}}>No Data Found</Text>}
        </ScrollView>

        
  </View>
  )
}
