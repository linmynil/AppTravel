import React from 'react';
import Login from './src/screens/Login';
import { Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const App = () => {
  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  }
  return (
    <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
      <SafeAreaView style={_styles.container}>
      <Login></Login>
      </SafeAreaView> 
    </TouchableWithoutFeedback>

  );
};
const _styles = StyleSheet.create({
  container: {
   flex:1
  },
});
export default App;

