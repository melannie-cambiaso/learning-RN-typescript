import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 400,
    // height: 400,
    backgroundColor: '#28C4D9'
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#5856D6'
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#F0A23B'
  },
  cajaVerde: {
    borderWidth: 10,
    borderColor: 'white',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'green'
  }
});

const PostionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde}></View>
      <View style={styles.cajaMorada}></View>

      <View style={styles.cajaNaranja}></View>
    </View>
  );
};

export default PostionScreen;
