import React, { useEffect, useState } from 'react';
import { FlatList, Text, View,Dimensions,Image, Touchable, TouchableWithoutFeedback, Alert} from 'react-native';
import LottieView from 'lottie-react-native';

function ExploreScreen(){
        const [isLoading, setLoading] = useState(true);
        const [data, setData] = useState([]);
        console.log(data);
      
        useEffect(() => {
          fetch('https://www.livenewsglobe.com/wp-json/Newspaper/v2/posts/2')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        }, []);
        
        
        return(
        <View style={{ flex: 1,justifyContent:'center',alignItems:'center' ,marginLeft:Dimensions.get('window').width*0.05,marginBottom:Dimensions.get('window').height*0.17} }>
        {isLoading ?   <Text>Loading...</Text>:
        ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
            <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}> </Text>
            <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Article:</Text>

            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback onPress={()=>alert('clicked')} onLongPress={()=>alert('Long clicked')}>
                <View
    
                style={{
                
                  height:50,
                  marginBottom:15,
                  borderRadius:10,
                  width:Dimensions.get('window').width*0.90,
                  backgroundColor:'white',
                  alignItems:'center',
                  justifyContent:'center',
                  flexDirection:'row'
                  

                }}
                >
                <Image source={require('../assets/news.png')} resizeMode='contain'
                            style={{
                              width: 40, height: 40, borderRadius:5 ,position:'absolute',right:0,marginRight:5,tintColor:'#2e3d68'}}>
                            </Image>
                <Text Style={{color:"#2e3d68"}} >{item.title}</Text>
                <Image source={{uri: item.thumbnail_url[0]}}style={{width: 40, height: 40, borderRadius:5 ,position:'absolute',left:0,marginLeft:5}} />
                </View>
                </TouchableWithoutFeedback>
              )
            
            }
            />
          </View>
          
        )}
      </View>
    );
}
export default ExploreScreen;