import React from 'react'
import  {View, Text, Image} from "react-native"
import styles from './styles';
import {AntDesign} from "@expo/vector-icons"


function Index() {
  return (
    <View style ={styles.headerMain}>
      <View style={styles.headerOne} >
        <Image style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
        <View style={styles.headerOneViev}>
          <Text style={{ fontWeight: '600' , fontSize:16}}>Ev</Text>          
          <Text style={{color:'#6E7480',fontWeight:'500', fontSize:11.5, marginLeft:6,marginRight:4}}>Salköprü Mah. Akçalı Sok. Aliçavuş...</Text>
          <AntDesign name="right" size={21} color="black"  />
        </View>
        <View style={styles.headerTwo}>
          <Text style={{fontSize:10, fontWeight:'bold',color:'#593E25'}}>TVS</Text>
          <Text style={{fontSize:20, fontWeight:'bold',color:'#593E25'}}>15
          <Text style={{fontSize:16,color:'#593E25'}}>dk</Text></Text>
        </View>
        
      </View>

      <View>
        
      </View>
    </View>
  );
}

export default Index; 
