import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/homescreen";
import BottomNav from "./components/navigation/bottom-nav";

export default function App() {
	return (
		<NavigationContainer>
			<BottomNav />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
