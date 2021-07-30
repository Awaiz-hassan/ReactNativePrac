import React from 'react';
import {View,StyleSheet, Dimensions,Text} from 'react-native';
import {Avatar}from 'react-native-paper';
function ProfileScreen(props) {
    return (
        <View style={{ flex:1 ,alignItems:"center"}}>
            <View style={styles.backgroundContainerBorder} >
                <View style={
                    {marginTop:Dimensions.get('window').height*0.1,
                    alignItems:'center'
                }
                }>
                    <Text style={{fontSize:20 ,color:'white'}}>Tom Hardy</Text>
                    <Text style={{color:'white'}}>tom.hardy@gmail.com</Text>
                </View>

                <View style={styles.whiteCard}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={{marginRight:10,alignItems:'center',padding:10}} >
                        <Text >Income</Text>
                        <Text>45M</Text>
                        </View>
                        <View style={{backgroundColor:'grey', height:20,width:2}}></View>
                        <View style={{marginRight:10,alignItems:'center',padding:10}}>
                        <Text>Expense</Text>
                        <Text>4M</Text>
                        </View>
                    </View> 
                    <View style={{backgroundColor:'#b4b4b4', height:4,width:Dimensions.get('window').width*0.7}}/>
                    <View style={{width:Dimensions.get('window').width*0.7,height:60,flexDirection:'row', justifyContent:'space-between',marginTop:10}}>
                        <View style={{height:50,width:50,backgroundColor:'black'}}></View>
                        <View style={{height:50,width:50,backgroundColor:'black'}}></View>

                        <View style={{height:50,width:50,backgroundColor:'black'}}></View>

                        <View style={{height:50,width:50,backgroundColor:'black'}}></View>


                    </View>


                </View>
                <View style={{ width:Dimensions.get('window').width*0.9,marginTop:5}}>
                    <Text style={{color:'white'}}>General</Text>
                </View>

                <View style={{
                    width:Dimensions.get('window').width*0.9,
                    height:Dimensions.get('window').width*0.1,
                    marginTop:10,
                    borderRadius:5 ,
                    backgroundColor:'rgba(255, 255, 255, 0.1)',
                    justifyContent:'center'
                    }}>
                    <Text style={{paddingLeft:10,color:'white'}}>Profile Settings</Text>
                </View>
                <View style={{
                    width:Dimensions.get('window').width*0.9,
                    height:Dimensions.get('window').width*0.1,
                    marginTop:10,
                    borderRadius:5 ,
                    backgroundColor:'rgba(255, 255, 255, 0.1)',
                    justifyContent:'center'
                    }}>
                    <Text style={{paddingLeft:10,color:'white'}}>Change Password</Text>
                </View>
                <View style={{
                    width:Dimensions.get('window').width*0.9,
                    height:Dimensions.get('window').width*0.1,
                    marginTop:10,
                    borderRadius:5 ,
                    backgroundColor:'rgba(255, 255, 255, 0.1)',
                    justifyContent:'center'
                    }}>
                    <Text style={{paddingLeft:10,color:'white'}}>Notification</Text>
                </View>
                <View style={{
                    width:Dimensions.get('window').width*0.9,
                    height:Dimensions.get('window').width*0.1,
                    marginTop:10,
                    borderRadius:5 ,
                    backgroundColor:'rgba(255, 255, 255, 0.1)',
                    justifyContent:'center'
                    }}>
                    <Text style={{paddingLeft:10,color:'white'}}>Transaction History</Text>
                </View>
               
            </View>

            <View style={styles.circleOuter} >

                <View style={styles.circleBorderWhite}>
                    <Avatar.Image
                        source={{
                        uri:'https://media.gq.com/photos/5e6128d2398289000862596e/1:1/w_805,h_805,c_limit/tom-hardy-lead-840-social.jpg'
                        }}
                        size={120}/>
                </View>
            </View>
            
        </View>
        

    );
}

const styles = StyleSheet.create({
    circleOuter:{
         height:150,
         width:150,
         borderRadius:75,
         backgroundColor:"#2e3d68",
         alignItems:'center',
         justifyContent:'center',
         marginTop:Dimensions.get('window').height*0.1,

    },
    circleBorderWhite:{
        height:130,
        width:130,
        borderRadius:65,
        backgroundColor:"white",
        alignItems:'center',
        justifyContent:'center'
    },
    backgroundContainerBorder:{
        position:'absolute',
        height:Dimensions.get('window').height*0.8,
        width:Dimensions.get('window').width,
        top:0,
        marginTop:Dimensions.get('window').height*0.2,
        backgroundColor:'#2e3d68',
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        alignItems:'center'

    },
    whiteCard:{
        height:Dimensions.get('window').height*0.2,
        width:Dimensions.get('window').width*0.9,
        marginTop:19,
        backgroundColor:'white',
        borderRadius:20,
        alignItems:'center'
    }
})

export default ProfileScreen;