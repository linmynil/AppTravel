import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewProps, ViewStyle } from 'react-native';
import { TextView } from './TextView';

export type TitleProps={
    left:string,
    right?:string,
    styleright?:StyleProp<ViewStyle>,

}

const _Title : React.FC<TitleProps> =(props) =>{
 const {left,right} = props;
 return(
    <View style={_style.container}>
        <TextView title={left} textStyle={{fontSize:18}} styleContainer={{marginTop:0}}></TextView>
        <Text style={StyleSheet.flatten([_style.text, props.styleright])}>{right}</Text>
    </View>
 );
} 
const _style = StyleSheet.create({
    container:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:30,
      marginBottom:30
    },
    text:{
      fontSize:18,
      color:'#BABABA',
      opacity:1,
    }

})
export const TextTitle = React.memo(_Title);