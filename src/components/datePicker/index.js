import React, { useState } from "react";
import { Button, View ,Pressable ,Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const DateBicker = ({confirmation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };



  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };



  return (
    <View>
      <Pressable onPress={showDatePicker}><Text>press here</Text></Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={confirmation}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export {DateBicker};