import React, { useState } from "react";
import { Text,View,Pressable,StyleSheet} from "react-native"; 
import styles from "./style";
const Counter = () => {
const [container,setcontainer]=useState(0)

const increase =()=>{
setcontainer((val)=>val+1)
};
const decrease =()=>{
setcontainer((val)=>val-1)
};
const reset =()=>{
    setcontainer(0)
    };
    return ( 
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={increase}><Text style={styles.Text}>{"+"}</Text></Pressable>
            <Text style={styles.Text}>{container}</Text>
            <Pressable style={styles.button} onPress={decrease}><Text style={styles.Text}>{"-"}</Text></Pressable>
            <Pressable style={styles.button} onPress={reset}><Text style={styles.Text}>{"C"}</Text></Pressable>
        </View>
        
     );
}
 
export default Counter;