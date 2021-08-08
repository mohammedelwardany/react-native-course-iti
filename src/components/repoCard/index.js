import React from "react";
import { Pressable, Text, Image, View } from "react-native";
import { InfoContainer } from "../infoContainer";
import { limitTextLength } from "../../utils";
import styles from "./styles";
const RepoCard = ({
    title,
    desc,
    img_uri,
    starsnumber,
    issueesnumber,
    githupvisitnumber,
    numberOfLines

}) => {
  return (
    <Pressable style={styles.containerparent}>
        <View style={styles.container}>
      <Image
        style={styles.img}
        source={
          {uri : img_uri}
        }
      />

      <View>
        <Text style={styles.title} numberOfLines={1}>{limitTextLength(12, title)}</Text>
        <Text numberOfLines={numberOfLines}>{limitTextLength(38,desc)}</Text>
        
      </View>
      </View>
      <View style={styles.InfoContainer}>
      <InfoContainer 
      iconName={"star"}
      iconColor={"orange"}
      number={starsnumber}
      />
      <InfoContainer 
           iconName={"alert"}
           iconColor={"red"}
           number={issueesnumber}
      />
      <InfoContainer 
           iconName={"logo-github"}
           iconColor={"black"}
           number={githupvisitnumber}
      />
      </View>
    </Pressable>
  );
};

export {RepoCard};
