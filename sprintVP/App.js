import { View, Text, StyleSheet } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import AuthScreen from './src/pages/acesso/AuthScreen';


export default function App() {
  const [fontCarregada] = useFonts({
    "RobotoRegular": Roboto_400Regular,
    "RobotoBold": Roboto_700Bold,
  });
  
  if(!fontCarregada) {
    return < View/>
  }


  return (
    <View style={styles.container}>
      <AuthScreen />
    </View> 
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