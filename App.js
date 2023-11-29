import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Top from './components/Top';
import Contact from "./components/Contact";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#666",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarStyle: {
            backgroundColor: "#666",
          },
          tabBarInactiveTintColor: "#ffffff88",
          tabBarActiveTintColor: "#fff",
        }}
      >
        <Tab.Screen
          name="Top"
          component={Top}
          options={{
            title: "TOP",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            title: "お問合わせ",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="information" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
