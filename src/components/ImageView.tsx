import {
    StyleSheet,
    View,
    Image,
    StyleProp,
    ViewStyle,
    ImageStyle,
    Dimensions,
    ImageSourcePropType
  } from "react-native";
  import React from "react";
  
  export type ImageViewProps = {
    source: ImageSourcePropType;
    viewStyle?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
  };
  
  const _ImageView: React.FC<ImageViewProps> = (props) => {
    const { source } = props;
    return (
      <View style={StyleSheet.flatten([_styles.container, props.viewStyle])}>
        <Image
          style={StyleSheet.flatten([_styles.image, props.imageStyle])}
          source={source}
        />
      </View>
    );
  };
  
  const _styles = StyleSheet.create({
    container: {
      flex:0,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
  
    image: {
      resizeMode: "stretch",
      width: Dimensions.get("window").width * 1,
      height: Dimensions.get("window").height * 1,
      display:"flex"
    },
  });
  
  export const ImageView = React.memo(_ImageView);