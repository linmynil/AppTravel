import React, { useState } from 'react';
import { Total } from '../../components/Total';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Header } from '../../components/Header';
import { ARROW, CARD, DOT, LINE, MASTER } from '../../../assets/images';
import { TextField } from '../../components/TextField';
import { ImageView } from '../../components/ImageView';
import { TextView } from '../../components/TextView';

const Payment = () => {
    const [card, setCard] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');

    const handleCard = (value: string) => {
        setCard(value);
    }
    const handleCvv = (value: string) => {
        setCvv(value);
    }

    return (
        <View style={_style.container}>
            <View>
                <Header title='Payment' icon={ARROW} styleIcon={{ opacity: 0 }} styleView={{ marginBottom: 0 }}></Header>
                <View style={_style.card}>
                    <ImageView source={CARD} imageStyle={{ width: 335, height: 220, resizeMode: 'cover', borderRadius: 15 }}></ImageView>
                    <View style={_style.content}>
                    <TextView title="Pristia Candra" textStyle={{ color: "#f1f1f1", fontSize: 17, fontWeight: "400" }}  styleContainer={{ marginTop: 30}}></TextView>
                        <View style={_style.text}>
                            <TextView title="Master card" textStyle={{ color: "#f1f1f1", fontSize: 17, fontWeight: "400" }} ></TextView>
                            <View style={[_style.address, {marginTop:10 }]}> 
                                <TextView title=" 4756" textStyle={{ color: "#f1f1f1", fontSize: 17, fontWeight: "normal" }} styleContainer={{ marginTop: 0 }}></TextView>
                                <ImageView source={DOT} imageStyle={{ height: 10, width: 10 }} viewStyle={{ marginLeft: 5 }}></ImageView>
                                <ImageView source={DOT} imageStyle={{ height: 10, width: 10 }} ></ImageView>
                                <ImageView source={DOT} imageStyle={{ height: 10, width: 10 }} ></ImageView>
                                <ImageView source={DOT} imageStyle={{ height: 10, width: 10 }} viewStyle={{ marginRight: 5 }}></ImageView>
                                <ImageView source={DOT} imageStyle={{ height: 10, width: 10 }}></ImageView>
                                <ImageView source={DOT} imageStyle={{ height: 10, width: 10 }} ></ImageView>
                                <ImageView source={DOT} imageStyle={{ height: 10, width: 10 }} ></ImageView>
                                <ImageView source={DOT} imageStyle={{ height: 10, width: 10 }} viewStyle={{ marginRight: 5 }}></ImageView>
                                <TextView title="9081" textStyle={{ color: "#f1f1f1", fontSize: 17, fontWeight: "normal" }} styleContainer={{ marginTop:0 }}></TextView>
                            </View>
                            <View style={[_style.address, { justifyContent: 'space-between',marginTop:-10 }]}>                               
                                    <TextView title="$3.469.52 " textStyle={{ color: "#f1f1f1", fontSize: 17, fontWeight: "normal" }} styleContainer={{ marginTop: 0}}></TextView>
                                    <ImageView source={MASTER} imageStyle={{ height: 60, width: 60 }} ></ImageView>
                            </View>
                            
                        </View>

                    </View>
                </View>
                <TextField value={card}
                    label='Card Number'
                    onChange={handleCard}
                    textStyle={{ width: 90 }} ></TextField>
                <TextField value={cvv}
                    label='CVV'
                    onChange={handleCvv}
                    textStyle={{ width: 35 }} ></TextField>
            </View>
            <View>
                <ImageView
                    source={LINE}
                    imageStyle={_style.line}
                    viewStyle={{ justifyContent: 'flex-start' }}
                />
                <Total title='Payment method' price='$1.490.00' text='Total:'></Total>
            </View>

        </View>

    )
}

const _style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 30,
    },
    line: {
        height: 4,
        width: 400,
        marginStart: -30,
    },
    card:{
    marginTop:25
    },
    content: {
        borderRadius: 15,
        width: 335,
        height: 220,
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal:20
    },
    address: {
        flexDirection: 'row',
    },
    text: {      
        bottom:10
    },
})

export default Payment;