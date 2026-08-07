import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles'
import { Header } from './Components/header/Header'
import { FormTask } from './Components/formtask/FormTask';
import { TaskList } from './Components/tasklist/TaskList';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer} >
        <View style={styles.container}>
         <Header/>
          <FormTask/>
          <TaskList/>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
