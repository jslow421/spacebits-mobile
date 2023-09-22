import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import HomeScreen from "../homescreen";
import NearEarthObjects from "../neo";
import PeopleInSpace from "../people-in-space";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="People In Space" component={PeopleInSpace} />
			<Tab.Screen name="Near Earth Objects" component={NearEarthObjects} />
		</Tab.Navigator>
	);
}
