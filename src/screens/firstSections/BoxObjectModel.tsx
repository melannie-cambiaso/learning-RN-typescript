import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  title: {
    fontSize: 20
  }
});
