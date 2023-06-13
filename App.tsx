import "react-native-gesture-handler";

import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";
{
  /*Navigation*/
}
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

{
  /*Screens */
}
import { HomeScreen } from "./screens/HomeScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import DailyOverview from "./screens/OverviewStack/DailyOverview";
import MonthlyOverview from "./screens/OverviewStack/MonthlyOverview";
import GenOverview from "./screens/OverviewStack/GenOverview";
import AddDaily from "./screens/AddTabs/AddDaily";
import AddPurchase from "./screens/AddTabs/AddPurchase";
import AddItem from "./screens/AddTabs/AddItem";
import AddCategory from "./screens/AddTabs/AddCategory";

{
  /*Icons*/
}
import IconF from "react-native-vector-icons/Fontisto";
import IconFont from "react-native-vector-icons/FontAwesome5";
import IconA from "react-native-vector-icons/AntDesign";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewItems from "./screens/ViewItems";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Drawer.Navigator initialRouteName="Root">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const RootTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Add new sale"
        component={AddDaily}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => (
            <IconF name="shopping-sale" size={25} color="#087dff" />
          ),
        }}
      />
      <Tab.Screen
        name="Add new purchase"
        component={AddPurchase}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => (
            <IconFont name="shipping-fast" size={25} color="#087dff" />
          ),
        }}
      />
      <Tab.Screen
        name="Add new item"
        component={AddItem}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => (
            <IconF name="shopping-basket-add" size={25} color="#087dff" />
          ),
        }}
      />
      <Tab.Screen
        name="Add new category"
        component={AddCategory}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => (
            <IconA name="appstore1" size={25} color="#087dff" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ViewItems">
          {/*add screen */}
          <Stack.Screen
            name="AddDaily"
            component={RootTab}
            options={{
              headerShown: false,
              animation: "none",
              animationDuration: 899,
            }}
          />

          {/*view screen*/}
          <Stack.Screen
            name="ViewItems"
            component={ViewItems}
            options={{
              headerShown: false,
            }}
          />

          {/*home screen */}
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />

          {/*daily overview screen */}
          <Stack.Screen
            name="DailyOverview"
            component={DailyOverview}
            options={{ headerShown: false }}
          />

          {/*monthly overview screen */}
          <Stack.Screen
            name="MonthlyOverview"
            component={MonthlyOverview}
            options={{ headerShown: false }}
          />

          {/*general overview screen */}
          <Stack.Screen
            name="GeneralOverview"
            component={GenOverview}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
