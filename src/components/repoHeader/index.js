import React from "react";
import { Text , View , Image } from "react-native";
import stayles from "./styles"


const RepoHeader = ({text,image}) => {


    return ( 
        <View style={stayles.container}>
            <Image style={stayles.img} source={image}/>
            <Text style={stayles.text}>{text}</Text>
        </View>
     );
}
 
export {RepoHeader};