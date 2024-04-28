import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from './src/routes/stack.routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}