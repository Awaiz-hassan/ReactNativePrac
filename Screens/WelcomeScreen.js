import React from 'react';
import { ImageBackground ,StyleSheet,Platform,StatusBar,View, Image, Text, Button, Alert} from 'react-native';
import { color } from 'react-native-reanimated';


function WelcomeScreen({navigation}) {
    return (
    //  <ImageBackground
    //  style={styles.background  }
    //  source={ require("../assets/background.jpg")}>
         
    
    // <View style={styles.loginButon}><Button  title="click me" onPress={()=>navigation.navigate('LearnReact')}/></View>
    // <View style={styles.registerButon}></View>


    // <View style={styles.logoContainer}>

    // <Image style={styles.logo} source={ require("../assets/logo-red.png")}/>
    // <Text style={{
    //     paddingTop:10,
    //     fontSize:20,
    //     color:'tomato',
    //     shadowColor:'black'
    // }}>Sell what we dont need</Text>
    
    // </View>


    // </ImageBackground>  
    <Text style={{ justifyContent:'center' ,alignItems:'center'}}>Home Screen</Text>
    
     );
}
const styles = StyleSheet.create({
    background:{
            flex:1,
          alignItems:'center',
          justifyContent:"flex-end",

        },
    loginButon:{
        height:50,
        width:'100%',
        backgroundColor:'tomato',
        alignItems:'center',
        justifyContent:'center'

    },
    logoContainer:{
        position:'absolute',
        top:0,
        marginTop:100,
        alignItems:'center',

    },
    registerButon:{
        height:50,
        width:'100%',
        backgroundColor:'dodgerblue',
    },
    logo:{
        height:100,
        width:100,  
    },

})

export default WelcomeScreen;