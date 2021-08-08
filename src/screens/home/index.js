import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator,View,Pressable,Text } from "react-native";
import { RepoHeader, RepoCard } from "../../components";
import { getAllRepos } from "../../services";
import styles from "./styles";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";



/////////////////////////////////////////////////////////////////
const HomeScreen = () => {
  const [data, setdata] = useState([]);
  const [loading,setloading]=useState(true);
  const [page,setpage]=useState(1)
  const [datee,setdatee]=useState("2021-01-01");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };



  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };


//00-00-0000
const handleConfirm = (datee) => {
  const datt =moment(datee).format("YYYY-MM-DD");
  setdatee(datt);
  hideDatePicker();
};
  ////

  const onload = async () => {
    const dataa = await getAllRepos(page,datee);

    setdata(dataa);
    setloading(false);
  };

  useEffect(() => {
    onload();
    console.log("use effect")
  }, [page]);

  useEffect(() => {
    onload();

  }, [datee]);


const increasePage = ()=>{
setloading(true);
setpage((val)=>val+1);
}


  const renderitem = (data) => {
    return(<RepoCard
    key={data.item.id}
      img_uri={data.item.owner.avatar_url}
      title={data.item.full_name}
      desc={data.item.description}
      starsnumber={data.item.stargazers_count}
      issueesnumber={data.item.open_issues}
      githupvisitnumber={data.item.owner.login}
      numberOfLines={1}
    />
    );
  };

  return (
    <>
      <RepoHeader
        text={"all reposatries"}
        image={require("../../../assets/logoo.png")}
      />
 
 <View>
      <Pressable onPress={showDatePicker}><Text>press here</Text></Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>

    <FlatList 
    data={data}
    renderItem = {renderitem}
    onEndReached={increasePage}
    onEndReachedThreshold={2}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.contentContainerStyle}
    />
    {loading && <ActivityIndicator />}
    </>
  );
};

export default HomeScreen;
