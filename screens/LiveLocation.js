import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native';
import SMButton from '../components/SMButton'
import styles from '../Styling';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
const base_url = "https://smiling-suit-moth.cyclic.app"
import axios from 'axios';
function LiveLocation({navigation,route }) {
    const [currLatitude, setlatitude] = useState();
    const [currLongitude, setlongitude] = useState();
     let category = route.params.category
     let name = route.params.name
   

    let getLocation = () => {
        Geolocation.requestAuthorization()
        Geolocation.getCurrentPosition(info => {
            setlatitude(info.coords.latitude);
            setlongitude(info.coords.longitude);
        });
    };
    useEffect(()=>{
       getLocation()
    },[])
    let sendRequestFight = ()=>{
     let obj = {currLatitude , currLongitude , category , subCategory : "Fight" , name}
     axios
     .post(`${base_url}/requester` , obj)
     .then((success) => {
       if(success.data.status=="true"){
         navigation.navigate("Pending" )
       }else{
         alert(success.data.message)
       }
     })
     .catch((error) => {
       console.log(error)
     })
    
    }
    let sendRequestRobbery= ()=>{
    let obj = {currLatitude , currLongitude , category , subCategory : "Robbery" , name}
    axios
    .post(`${base_url}/requester` , obj)
    .then((success) => {
      if(success.data.status=="true"){
        navigation.navigate("Pending" )
      }else{
        alert(success.data.message)
      }
    })
    .catch((error) => {
      console.log(error)
    })
    }
    let sendRequestHarassment = ()=>{
    let obj = {currLatitude , currLongitude , category , subCategory : "Harassment" , name}
    axios
    .post(`${base_url}/requester` , obj)
    .then((success) => {
      if(success.data.status=="true"){
        navigation.navigate("Pending" )
      }else{
        alert(success.data.message)
      }
    })
    .catch((error) => {
      console.log(error)
    })
    }
    let sendRequestMedical = ()=>{
        let obj = {currLatitude , currLongitude , category , subCategory : "Medical Emergency" , name}
        axios
        .post(`${base_url}/requester` , obj)
        .then((success) => {
          if(success.data.status=="true"){
            navigation.navigate("Pending" )
          }else{
            alert(success.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    let sendRequestFire = ()=>{
        let obj = {currLatitude , currLongitude , category , subCategory : "Fire" , name}
        axios
        .post(`${base_url}/requester` , obj)
        .then((success) => {
          if(success.data.status=="true"){
            navigation.navigate("Pending" )
          }else{
            alert(success.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    let sendRequestAccident = ()=>{
        let obj = {currLatitude , currLongitude , category , subCategory : "Acccident" , name}
        axios
        .post(`${base_url}/requester` , obj)
        .then((success) => {
          if(success.data.status=="true"){
            navigation.navigate("Pending" )
          }else{
            alert(success.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })  
    }
    let sendRequestBlast = ()=>{
        let obj = {currLatitude , currLongitude , category , subCategory : "Cylinder Blast" , name}
        axios
        .post(`${base_url}/requester` , obj)
        .then((success) => {
          if(success.data.status=="true"){
            navigation.navigate("Pending" )
          }else{
            alert(success.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    let sendRequestCircuit = ()=>{
        let obj = {currLatitude , currLongitude , category , subCategory : "Short Circuit" , name}
        axios
        .post(`${base_url}/requester` , obj)
        .then((success) => {
          if(success.data.status=="true"){
            navigation.navigate("Pending" )
          }else{
            alert(success.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })  
    }
    
    return (
        <>
            <View style={[styles.h75 ]}>
                {currLatitude && currLongitude ? (
                    <View style={styles1.container}>
                        <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={styles1.map}
                            region={{
                                latitude: currLatitude,
                                longitude: currLongitude,

                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}>
                            <Marker
                                title="ABC Title"
                                description="ABC"
                                coordinate={{
                                    latitude: currLatitude,
                                    longitude: currLongitude,

                                    latitudeDelta: 0.015,
                                    longitudeDelta: 0.0121,
                                }}></Marker>
                        </MapView>
                    </View>
                ) : null}
            </View>
             {(category=="Police")? <><TouchableOpacity onPress={sendRequestFight} style={{marginVertical: 10 ,marginHorizontal:20, display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"red" , borderRadius: 15 , padding: 10}}><Text style={styles.button}>Fight</Text></TouchableOpacity>
            <TouchableOpacity  onPress={sendRequestRobbery} style={{marginVertical: 10 ,marginHorizontal:20, display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"red" , borderRadius: 15 , padding: 10}}><Text style={styles.button}>Robbery</Text></TouchableOpacity>
            <TouchableOpacity onPress={sendRequestHarassment} style={{marginVertical: 10 ,marginHorizontal:20, display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"red" , borderRadius: 15 , padding: 10}}><Text style={styles.button}>Harassment</Text></TouchableOpacity></>:null} 


            {(category=="Ambulance")? <><TouchableOpacity onPress={sendRequestMedical} style={{marginVertical: 10 ,marginHorizontal:20, display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"red" , borderRadius: 15 , padding: 10}}><Text style={styles.button}>Medical Emergancy</Text></TouchableOpacity>
            <TouchableOpacity onPress={sendRequestFire} style={{marginVertical: 10 ,marginHorizontal:20, display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"red" , borderRadius: 15 , padding: 10}}><Text style={styles.button}>Fire</Text></TouchableOpacity>
            <TouchableOpacity onPress={sendRequestAccident}  style={{marginVertical: 10 ,marginHorizontal:20, display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"red" , borderRadius: 15 , padding: 10}}><Text style={styles.button}>Accident</Text></TouchableOpacity></>:null}


            {(category=="Fire Brigade")? <><TouchableOpacity onPress={sendRequestFire} style={{marginVertical: 10 ,marginHorizontal:20, display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"red" , borderRadius: 15 , padding: 10}}><Text style={styles.button}>Fire</Text></TouchableOpacity>
            <TouchableOpacity onPress={sendRequestBlast} style={{marginVertical: 10 ,marginHorizontal:20, display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"red" , borderRadius: 15 , padding: 10}}><Text style={styles.button}>Cylinder Blast</Text></TouchableOpacity>
            <TouchableOpacity onPress={sendRequestCircuit} style={{marginVertical: 10 ,marginHorizontal:20, display:"flex" ,alignItems: 'center', justifyContent: 'center' , backgroundColor:"red" , borderRadius: 15 , padding: 10}}><Text style={styles.button}>Short Circuit</Text></TouchableOpacity></>:null} 
        </>
    );
}
export default LiveLocation;

const styles1 = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 800,
        width: 400,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});