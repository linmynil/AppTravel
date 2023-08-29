import React from 'react';
import Login from './src/screens/Login-Register/Login';
import { Keyboard, KeyboardAvoidingView, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import CreateAccount from './src/screens/Login-Register/CreateAccount';
import { GG } from './assets/images';
import InputEmail from './src/screens/Login-Register/InputEmail';
import CreatePassword from './src/screens/Login-Register/CreatePassword';
import Verification from './src/screens/Login-Register/Verification';
import CreateNewPassword from './src/screens/Login-Register/CreateNewPassword';
import FogotPassword from './src/screens/Login-Register/FogotPassword';
import Successfully from './src/screens/Login-Register/Successfully';
import FavoritePlace from './src/screens/Login-Register/FavoritePlace';
import Onboarding from 'react-native-onboarding-swiper';
import FlashOne from './src/screens/Onboarding/FlashOne';
import FlashTwo from './src/screens/Onboarding/FlashTwo';
import FlashThree from './src/screens/Onboarding/FlashThree';
import FlashFour from './src/screens/Onboarding/FashFour';
import { Header } from './src/components/Header';
import Detail from './src/screens/Home-Detail/Detail';

const App = () => {
  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  }
  return (

    <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
      <SafeAreaView style={_styles.container}>
        {/* <Login></Login> */}
        {/* <CreateAccount></CreateAccount> */}
        {/* <InputEmail></InputEmail> */}
        {/* <CreatePassword></CreatePassword> */}
        {/* <Verification></Verification> */}
        {/* <CreateNewPassword></CreateNewPassword> */}
        {/* <FogotPassword></FogotPassword> */}
        {/* <Successfully></Successfully> */}
        {/* <FavoritePlace></FavoritePlace> */}
        {/* <FlashOne></FlashOne> */}
        {/* <FlashTwo></FlashTwo> */}
        {/* <FlashThree></FlashThree> */}
        {/* <FlashFour></FlashFour> */}
        <Detail></Detail>
      </SafeAreaView>
    </TouchableWithoutFeedback>

  );
};
const _styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
});
export default App;

