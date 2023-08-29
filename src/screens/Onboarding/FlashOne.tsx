import React from 'react';
import { ImageView } from '../../components/ImageView';
import { LOGOBLACK } from '../../../assets/images';
import { TextView } from '../../components/TextView';
import { StyleSheet, View } from 'react-native';

const FlashOne = () => {
    return (
        <View style={_styles.container}>
            <ImageView source={LOGOBLACK} imageStyle={{ height: 35, width: 100}} viewStyle={{flex:1}}></ImageView>
            <TextView title="Version 11.0" textStyle={{ color: "grey", fontSize: 11, fontWeight: "normal" }}  styleContainer={{alignItems:'center', marginBottom:20}}></TextView>
        </View>
        

    );
}

const _styles=StyleSheet.create({
    container:{
       flex:1,
    },
})
export default FlashOne; 