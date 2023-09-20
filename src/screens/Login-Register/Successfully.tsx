import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { StatusBar, StyleSheet, View } from 'react-native';
import { TextView } from '../../components/TextView';
import { ImageView } from '../../components/ImageView';
import {SUCCESSFULLY } from '../../../assets/images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackHome } from '../../Navigation/StackHome';
type PropsType = NativeStackScreenProps<StackHome, "Successfully">;
const Successfully:React.FC<PropsType>= (props) => {
    const { navigation } = props;

    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor="#FFFFFF"
                barStyle='dark-content'
            />
            <View style={_styles.container}>
                <View>
                    <ImageView
                        source={SUCCESSFULLY}
                        imageStyle={_styles.icon}
                    />
                    <TextView title="Successfully created an account " ></TextView>
                    <TextView title='After this you can explore any place you want enjoy it!' textStyle={{ color: "#BABABA", fontSize: 17, fontWeight: "400" }} styleContainer={{ alignItems: 'flex-start' }}></TextView>
                </View>
            </View>
            <Button title="Let's Explore" styleView={{marginBottom:40}} stylePressable={{width:330}}  onPress={() => {navigation.navigate("FavoritePlace");}}></Button>
        </>

    );
}
const _styles = StyleSheet.create({
    icon: {
        height: 140,
        width: 130,
        marginTop:80,

    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal:30,
        backgroundColor:'#FFFFFF'
    },

})
export default Successfully;