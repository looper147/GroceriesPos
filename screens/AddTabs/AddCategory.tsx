import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";

//icons
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/AntDesign";
import { AppBar, Snackbar } from "@react-native-material/core";

import {
  Stack,
  TextInput,
  IconButton,
  Button,
} from "@react-native-material/core";
//database
import db from "../../database/groceriesPos";

//redux
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../redux/categorySlice";
import { RootState } from "../../redux/store";
import { color } from "react-native-reanimated";

//header
const CustomHeader = ({ navigation }: any) => {
  return (
    <AppBar
      title="Add new category"
      titleStyle={{ fontWeight: "200" }}
      color="#e0efff"
      leading={(props) => (
        <IconButton
          onPress={() => navigation.navigate("Root")}
          icon={(props) => (
            <Icon
              name="ios-arrow-back"
              color={"#087dff"}
              style={{ fontSize: 22 }}
            />
          )}
          {...props}
        />
      )}
    ></AppBar>
  );
};

//Add category screen
const AddCategory = ({ navigation }: any) => {
  //category form input value
  const [category, setCat] = useState("");
  const dispatch = useDispatch();

  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for controlling Snackbar visibility

  //invalid input
  const [invalid, setInvalid] = useState(false);
  //categories store
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  //insert category
  const handleCategorySubmit = () => {
    //check if category name already exists
    for (let i = 0; i < categories.length; i++) {
      if (categories[i] === category) {
        setInvalid(true);
        alert("This name already exists");
        return;
      }
    }
    dispatch(addCategory(category));
    //validate input
    setInvalid(false);
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO category (name) VALUES (?)",
        [category],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            setSnackbarOpen(true);
          } else {
            alert("Insertion failed");
          }
        },
        (error) => {
          alert("Error inserting category:" + error);
          return false; // Return false to indicate an error occurred
        }
      );
    });

    //clear input
    setCat("");
  };

  //display categories
  const showCategories = () => {
    // Perform a SELECT query to retrieve the inserted values
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM category",
        [],
        (tx, results) => {
          const len = results.rows.length;
          for (let i = 0; i < len; i++) {
            const row = results.rows.item(i);
            alert(`Category ID: ${row.id}, Name: ${row.name}`);
          }
        },
        (error) => {
          alert("Error retrieving categories:" + error);
          return false;
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader navigation={navigation} />
      {/*row 1*/}
      <Stack spacing={40} style={{ margin: 16 }}>
        <TextInput
          label="Category name"
          variant="outlined"
          color={invalid ? "red" : "#087dff"}
          leading={(props) => (
            <Icon2 name="appstore1" color={invalid ? "red" : "#087dff"} />
          )}
          style={invalid ? { borderBottomColor: "red" } : null}
          value={category}
          onChangeText={(val) => setCat(val)}
          placeholder={invalid ? "Empty category!" : "Enter category"}
        />

        <View style={{ flexDirection: "row" }}>
          {/*row 2*/}

          <Button
            title="Confirm"
            // style={styles.confirmButton}
            color="secondary"
            variant="outlined"
            leading={(props) => <Icon2 name="checkcircleo" {...props} />}
            onPress={() =>
              category.trim() == "" ? setInvalid(true) : handleCategorySubmit()
            }
          />
          <Text style={{ color: "#ffffff" }}></Text>

          {/*row 3*/}

          <Button
            title="Show categories"
            // style={styles.confirmButton}
            variant="contained"
            color="#89CFF0"
            onPress={showCategories}
          />
        </View>
        {snackbarOpen ? (
          <Snackbar
            message="Category added."
            style={{ backgroundColor: "#228B22" }}
            action={
              <Button
                variant="text"
                title="Dismiss"
                color="#ffffff"
                compact
                onPress={() => setSnackbarOpen(false)}
              />
            }
          />
        ) : null}
      </Stack>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#ffffff",
  },
  invalidInput: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderColor: "red",
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
