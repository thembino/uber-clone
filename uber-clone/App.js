import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
      <HomeScreen/>
      <StatusBar style="auto" />
    </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:'20px',
    fontWeight:'300',
  }, 
});
