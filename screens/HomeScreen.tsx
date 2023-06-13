import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//chart and navigation
import Chart from "../components/chart";
import { StackNavigationState, useNavigation } from "@react-navigation/native";

//icons
import Icon from "react-native-vector-icons/Ionicons";
import IconF from "react-native-vector-icons/Feather";
import IconM from "react-native-vector-icons/MaterialIcons";

//redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  setDailyIncome,
  setDailyTop,
  setMonthlyIncome,
  setMonthlyTop,
} from "../redux/previewSalesSlice";

interface HomeScreenProps {
  navigation: any;
}

function CustomHeader({ navigation }: HomeScreenProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "#e0efff",
      }}
    >
      <View style={{ justifyContent: "center" }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={25} color="#087dff" />
        </TouchableOpacity>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => navigation.navigate("AddDaily")}>
          <Icon name="add" size={25} color="#087dff" />
        </TouchableOpacity>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => navigation.navigate("ViewItems")}>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#087dff" }}>
            View
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity>
          <IconF name="dollar-sign" size={20} color="#087dff" />
        </TouchableOpacity>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity>
          <IconM name="language" size={20} color="#087dff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const Card = ({ title, label, label2, value, value2 }: any) => {
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.text}>{title}</Text>
        <View>
          <View style={styles.cardItems}>
            <Text style={{ fontSize: 20, fontWeight: "300" }}>{value} </Text>
            <Text style={{ fontWeight: "700" }}>{label}</Text>
          </View>
          <View style={styles.cardItems}>
            <Text style={{ fontSize: 20, fontWeight: "300" }}>{value2} </Text>
            <Text style={{ fontWeight: "700" }}>{label2}</Text>
          </View>
        </View>
      </View>
    </>
  );
};
const HomeScreen = () => {
  const navigation = useNavigation();
  const dailyIncome = useSelector(
    (state: RootState) => state.salesPreview.dailyIncome
  );
  const dailyTop = useSelector(
    (state: RootState) => state.salesPreview.dailyTop
  );
  const monthlyIncome = useSelector(
    (state: RootState) => state.salesPreview.monthlyIncome
  );
  const monthlyTop = useSelector(
    (state: RootState) => state.salesPreview.monthlyTop
  );
  const dispatch = useDispatch();
  // Update the sales states using Redux dispatchers
  const updateDailyIncome = (newIncome: number) => {
    dispatch(setDailyIncome(newIncome));
  };

  const updateDailyTop = (newTop: string) => {
    dispatch(setDailyTop(newTop));
  };

  const updateMonthlyIncome = (newIncome: number) => {
    dispatch(setMonthlyIncome(newIncome));
  };

  const updateMonthlyTop = (newTop: string) => {
    dispatch(setMonthlyTop(newTop));
  };
  const handlePress = (screenName: any): void => {
    navigation.navigate(screenName as never);
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <CustomHeader navigation={navigation} />
          <View style={styles.container}>
            <TouchableOpacity onPress={() => handlePress("DailyOverview")}>
              <Card
                title="Daily sales"
                label="Total income"
                value={"$" + dailyIncome}
                label2="Top selling"
                value2={dailyTop}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlePress("MonthlyOverview")}>
              <Card
                title="Monthly sales"
                label="Total income"
                value={"$" + monthlyIncome}
                label2="Top selling"
                value2={monthlyTop}
              />
            </TouchableOpacity>

            <View style={styles.card}>
              <TouchableOpacity onPress={() => handlePress("GeneralOverview")}>
                <Text style={styles.text}>Best Selling Categories</Text>
                <Chart />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#e0efff",
    padding: 25,
    margin: 5,
  },
  cardItems: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 300,
  },
  icon: {
    flex: 1,
    borderColor: "white",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#087dff",
  },
});

export { HomeScreen };
