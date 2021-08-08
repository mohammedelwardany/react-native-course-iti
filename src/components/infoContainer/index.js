import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles"
const InfoContainer = ({iconName,iconColor,number}) => {
    return ( <View style={styles.container}>
        <Ionicons name={iconName} size={16} color={iconColor} />
        <Text  style={styles.number}>{number}</Text>
    </View>
    
    );
}
 
export {InfoContainer};

