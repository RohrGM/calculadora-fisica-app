import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./tab.routes";
import Definition from "../pages/definition";


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="definition"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="definition"
                component={Definition}
            />
            <Stack.Screen
                name="calculator"
                component={TabRoutes}
            />
        </Stack.Navigator>
    );
}