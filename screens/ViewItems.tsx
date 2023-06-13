import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import IconF from "react-native-vector-icons/Feather";
import IconFont5 from "react-native-vector-icons/FontAwesome5";
import IconFont from "react-native-vector-icons/FontAwesome";
import IconM from "react-native-vector-icons/MaterialIcons";

//navigation
import { useState } from "react";
import Dropdown from "../components/dropdown";
import { Row, Table } from "react-native-reanimated-table";

const categories = ["Fruits", "Vegetables", "Electronics"];
const items = ["Apple", "Banana", "Orange"];

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
          View
        </Text>
      </View>
    </View>
  );
};

const ViewItems = ({ navigation }: AddCatScreenProps) => {
  const [category, setCat] = useState("");
  const [renamed, setRenamed] = useState("");

  const widthArr = [120, 100, 100, 100, 200];

  const [tableHead] = useState<string[]>([
    "Name",
    "Quantity",
    "Price",
    "Cost",
    "Actions",
  ]);
  const renderTableRow = () => {
    const tableData = [
      ["Apple", "100 kg", "$10", "4", "Delete Update"],
      ["Banana", "20 items", "15", "10", "Delete Update"],
      ["Grapes", "39 kg packages", "20", "10", "Delete Update"],
      ["Orange", "40 packages", "12", "10", "Delete Update"],
      ["Strawberry", "10 packages", "8", "10", "Delete Update"],
    ];
    return tableData.map((rowData, index) => (
      <Row
        key={index}
        data={rowData}
        widthArr={widthArr}
        style={[styles.row, { backgroundColor: "#F7F6E7" }]}
        textStyle={styles.text}
      />
    ));
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader navigation={navigation} />
      <ScrollView>
        {/*row 1*/}
        <View style={styles.card}>
          <View
            style={{
              padding: 20,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "200" }}>Category</Text>
            <Dropdown
              data={categories}
              buttonPlaceholder="Choose category"
              searchPlaceHolder="Ex. Fruits"
              selected={(selectedItem: any) => {
                setCat(selectedItem);
                console.log(selectedItem);
              }}
            />
          </View>
        </View>
        {/*row 2*/}
        <View style={styles.card}>
          <Text style={{ fontSize: 20, fontWeight: "100" }}>
            Rename category
          </Text>

          <TextInput
            style={[
              styles.input,
              category === ""
                ? { backgroundColor: "grey", borderColor: "#ffffff" }
                : null,
            ]}
            value={renamed}
            onChangeText={(val) => setRenamed(val)}
            placeholder={category}
            editable={category === "" ? false : true}
          />
        </View>
        {/*row 3*/}
        <View style={[styles.card, { backgroundColor: "none" }]}>
          <TouchableOpacity style={[styles.confirmButton]}>
            <Text style={{ fontSize: 15, fontWeight: "200", color: "#ffffff" }}>
              <IconFont name="edit" size={25} color="#ffffff" />
              Change name
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.confirmButton, { backgroundColor: "red" }]}
          >
            <Text style={{ fontSize: 15, fontWeight: "200", color: "#ffffff" }}>
              <IconM name="delete" size={25} color="#ffffff" />
              Delete category
            </Text>
          </TouchableOpacity>
        </View>

        {/*row 4*/}
        <View style={[styles.card, { backgroundColor: "transparent" }]}>
          <ScrollView horizontal={true}>
            <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
              <Row
                data={tableHead}
                widthArr={widthArr}
                style={styles.header}
                textStyle={styles.text}
              />
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
                  {renderTableRow()}
                </Table>
              </ScrollView>
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
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
    padding: 10,
    backgroundColor: "#087dff",
    borderRadius: 20,
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  header: { height: 50, backgroundColor: "#e0efff" },
  text: { textAlign: "center", fontWeight: "100" },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: "#E7E6E1" },
});
export default ViewItems;
