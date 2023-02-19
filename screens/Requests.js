import React, { useEffect , useState} from 'react'
import{ Text , Image, View , TouchableOpacity}from "react-native"
import axios from 'axios'
const base_url = "https://smiling-suit-moth.cyclic.app"
import styles from '../MyStyling'

function Requests(){
    let[data , setData] = useState([])
    let[index , setIndex] = useState(0)
    let[showFinished , setShowFinished] = useState(false)
    let receiveData = () => {
    axios
      .get(`${base_url}/requester`)
      .then((success) => {
        console.log(success.data.data)
        setData(success.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
let next = ()=>{
    if(index==data.length-1){
        setShowFinished(true)
    }else{
        setIndex(index + 1)
    }
   
}
  console.log(data.length)
  useEffect(()=>{
    receiveData()
  },[])
  return (
    <>
    {showFinished?  
    <View style={{ height : "100%" ,display:"flex" , justifyContent : "center" ,  alignItems: "center"}}>
   <Image source={{uri:'https://thumbs.dreamstime.com/b/finished-label-round-band-sign-stamp-171559531.jpg'}} style={{width: 400, height: 360 }}/>
    </View>
    :<>
    {data && data.length > 0? 
    <>
    <View><Text style={{color: 'white' ,backgroundColor:"red" ,padding: 5 , fontSize: 50 , marginTop:10 , textAlign: 'center'}}>{data[index].sub_category}</Text></View>
    <Text style={{color: 'black' ,backgroundColor:"yellow" ,padding: 5 , fontSize: 35 , textAlign: 'center'}}>{data[index].name}</Text>
     
    <View style={{ height : "50%" ,display:"flex" , justifyContent : "center" ,  alignItems: "center"}}>
    <Image source={{uri:'https://w7.pngwing.com/pngs/429/539/png-transparent-emergency-alert-system-emergency-management-emergency-broadcast-system-disaster-emergency-s-ambulance-emergency-vehicle-911.png'}} style={{width: 200, height: 200 }}/>
    </View>
    <TouchableOpacity onPress={next} style={{margin: 20, display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"green" , borderRadius: 15 , padding:5}} ><Text style={[styles.button , {fontSize:30}]}>Accept</Text></TouchableOpacity>
    </>
    :null}
    </>}
    


    </>
  )
}

export default Requests
