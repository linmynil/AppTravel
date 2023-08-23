import {
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    ViewStyle,
  } from "react-native";
  
  import React from "react";
  
  export type ButtonProps = {
    title: string;
    stylePressable?: StyleProp<ViewStyle>;
    styleText?: StyleProp<TextStyle>;
    onPress?: (screen?: string) => void;
  };
  
  const _Button: React.FC<ButtonProps> = (props) => {
  
    const { title, onPress } = props;
  
    const handlePress = () => {
      onPress && onPress();
    };
  
    return (
      <Pressable
        onPress={handlePress}
        style={StyleSheet.flatten([_styles.container, props.stylePressable])}
      >
        <Text style={StyleSheet.flatten([_styles.styleText, props.styleText])}>
          {title}
        </Text>
      </Pressable>
    )
  
  
  };
  
  const _styles = StyleSheet.create({
    container: {
      marginHorizontal: 25,
      height: 45,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 15,
      backgroundColor:"#FCD240"
    },
  
    styleText: {
      fontSize: 14,
      fontWeight:"bold"
    },
  });
  
  export const Button = React.memo(_Button);