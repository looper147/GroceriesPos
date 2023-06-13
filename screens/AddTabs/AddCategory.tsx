import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import db from "../../database/groceriesPos";
//redux
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/actions";

import { useState } from "react";

interface AddCatScreenProps {
  navigation: any;
}

const CustomHeader = ({ navigation }: AddCatScreenProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 80,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "#e0efff",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Root")}>
          <Icon name="ios-arrow-back" size={25} color="#087dff" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 6, justifyContent: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "400", color: "#087dff" }}>
          Add new category
        </Text>
      </View>
    </View>
  );
};

const AddCategory = ({ navigation }: AddCatScreenProps) => {
  const [category, setCat] = useState("");
  const dispatch = useDispatch();

  const handleCategorySubmit = () => {
    dispatch(addCategory(category));

    // db.run("INSERT INTO category (name) values(?)", [category], (err) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("inserted");
    //   }
    // });
    setCat("");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader navigation={navigation} />
      {/*row 1*/}
      <View style={styles.card}>
        <Text style={{ fontSize: 25, fontWeight: "200" }}>Category name</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={10}
          value={category}
          onChangeText={(val) => setCat(val)}
          placeholder="Enter category"
        />
      </View>

      {/*row 2*/}
      <View
        style={[
          styles.card,
          { backgroundColor: "transparent", marginLeft: "35%" },
        ]}
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => handleCategorySubmit}
          >
            <Text style={{ color: "#ffffff" }}>Confirm category</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#ffffff",
  },
  card: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0efff",
    padding: 10,
    margin: 10,
  },
  confirmButton: {
    padding: 20,
    backgroundColor: "#087dff",
    borderRadius: 20,
    width: 100,
  },
});
export default AddCategory;
