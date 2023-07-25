import {
  DatePickerIOSBase,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { ScrollView } from "react-native-web";
import { Feather } from "@expo/vector-icons";
import DateRangePicker from "rn-select-date-range";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "BookCheskoBro",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 60,
        borderBottomColor: "tranparent",
        shadowColor: "transparent",
      },
      headerRight: () => {
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />;
      },
    });
  }, []);
  return (
    <View>
      <Header />
      <ScrollView>
        <View
          style={{
            margin: 20,
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 8,
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "black",
              borderWidth: 2,
              paddingVertical: 15,
            }}
          >
            <Feather name="search" size={24} color="black" />
            <TextInput placeholder="Enter your destination" />
          </Pressable>
          <Pressable>
            <Feather name="calendar" size={24} color="black" />
            <View style={styles.container}>
              <DateRangePicker
                onSelectDateRange={(range) => {
                  setRange(range);
                }}
                blockSingleDateSelection={true}
                responseFormat="YYYY-MM-DD"
                maxDate={moment()}
                minDate={moment().subtract(100, "days")}
                selectedDateContainerStyle={styles.selectedDateContainerStyle}
                selectedDateStyle={styles.selectedDateStyle}
              />
              <View style={styles.container}>
                <Text>first date: {selectedRange.firstDate}</Text>
                <Text>second date: {selectedRange.secondDate}</Text>
              </View>
            </View>
          </Pressable>
          <Pressable></Pressable>
          <Pressable></Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
