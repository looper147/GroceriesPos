import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { LineChart, BarChart } from "react-native-chart-kit";

//sample data
const barData = {
  labels: ["Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [400, 200, 123, 321],
    },
  ],
};
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.9,
  useShadowColorFromDataset: false, // optional
  decimalPlaces: 0,
};
const Bar = () => {
  return (
    <View style={{ padding: 10, margin: 10 }}>
      <Text style={{ fontWeight: "200", fontSize: 25 }}>
        Total sales(previous 4 months)
      </Text>
      <BarChart
        style={{ marginVertical: 8, borderRadius: 16 }}
        data={barData}
        width={Dimensions.get("window").width - 50}
        height={250}
        yAxisLabel="$"
        yAxisSuffix=""
        chartConfig={chartConfig}

        // verticalLabelRotation={30}
      />
    </View>
  );
};

//sample data
const lineData = {
  labels: ["March", "April", "May", "June"],
  datasets: [
    {
      data: [28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Items Sold"], // optional
};
const Line = () => {
  return (
    <View style={{ padding: 10, margin: 10 }}>
      <Text style={{ fontWeight: "200", fontSize: 25 }}>
        Total sold(previous 4 months)
      </Text>
      <LineChart
        data={lineData}
        width={Dimensions.get("window").width - 50}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};
interface GenOverviewProps {
  navigation: any;
}

const CustomHeader = ({ navigation }: GenOverviewProps) => {
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
          General Overview
        </Text>
        <Text style={{ fontSize: 25, fontWeight: "200" }}>All time</Text>
      </View>
    </View>
  );
};

const GenOverview = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <ScrollView>
        <CustomHeader navigation={navigation} />
        <Bar />
        <Line />
      </ScrollView>
    </SafeAreaView>
  );
};
export default GenOverview;
