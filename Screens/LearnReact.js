import React from 'react';
import { Button, FlatList, SectionList, StyleSheet, Text, View } from 'react-native';

function LearnReact({navigation}) {
    return (
    //   <View style={styles.container}>
    //     <FlatList
    //       data={[
    //         {key: 'Devin'},
    //         {key: 'Dan'},
    //         {key: 'Dominic'},
    //         {key: 'Jackson'},
    //         {key: 'James'},
    //         {key: 'Joel'},
    //         {key: 'John'},
    //         {key: 'Jillian'},
    //         {key: 'Jimmy'},
    //         {key: 'Fyaz Bhai'},

    //       ]}
    //       renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
    //     />
    //   </View>

    <View style={styles.container}>
        {/* <SectionList

            sections={[
                {title:"D",data:["Ddd","Did","Does"] },
                {title:"J",data:["James","Joel","John"]},
                {title:"K",data:["Kames","koel","Kohn"]},
                {title:"L",data:["Lames","Loel","Lohn"]},
                {title:"O",data:["Omes","Oel","Ohn"]}

            ]}
            renderItem={({item})=><Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={({item,index})=>index}
        /> */}

        <Text>Blank Screen</Text>

    </View>
 );
}



const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'dodgerblue',
  }
});



export default LearnReact;