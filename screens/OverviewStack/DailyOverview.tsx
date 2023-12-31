import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import IconF from "react-native-vector-icons/Feather";
import IconFont from "react-native-vector-icons/FontAwesome5";
import IconE from "react-native-vector-icons/Entypo";

//redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setDailyNetProfit,
  setDailyTotalRevenue,
  setDailyTotalSold,
  setDailyBest,
} from "../../redux/dailyOverviewSlice";

interface DailyScreenProps {
  navigation: any;
}

const CustomHeader = ({ navigation }: DailyScreenProps) => {
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
          Daily Sales Overview
        </Text>
        <Text style={{ fontSize: 25, fontWeight: "200" }}>May 12, 2023</Text>
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

const DailyOverview = ({ navigation }: DailyScreenProps) => {
  const dailyNetProfit = useSelector(
    (state: RootState) => state.dailyOverview.dailyNetProfit
  );

  const dailyTotalRevenue = useSelector(
    (state: RootState) => state.dailyOverview.dailyTotalRevenue
  );

  const dailyTotalSold = useSelector(
    (state: RootState) => state.dailyOverview.dailyTotalSold
  );

  const dailyBest = useSelector(
    (state: RootState) => state.dailyOverview.dailyBest
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader navigation={navigation} />
      <Card
        value={"$" + dailyNetProfit}
        text="Net Profit"
        icon={<IconF name="trending-up" size={65} color="#087dff" />}
      />
      <Card
        value={"$" + dailyTotalRevenue}
        text="Total Revenue"
        icon={<Icon name="wallet" size={65} color={"#087dff"} />}
      />
      <Card
        value={dailyTotalSold}
        text="Total Sold"
        icon={<IconFont name="shopping-basket" size={65} color={"#087dff"} />}
      />
      <Card
        value={dailyBest}
        text="Best selling category"
        icon={<IconE name="price-tag" size={65} color={"#087dff"} />}
      />
    </SafeAreaView>
  );
};

export default DailyOverview;
