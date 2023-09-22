import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function NearEarthObjects() {
	const [nearEarthObjects, setNearEarthObjects] = useState([]);
	const getNearEarthObjects = async () => {
		try {
			const headers = new Headers();
			headers.append("Content-Type", "application/json");
			headers.append("x-api-key", "9Qr0KgdEeX8HJtutvYnXh1kzPez4JeED3CBMJDJe");

			const requestOptions = {
				method: "GET",
				headers: headers,
			};

			const response = await fetch("https://api.spacebits.net/neo", requestOptions);
			const json = await response.json();
			setNearEarthObjects(json.data.near_earth_objects);
			return json;
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getNearEarthObjects();
	}, []);

	return (
		<View>
			<Text>NEO</Text>
			{nearEarthObjects.map((nobject, index) => (
				<Text key={index}>{nobject.name}</Text>
			))}
		</View>
	);
}
