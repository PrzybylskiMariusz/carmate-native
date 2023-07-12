import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../constants/colors";

import { DashboardScreen } from "./DashboardScreen";
import { HistoryScreen } from "./HistoryScreen";
import { ServicesScreen } from "./ServicesScreen";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
	return (
		<Tab.Navigator
			initialRouteName="Dashboard"
			screenOptions={{
				tabBarActiveTintColor: colors.primary500,
				tabBarInactiveTintColor: colors.accent500,
				header: () => null,
			}}>
			<Tab.Screen
				name="Dashboard"
				component={DashboardScreen}
				options={{
					tabBarLabel: "Pulpit",
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="History"
				component={HistoryScreen}
				options={{
					tabBarLabel: "Historia",
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="history" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Services"
				component={ServicesScreen}
				options={{
					tabBarLabel: "Serwisy",
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="car-repair" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};
