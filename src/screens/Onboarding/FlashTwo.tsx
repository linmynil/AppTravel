import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { ImageView } from '../../components/ImageView';
import { FLASHTWO, LOGOWHITE } from '../../../assets/images';
import { Dimensions } from 'react-native';
import { TextView } from '../../components/TextView';
import { Button } from '../../components/Button';

const FlashTwo = () => {
    return (
        <View style={_style.container} >
            <StatusBar translucent={true} backgroundColor='transparent'></StatusBar>
            <ImageView source={FLASHTWO} viewStyle={{ position: 'relative'}} imageStyle={{height:Dimensions.get('window').height*1.05}} ></ImageView>
            <View style={_style.content}>
                <ImageView source={LOGOWHITE} imageStyle={{ height: 20, width: 70 }} viewStyle={{ justifyContent: 'flex-start', marginLeft: 28 }}></ImageView>
                <TextView title="Lets explore the world" textStyle={{ color: "#FFFFFF", fontSize: 45, fontWeight: "500" }} styleContainer={{ width: 320, marginLeft: 28 }}></TextView>
                <TextView title="let's explore the world with us with just a few clicks" textStyle={{ color: "#f2f2f2", fontSize: 17, fontWeight: "400" }} styleContainer={{ width: 320, marginLeft: 28 }}></TextView>
                <View style={_style.row}>
                    <View style={_style.line1}>
                        <View style={[_style.line,{width:50,backgroundColor:"white"}]}>
                        </View>
                        <View style={[_style.line,{width:50}]}>
                        </View>
                    </View>
                    <View style={_style.line}>
                    </View>
                    <View style={_style.line}>
                    </View>
                </View>
                <Button title='Next' styleView={{marginBottom:40}} stylePressable={{width:330}} ></Button>
            </View>

        </View>


    );
}
const _style = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: Dimensions.get("window").width * 1,
        height: Dimensions.get("window").height * 1.05,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 27,
        marginBottom:80,
        marginTop:30
    },
    line1:{
        flexDirection: 'row',
        width: Dimensions.get("window").width * 0.26,
    },
    line: {
        backgroundColor: '#BABABA',
        height: 3,
        width: Dimensions.get("window").width * 0.26,
    }
})
export default FlashTwo;