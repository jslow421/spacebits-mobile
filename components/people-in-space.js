import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function PeopleInSpace() {
	const [peopleInSpace, setPeopleInSpace] = useState([]);

	const getPeopleInSpace = async () => {
		try {
			const headers = new Headers();
			headers.append("Content-Type", "application/json");
			headers.append("x-api-key", "9Qr0KgdEeX8HJtutvYnXh1kzPez4JeED3CBMJDJe");

			const requestOptions = {
				method: "GET",
				headers: headers,
			};

			const response = await fetch("https://api.spacebits.net/people", requestOptions);
			const json = await response.json();
			setPeopleInSpace(json.people);
			return json;
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getPeopleInSpace();
	}, []);

	return (
		<View>
			<Text>People in space</Text>
			{peopleInSpace.map((person, index) => (
				<Text key={index}>{person.name}</Text>
			))}
		</View>
	);
}
