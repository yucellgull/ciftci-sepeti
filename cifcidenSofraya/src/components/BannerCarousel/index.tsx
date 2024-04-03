import React, { useState } from "react"
import { FlatList,Dimensions,Image } from "react-native"
const { width, height } = Dimensions.get("window");

function index(){
    const [banners, setBanner]= useState<String[]> ([
        "https://www.zeytunefarm.com/wp-content/uploads/2020/02/CEF7162-1.jpg",
        "https://www.zeytunefarm.com/wp-content/uploads/2020/02/CEF7340-1.jpg",
        "https://www.zeytunefarm.com/wp-content/uploads/2020/02/CEF7420-1.jpg",
        "https://www.zeytunefarm.com/wp-content/uploads/2020/02/CEF7437-1.jpg"
    ])
    
    
    
    return (
        <FlatList  
            data={banners}
            renderItem={(item) => (
                <Image
                source={{ uri: item.item }}
                style={{ width: width, height: height * 0.24,resizeMode:"stretch", }}
                />
            
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
            
       
        /> 
        
    )
}

export default index