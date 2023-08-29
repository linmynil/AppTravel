import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { ImageView } from '../../components/ImageView';
import { FLASHTHREE, LOGOWHITE } from '../../../assets/images';
import { Dimensions } from 'react-native';
import { TextView } from '../../components/TextView';
import { Button } from '../../components/Button';

const FlashThree = () => {
    return (
        <View >
            <StatusBar translucent={true} backgroundColor='transparent'></StatusBar>
            <ImageView source={FLASHTHREE} viewStyle={{ position: 'relative' }}></ImageView>
            <View style={_style.content}>
                <ImageView source={LOGOWHITE} imageStyle={{ height: 20, width: 70 }} viewStyle={{ justifyContent: 'flex-start', marginLeft: 28 }}></ImageView>
                <TextView title="Visit tourist attractions" textStyle={{ color: "#FFFFFF", fontSize: 45, fontWeight: "500" }} styleContainer={{ width: 320, marginLeft: 28 }}></TextView>
                <TextView title="Find thousands of tourist destinations ready for you to visit" textStyle={{ color: "#f2f2f2", fontSize: 17, fontWeight: "400" }} styleContainer={{ width: 320, marginLeft: 28 }}></TextView>
                <View style={_style.row}>
                    <View style={[_style.line,{backgroundColor:'white'}]}>
                    </View>
                    <View style={_style.line1}>
                        <View style={[_style.line, { width: 50, backgroundColor: "white" }]}>
                        </View>
                        <View style={[_style.line, { width: 50 }]}>
                        </View>
                    </View>
                    <View style={_style.line}>
                    </View>
                </View>
                <Button title='Next' styleView={{ marginBottom: 40 }} ></Button>
            </View>

        </View>


    );
}
const _style = StyleSheet.create({
    content: {
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: Dimensions.get("window").width * 1,
        height: Dimensions.get("window").height * 1,

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 27,
        marginBottom: 80,
        marginTop: 30
    },
    line1: {
        flexDirection: 'row',
        width: Dimensions.get("window").width * 0.26,
    },
    line: {
        backgroundColor: '#BABABA',
        height: 3,
        width: Dimensions.get("window").width * 0.26,
    }
})
export default FlashThree;