import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

//icons
import Icon from "react-native-vector-icons/Ionicons";
import IconF from "react-native-vector-icons/Feather";
import IconFont from "react-native-vector-icons/FontAwesome5";
import IconE from "react-native-vector-icons/Entypo";

//redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setMonthlyNetProfit,
  setMonthlyTotalRevenue,
  setMonthlyTotalSold,
  setMonthlyBest,
} from "../../redux/monthlyOverviewSlice";

interface MonthlyOverviewProps {
  navigation: any;
}

const CustomHeader = ({ navigation }: MonthlyOverviewProps) => {
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
          Monthly Sales Overview
        </Text>
        <Text style={{ fontSize: 25, fontWeight: "200" }}>May 2023</Text>
      </View>
    </View>
  );
};
const Card = ({ value, text, icon }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        alignItems: "center",
        margin: 10,
        padding: 10,
        backgroundColor: "#e0efff",
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 40, fontWeight: "200" }}>{value}</Text>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>{text}</Text>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {icon}
      </View>
    </View>
  );
};

const MonthlyOverview = ({ navigation }: MonthlyOverviewProps) => {
  const monthlyNetProfit = useSelector(
    (state: RootState) => state.monthlyOverview.monthlyNetProfit
  );

  const monthlyTotalRevenue = useSelector(
    (state: RootState) => state.monthlyOverview.monthlyTotalRevenue
  );

  const monthlyTotalSold = useSelector(
    (state: RootState) => state.monthlyOverview.monthlyTotalSold
  );

  const monthlyBest = useSelector(
    (state: RootState) => state.monthlyOverview.monthlyBest
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader navigation={navigation} />
      <Card
        value={"$" + monthlyNetProfit}
        text="Net Profit"
        icon={<IconF name="trending-up" size={65} color="#087dff" />}
      />
      <Card
        value={"$" + monthlyTotalRevenue}
        text="Total Revenue"
        icon={<Icon name="wallet" size={65} color={"#087dff"} />}
      />
      <Card
        value={monthlyTotalSold}
        text="Total Sold"
        icon={<IconFont name="shopping-basket" size={65} color={"#087dff"} />}
      />
      <Card
        value={monthlyBest}
        text="Best selling category"
        icon={<IconE name="price-tag" size={65} color={"#087dff"} />}
      />
    </SafeAreaView>
  );
};

export default MonthlyOverview;
