import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

//navigation

import { useState } from "react";
import Dropdown from "../../components/dropdown";
import { RadioButton } from "react-native-paper";

interface AddDayScreenProps {
  navigation: any;
}

const CustomHeader = ({ navigation }: AddDayScreenProps) => {
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
          Add new item
        </Text>
      </View>
    </View>
  );
};

const categories = ["Fruits", "Vegetables", "Electronics"];
const items = ["Apple", "Banana", "Orange"];
interface AddDayScreenProps {
  navigation: any;
}
const AddPurchase = ({ navigation }: AddDayScreenProps) => {
  const [name, setName] = useState("");
  const [amount, onChangeAmount] = useState("");

  const [unit, setUnit] = useState("item");
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [curr, setCurr] = useState("lbp");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <CustomHeader navigation={navigation} />
        {/*row 1*/}
        <View style={styles.card}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 25, fontWeight: "200" }}>item name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(val) => setName(val)}
              placeholder="Enter name"
            />
          </View>

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
            />
          </View>
        </View>

        {/*row 2*/}
        <View style={styles.card}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 25, fontWeight: "200" }}>
              Stock : {amount}
            </Text>
          </View>
        </View>

        {/*row 3*/}
        <View style={styles.card}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 25, fontWeight: "200" }}>Amount/unit</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={10}
              value={amount.toString()}
              onChangeText={(val) => onChangeAmount(val)}
              placeholder="Enter amount"
            />
          </View>
          <View
            style={{ justifyContent: "center", flexDirection: "row", flex: 2 }}
          >
            <View style={{ padding: 10 }}>
              <TouchableOpacity onPress={() => setUnit("item")}>
                <Text
                  style={[
                    unit === "item"
                      ? { opacity: 1, color: "#087dff" }
                      : { opacity: 0.5 },
                    { fontSize: 20 },
                  ]}
                >
                  item
                </Text>
                <RadioButton
                  value="item"
                  status={unit === "item" ? "checked" : "unchecked"}
                  onPress={() => setUnit("item")}
                />
              </TouchableOpacity>
            </View>

            <View style={{ padding: 10 }}>
              <TouchableOpacity onPress={() => setUnit("kg")}>
                <Text
                  style={[
                    unit === "kg"
                      ? { opacity: 1, color: "#087dff" }
                      : { opacity: 0.5 },
                    { fontSize: 20 },
                  ]}
                >
                  Kg
                </Text>
                <RadioButton
                  value="kg"
                  status={unit === "kg" ? "checked" : "unchecked"}
                  onPress={() => setUnit("kg")}
                />
              </TouchableOpacity>
            </View>

            <View style={{ padding: 10 }}>
              <TouchableOpacity onPress={() => setUnit("pack")}>
                <Text
                  style={[
                    unit === "pack"
                      ? { opacity: 1, color: "#087dff" }
                      : { opacity: 0.5 },
                    { fontSize: 20 },
                  ]}
                >
                  Package
                </Text>
                <RadioButton
                  value="pack"
                  status={unit === "pack" ? "checked" : "unchecked"}
                  onPress={() => setUnit("pack")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/*Row 4*/}
        <View style={styles.card}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 25, fontWeight: "200" }}>Cost/curr:</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={10}
              value={cost.toString()}
              onChangeText={(val) => setCost(val)}
              placeholder="Enter cost"
            />
          </View>

          <View
            style={{ justifyContent: "center", flexDirection: "row", flex: 2 }}
          >
            <View style={{ padding: 10 }}>
              <Text
                style={[
                  curr === "lbp"
                    ? { opacity: 1, color: "#087dff" }
                    : { opacity: 0.5 },
                  { fontSize: 20 },
                ]}
              >
                LBP
              </Text>
              <RadioButton
                value="lbp"
                status={curr === "lbp" ? "checked" : "unchecked"}
                onPress={() => setCurr("lbp")}
              />
            </View>

            <View style={{ padding: 10 }}>
              <Text
                style={[
                  curr === "usd"
                    ? { opacity: 1, color: "#087dff" }
                    : { opacity: 0.5 },
                  { fontSize: 20 },
                ]}
              >
                $USD
              </Text>
              <RadioButton
                value="usd"
                status={curr === "usd" ? "checked" : "unchecked"}
                onPress={() => setCurr("usd")}
              />
            </View>
          </View>
        </View>

        {/*Row 5*/}
        <View style={styles.card}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 25, fontWeight: "200" }}>Price/curr:</Text>
            <TextInput
              style={[styles.input, { width: "33%" }]}
              keyboardType="number-pad"
              maxLength={10}
              value={price.toString()}
              onChangeText={(val) => setPrice(val)}
              placeholder="Enter price"
            />
          </View>
        </View>
        {/*Row 6*/}
        <View
          style={[
            styles.card,
            { backgroundColor: "transparent", marginLeft: "35%" },
          ]}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.confirmButton}>
              <Text style={{ color: "#ffffff" }}>Confirm new item</Text>
            </TouchableOpacity>
          </View>
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
    // borderColor:'#087dff',
    // width:Dimensions.get('window').width-90,
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
export default AddPurchase;
