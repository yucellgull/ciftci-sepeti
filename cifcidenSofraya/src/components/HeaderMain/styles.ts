import { Dimensions, StyleSheet } from "react-native";

const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
    headerMain:{
        height :height*0.064,
        backgroundColor:'#ffc746',
        marginTop: '25%',
        
    },
    headerOne:{
        height: height*0.064,
        width: "80%",
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'3%',
        borderBottomRightRadius:20,
        borderTopRightRadius:20
    },
    image:{
        width:30,
        height:30,
    },
    headerOneViev:{
        width: "90%",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginLeft:8,
        paddingLeft:8,
        borderLeftColor:'#F3F2FD',
        borderLeftWidth:3,
    },
    headerTwo:{
        width: '25%',
        height: height*0.064,
        paddingLeft:12,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'

    }

})

export default styles;