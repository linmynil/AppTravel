import React, { useRef, useState } from 'react';
import { StyleProp, StyleSheet, TextInput, TextStyle, ViewStyle, Animated, Easing, TouchableOpacity, Image, View } from 'react-native';
import { ImageView } from './ImageView';
import { HIDEEYE, SHOWEYE } from '../../assets/images';


export type TextInputProps = {
  label?: string;
  value: string;
  onChange?: (text: string) => void;
  styleView?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  labelcolor?: string;
  hidden?: string;
};

const _TextField: React.FC<TextInputProps> = (props) => {

  const { label, onChange, value, labelcolor = '#FCD240', hidden } = props;
  const transY = useRef(new Animated.Value(0)).current;
  const borderWidth = useRef(new Animated.Value(0)).current;
  const [hidePassword, setHidePassword] = useState(true);

  const managePasswordVisibility = () => {
    setHidePassword(!hidePassword);
    console.log(hidePassword)
  };

  const handleFocus = () => {
    if(label){
      animateTransform(-25);   
    }
    animateBorderWidth(2)
  }
  const handleBlur = () => {
    if (!value) {
      animateTransform(0);
      animateBorderWidth(1);
    }
    else {
      if(label){
      animateTransform(-23);
      }
      animateBorderWidth(1);
    }

  }

  const animateTransform = (toValue: number) => {
    Animated.timing(transY, {
      toValue,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.ease
    }).start();
  }


  const animateBorderWidth = (toValue: number) => {
    Animated.timing(borderWidth, {
      toValue,
      duration: 200,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
  }
  const transX = transY.interpolate({
    inputRange: [-30, 0],
    outputRange: [2, 0],
    extrapolate: 'clamp'
  })
  const borderColor = borderWidth.interpolate({
    inputRange: [1, 2],
    outputRange: ['#c7c7c7', '#FCD240'],
    extrapolate: 'clamp'
  })
  const labelColoranimated = borderWidth.interpolate({
    inputRange: [1, 2],
    outputRange: ['#c7c7c7', labelcolor],
    extrapolate: 'clamp'
  })

  return hidden ? (
    <View style={_styles.container}>
      <Animated.View style={StyleSheet.flatten([_styles.styleInput, { borderColor }, props.styleView])}>
        <Animated.View style={StyleSheet.flatten([_styles.stylelabel, { transform: [{ translateY: transY }, { translateX: transX }] }, props.styleView])}>
          <Animated.Text style={StyleSheet.flatten([_styles.styleTextLabel, { color: labelColoranimated }, props.textStyle])}>{label}</Animated.Text>
        </Animated.View>
        <TextInput
          secureTextEntry={hidePassword}
          onChangeText={onChange}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={_styles.visibilityBtn}
          onPress={managePasswordVisibility}>
          <ImageView
            source={hidePassword
              ? HIDEEYE
              : SHOWEYE}
            imageStyle={_styles.icon}
          />
        </TouchableOpacity>

      </Animated.View>
    </View>

  ) : (
    <View style={_styles.container}>
      <Animated.View style={StyleSheet.flatten([_styles.styleInput, { borderColor }, props.styleView])}>
        <Animated.View style={[_styles.stylelabel, { transform: [{ translateY: transY }, { translateX: transX }] }]}>
          <Animated.Text style={StyleSheet.flatten([_styles.styleTextLabel, { color: labelColoranimated }, props.textStyle])}>{label}</Animated.Text>
        </Animated.View>
        <TextInput
          onChangeText={onChange}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Animated.View>
    </View>

  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  styleText: {
    fontSize: 16,
    marginBottom: 5,
  },
  styleTextLabel: {
    width: 40,
    backgroundColor: "#FFFFFF",
    paddingStart: 3,
    paddingEnd: 2
  },
  styleInput: {
    marginTop: 35,
    borderWidth: 1,
    borderColor: "#c7c7c7",
    height: 55,
    width: 330,
    borderRadius: 15,
    paddingStart: 15,
    paddingEnd: 15,
  },
  stylelabel: {
    position: "absolute",
    height: 50,
    width: 315,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 16,
    paddingTop: 15,
  },
  visibilityBtn: {
    position: 'absolute',
    right: 15,
    marginTop: 12
  },
  icon: {
    width: 24,
    height: 24,
  }
});

export const TextField = React.memo(_TextField);