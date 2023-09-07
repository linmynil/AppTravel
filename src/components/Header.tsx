import React from 'react';
import {Image, ImageRequireSource, ImageStyle, Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { ARROW } from '../../assets/images';



export type HeaderProps = {
  title:string,
  icon: ImageRequireSource,
  styleTitle?:StyleProp<TextStyle>,
  styleIcon?:StyleProp<ImageStyle>,
  styleView?:StyleProp<ViewStyle>;
  onPressBack?:()=>void;
  onPressIcon?:()=> void;
}
 const _Header: React.FC<HeaderProps>=(props)=>{
    const {title, icon, onPressBack, onPressIcon} = props;
    return(
        <View style={StyleSheet.flatten([_style.container,props.styleView])}>
            <Pressable onPress={onPressBack}>
                <Image source={ARROW} style={_style.back}></Image>
            </Pressable>
            <Text  style={StyleSheet.flatten([_style.text, props.styleTitle])}>{title}</Text>
            <Pressable onPress={onPressIcon}>
                <Image source={icon} style={StyleSheet.flatten([_style.icon, props.styleIcon])}></Image>
            </Pressable>    
        </View>
    );  
 }

  const _style = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height: 55,
        marginBottom:20,
        marginTop:20
    },
    back:{
      height:24,
      width:24
    },
    text:{
      fontSize:17,
      color:'black',
      opacity:1,
      fontWeight:'600'
    },
    icon:{
      height:24,
      width:24,
      opacity:1
    }
  });
 export const Header = React.memo(_Header);