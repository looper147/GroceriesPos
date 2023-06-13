import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Chart from "../components/chart";
import { useNavigation } from "@react-navigation/native";
// import DailyOverview from './DailyOverview';
import Icon from "react-native-vector-icons/Ionicons";
import IconF from "react-native-vector-icons/Feather";
import IconM from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-gesture-handler";

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
  const handlePress = (screenName: string): void => {
    navigation.navigate(screenName);
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
                value="+$1242"
                label2="Top selling"
                value2="Apples"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlePress("MonthlyOverview")}>
              <Card
                title="Monthly sales"
                label="Total income"
                value="+$37000"
                label2="Top selling"
                value2="Orange"
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
