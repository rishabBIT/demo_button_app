import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    return (
            <View style={styles.container}>
            <Button
            onPress={() => {}}
            title="Click"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
            </View>
           );
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});
