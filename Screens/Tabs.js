import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity, Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import WelcomeScreen from './WelcomeScreen';
import ProfileScreen from './ProfileScreen';
import LearnReact from './LearnReact';
import ExploreScreen from './ExploreScreen';
import { color } from 'react-native-reanimated';



const Tab=createBottomTabNavigator();
const CustomTabBarButton=({children,onPress})=>(

    <TouchableOpacity style={{
        height:75,width:75,alignItems:'center',justifyContent:'center',top:-35,
        ...styles.Shadow

    }}
    onPress={onPress}

    >
    <View
    style={
        {width:75,
        height:75,
        borderRadius:38,
        backgroundColor:'#2e3d68',
        
        
        }
    }
    onPress={onPress}
    >{children}
    </View>
    </TouchableOpacity>
);
function Tabs(props) {
    return (
        <Tab.Navigator
            tabBarOptions={
                {
                    showLabel:false,
                    style:{
                        position:'absolute',
                        left:10,
                        right:10,
                        bottom:10,
                        height:70,
                        borderRadius:10,
                        backgroundColor:'white',
                    }
                }
            }
        >
            <Tab.Screen name="Home" component={WelcomeScreen} options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../assets/home.png')} resizeMode='contain' style={
                            {height:30,width:30,tintColor:focused? '#2e3d68':'grey'}
                        }></Image>
                        <Text style={{color:focused? '#2e3d68':'grey' ,fontSize: focused?15:13}}>Home</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../assets/profile.png')} resizeMode='contain' style={
                            {height:30,width:30,tintColor:focused? '#2e3d68':'grey'}
                        }></Image>
                        <Text style={{color:focused? '#2e3d68':'grey' ,fontSize: focused?15:13}}>Profile</Text>
                    </View>
                ),
            }}
            
            
            />
            <Tab.Screen name="React" component={LearnReact} options={
                
                { tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../assets/addmore.png')} resizeMode='contain' style={
                            {height:30,width:30,tintColor: 'white'}
                        }></Image>
                    </View>
                ),
                    
                    tabBarButton:(props)=>(<CustomTabBarButton {...props}/>) }

            }/>
            <Tab.Screen name="Search" component={LearnReact} options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../assets/explore.png')} resizeMode='contain' style={
                            {height:30,width:30,tintColor:focused? '#2e3d68':'grey'}
                        }></Image>
                        <Text style={{color:focused? '#2e3d68':'grey' ,fontSize: focused?15:13}}>Explore</Text>
                    </View>
                ),
            }}/>

            <Tab.Screen name="Explore" component={ExploreScreen} options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../assets/learn.png')} resizeMode='contain' style={
                            {height:30,width:30,tintColor:focused? '#2e3d68':'grey'}
                        }></Image>
                        <Text style={{color:focused? '#2e3d68':'grey' ,fontSize: focused?15:13}}>Learn</Text>
                    </View>
                ),
            }}/>


        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    Shadow:{
        shadowColor:"#b4b4b4",
        shadowOffset:{
            width:0,
            height:10

        },
        shadowOpacity:0.25,
        shadowRadius:3.25,
        elevation:5  
    }
})

export default Tabs;