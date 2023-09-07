import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { StatusBar, StyleSheet, View } from 'react-native';
import { TextView } from '../../components/TextView';
import { ImageView } from '../../components/ImageView';
import { BOOKING, LOGOBLACK, SUCCESSFULLY } from '../../../assets/images';



const BookingSuccessfully = () => {

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
                        source={BOOKING}
                        imageStyle={_styles.icon}
                    />
                    <TextView title="Booking Successfully " textStyle={{fontSize:35}} ></TextView>
                    <TextView title="Get everything ready until it's time to go on a trip!" textStyle={{ color: "#BABABA", fontSize: 17, fontWeight: "400" }} styleContainer={{ alignItems: 'flex-start' }}></TextView>
                </View>
            </View>
            <Button title="Explore Other Places" styleView={{marginBottom:40}} stylePressable={{width:330}} ></Button>
        </>

    );
}
const _styles = StyleSheet.create({
    icon: {
        height: 140,
        width: 130,
        marginTop:100,
        marginBottom:50

    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        marginHorizontal:30
    },

})
export default BookingSuccessfully;