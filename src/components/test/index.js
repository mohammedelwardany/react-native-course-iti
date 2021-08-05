import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import styles from "./style";
const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Counter</Text>
    </View>
  );
};

export default Title;
