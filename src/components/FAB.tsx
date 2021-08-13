import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';

interface Props {
  position?: 'bR' | 'bL';
  title: string;
  onPress: () => void;
}

const FabComponent = ({ title, onPress, position = 'bR' }: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[
          styles.fabLocation,
          position === 'bL' ? styles.left : styles.right
        ]}>
        <View style={styles.container}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'bL' ? styles.left : styles.right
        ]}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('blue', true, 20)}
          onPress={onPress}>
          <View style={styles.container}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25
  },
  right: {
    right: 10
  },
  left: {
    left: 10
  },
  fabText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  container: {
    borderRadius: 100,
    height: 40,
    width: 40,
    backgroundColor: '#292381',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9
  }
});

export default FabComponent;
