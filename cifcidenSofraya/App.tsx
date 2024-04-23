import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import RootNavigator from "./src/navigators/RootNavigator"
import 'react-native-gesture-handler'
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
