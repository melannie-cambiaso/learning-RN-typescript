import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.containter}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: '#28C4D9'
  },
  caja1: {
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 30
  },
  caja2: {
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 30
  },
  caja3: {
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 30
  }
});

export default FlexScreen;
