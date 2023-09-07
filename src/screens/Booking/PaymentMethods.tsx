import React, { useState } from 'react';
import { Total } from '../../components/Total';
import { Dimensions, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { APPLE, ARROW, LINE, METHODONE, PAYPAL, PLUS } from '../../../assets/images';
import { TextField } from '../../components/TextField';
import { ImageView } from '../../components/ImageView';
import { PaymentList } from '../../components/PaymentList';
import { TextView } from '../../components/TextView';
type ItemData = {
    id: string;
    image: ImageSourcePropType;
    check: boolean;
    title: string;
};


const PaymentMethods = () => {

    const [data, setData] = React.useState<ItemData[]>(
        [{
            id: '1',
            image: METHODONE,
            check: false,
            title: 'Flight'
        },
        {
            id: '2',
            image: PAYPAL,
            check: false,
            title: 'Hotel'
        },
        {
            id: '3',
            image: APPLE,
            check: false,
            title: 'Transion'
        }]
    );


    const handleSelectMethods = (index: number) => {
        const item = data[index];
        item.check = !item.check;
        const newData = [...data];
        newData[index] = item;
        setData(newData);
    }

    return (
        <View style={_style.container}>
            <View>
                <Header title='Payment Methods' icon={ARROW} styleIcon={{ opacity: 0 }} styleView={{ marginBottom: 0 }}></Header>
                <PaymentList data={data} onPress={handleSelectMethods} ></PaymentList>
                <Pressable style={_style.row}>
                    <ImageView source={PLUS} imageStyle={{ width: 23, height: 23 }}></ImageView>
                    <Text style={_style.text}>Add More</Text>
                </Pressable>

            </View>
            <View >
                <ImageView
                    source={LINE}
                    imageStyle={_style.line}
                    viewStyle={{ justifyContent: 'flex-start' }}
                />
                <Total title='Process payment' price='$1.490.00' text='Total:'></Total>
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
        width: 300,
        marginStart: -30,
    },
    text: {
        color: 'black',
        marginLeft: 10
    },
    row: {
        borderWidth: 1,
        borderColor: '#f1f1f1',
        width: Dimensions.get('window').width * 0.84,
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 35
    }
})

export default PaymentMethods;