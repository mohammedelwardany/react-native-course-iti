import Counter from "../../components/counter";
import React from "react";
import { View } from "react-native";
import styles from "./style"
import Title from "../../components/test";
const Home = () => {
    return ( <View style={styles.container}>
        <Title/>
        <Counter/>
    </View> );
}
 
export default Home;