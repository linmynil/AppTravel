import React from 'react';
import { ImageSourcePropType, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TextView } from './TextView';
import { ImageView } from './ImageView';
import { ONESTAR, STAR } from '../../assets/images';

export type TitleProps = {
  left: string,
  right?: string,
  styleright?: StyleProp<ViewStyle>,
  star?: string,
  styleContainer?: StyleProp<ViewStyle>,

}

const _Title: React.FC<TitleProps> = (props) => {
  const { left, right, star } = props;
  return star ?
    (
      <View style={StyleSheet.flatten([_style.container, props.styleContainer])}>
        <View style={_style.row}>
        <TextView title={left} textStyle={{ fontSize: 18 }} styleContainer={{ marginTop: 0 }}></TextView>
        <Text style={StyleSheet.flatten([_style.right, props.styleright])}>{star}</Text>
        </View>
        <View style={_style.row}>
        <ImageView source={STAR} imageStyle={{width:22, height:22}} viewStyle={{marginRight:5}}></ImageView>
        <Text style={StyleSheet.flatten([_style.right, props.styleright])}>{right}</Text>
        </View>      
      </View>
    ) :
    (
      <View style={StyleSheet.flatten([_style.container, props.styleContainer])}>
        <TextView title={left} textStyle={{ fontSize: 18 }} styleContainer={{ marginTop: 0}}></TextView>
        <Text style={StyleSheet.flatten([_style.text, props.styleright])}>{right}</Text>
      </View>
    );
}
const _style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#BABABA',
    opacity: 1,
  },
  right:{
    fontSize:18,
    fontWeight:'bold',
    color:'black'
  }

})
export const TextTitle = React.memo(_Title);