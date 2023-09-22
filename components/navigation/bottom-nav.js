import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../homescreen";
import PeopleInSpace from "./people-in-space";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="People In Space" component={PeopleInSpace} />
		</Tab.Navigator>
	);
}
