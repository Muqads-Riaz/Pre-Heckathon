import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
      padding: 10,
      height: "100%",
      backgroundColor: "white",
  
    },
    bgimage_container:{
      padding: 10,
      height: "105%",
     
    },
    heading:{
   color:"black" ,
   fontSize:25 ,
    textAlign:"center",
    margin: 20 
 
    },
    subheading:{
      color:"black" ,
      fontSize:18 ,
      textAlign:"center",
      marginStart: 10 
    },
    account:{
      color:"grey" ,
      textAlign:"center",
      fontSize:18 ,
      textDecorationLine: 'underline'
    },
    button: {
      padding: 10,
      color: "white",
      fontSize: 18 , 
      flexDirection: "row",
    },
    inp: {
      marginHorizontal : 20 ,
     borderColor:"lightgrey" ,
     borderWidth: 1 ,
     borderRadius: 5 ,
     padding: 10  , 
     color:"black" ,
     marginVertical: 10 
  
    },
    searchInp: {
        borderColor:"black" ,
        borderWidth: 1 ,
        borderRadius: 5 ,
        padding: 10  , 
        color:"black" ,
        margin: 20 
     
       },
    // main:{
    //     backgroundColor:"white"
    //     },
        heading:{
          color:"black" ,
          fontSize:25 ,
           textAlign:"center",
           margin: 20 
        
           },
       card:{
          width: "90%",
          marginTop:10,
          marginStart:20,
          backgroundColor:"white",
          alignItems:"center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,
          elevation: 8,
        },
        txt:{
       color:"black",
       margin:10
        },  container: {
          padding: 10,
          height: "100%",
          backgroundColor: "white",
      
        },
        heading: {
          color: "black",
          padding: 5,
          fontSize: 30,
          textAlign: "center"
        },
        main: {
          borderRadius: 5,
          flexDirection: "row",
          margin: 5,
          padding: 5,
          alignItems: "center",
          color: "black",
          backgroundColor: "black",
          justifyContent: "space-between",
      
        },
        redButton: {
          borderRadius: 5,
          margin: 10,
          padding: 10,
          color: "white",
          backgroundColor: "red",
          flexDirection: "row",
          width: "25%",
        },
        greenButton: {
          flex: 1,
          padding: 10,
          color: "white",
          backgroundColor: "green",
          flexDirection: "row",
          textAlign: "center",
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        },
        todoInp: {
          borderBottomLeftRadius: 5,
          borderTopLeftRadius: 5,
          flex: 5,
          backgroundColor: "grey",
          padding: 10,
          color: "white"
        },
        inpParent: {
          width: "100%",
          flexDirection: "row",
        },
        todo: {
          width: "75%"
        },
        
  })
  export default styles                                          

 