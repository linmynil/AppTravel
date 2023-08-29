import {
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
  } from "react-native";
  
  import React from "react";
  
  export type ButtonProps = {
    title: string;
    stylePressable?: StyleProp<ViewStyle>;
    styleView?: StyleProp<ViewStyle>;
    styleText?: StyleProp<TextStyle>;
    onPress?: (screen?: string) => void;
  };
  
  const _Button: React.FC<ButtonProps> = (props) => {
  
    const { title, onPress } = props;
  
    const handlePress = () => {
      onPress && onPress();
    };
  
    return (
      <View  style={StyleSheet.flatten([_styles.container, props.styleView])}>
        <Pressable
        onPress={handlePress}
        style={StyleSheet.flatten([_styles.button, props.stylePressable])}
      >
        <Text style={StyleSheet.flatten([_styles.styleText, props.styleText])}>
          {title}
        </Text>
      </Pressable>
      </View>
    )
  
  
  };
  
  const _styles = StyleSheet.create({
    container:{
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: 55,
      width:330,
      borderWidth:0,
      borderRadius: 15,
      backgroundColor:"#FCD240"
    },
  
    styleText: {
      fontSize: 16,
      fontWeight:"bold",
      color:"#000000"
    },
  });
  
  export const Button = React.memo(_Button);