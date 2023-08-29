import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";

export type TextViewProps = {
  styleContainer?: StyleProp<ViewStyle>;
  title: string;
  textStyle?: StyleProp<TextStyle>;
};

const _TextView: React.FC<TextViewProps> = (props) => {
  const { title } = props;
  return (
    <View style={StyleSheet.flatten([_styles.container, props.styleContainer])}>
      <Text style={StyleSheet.flatten([_styles.textStyle, props.textStyle])}>
        {title}
      </Text>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop:15
  },

  textStyle: {
    fontSize: 25,
    fontWeight:"bold",
    color:"black",
  },
});
export const TextView = React.memo(_TextView);