import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CameraSetup from '../components/CameraSetup';

export default function Index() {
  return (
    <View style={styles.container}>
      <CameraSetup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#1e1e1e', // Dark background for dark mode
  },
  text: {
    fontSize: 24, // Increase font size
    fontWeight: 'bold', // Bold text
    color: '#ffffff', // White color for text
  },
});
