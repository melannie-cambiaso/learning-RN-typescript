import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FAB from '../components/FAB';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  counterText: {
    textAlign: 'center',
    fontSize: 40
  }
});

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Contador: {counter}</Text>

      <FAB onPress={() => setCounter(counter + 1)} title="+1" />

      <FAB position="bL" onPress={() => setCounter(counter - 1)} title="-1" />
    </View>
  );
};

export default CounterScreen;
