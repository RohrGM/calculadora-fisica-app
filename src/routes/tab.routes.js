import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import EletroField from "../pages/eletro-field/index.js";
import LoadEquation from "../pages/load-equation/index.js";
import PotentialEnergy from "../pages/potential-energy/index.js";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const potentialEnergyOn = require('../../assets/images/potential-energy-on.png');
const potentialEnergyOff = require('../../assets/images/potential-energy-off.png');
const rateOn = require('../../assets/images/rate-on.png');
const rateOff = require('../../assets/images/rate-off.png');
const electricityOn = require('../../assets/images/electricity-on.png');
const electricityOff = require('../../assets/images/electricity-off.png');

export default function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={
                {

                    tabBarActiveTintColor: '#4b836a',
                    tabBarInactiveTintColor: '#787878',
                    tabBarStyle: {
                        bottom: 0,
                        paddingBottom: 2,
                    }
                }
            }
        >
            <Tab.Screen
                name="Força elétrica"
                component={EletroField}
                options={{
                    tabBarIcon: ({ size, focused }) => <Image
                        source={focused ? electricityOn : electricityOff}
                        style={{ width: size, height: size, resizeMode: 'stretch' }}
                    />,
                    tabBarLabel: 'Força Elétrica'
                }}
            />
            <Tab.Screen
                name="Equação de cargas"
                component={LoadEquation}
                options={{
                    tabBarIcon: ({ size, focused }) => <Image
                        source={focused ? rateOn : rateOff}
                        style={{ width: size, height: size, resizeMode: 'stretch' }}
                    />,
                    tabBarLabel: 'Equação de Cargas'
                }}
            />
            <Tab.Screen
                name="Energia potencial"
                component={PotentialEnergy}
                options={{
                    tabBarIcon: ({ size, focused }) => <Image
                        source={focused ? potentialEnergyOn : potentialEnergyOff}
                        style={{ width: size, height: size, resizeMode: 'stretch' }}
                    />,
                    tabBarLabel: 'Energia Potencial'
                }}
            />
        </Tab.Navigator>
    );
}