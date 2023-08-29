import React from 'react';
import { Header } from '../../components/Header';
import { FIVESTAR, FLASHFOUR, FLASHTHREE, FLASHTWO, FOURSTAR, HEART, LOCATION, PICONE, TICKDETAIL } from '../../../assets/images';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ImageView } from '../../components/ImageView';
import { TextView } from '../../components/TextView';
import { TextTitle } from '../../components/TextTitle';

const Detail = () => {
    return (
        <ScrollView>
           <View style={_style.container}>
            <Header title='Kuta Beach' icon={HEART}></Header>
            <View style={_style.card}>
                <ImageView source={PICONE} imageStyle={{ width: 335, height: 250, resizeMode: 'cover', borderRadius: 20 }}></ImageView>
                <View style={_style.content}>
                    <ImageView source={TICKDETAIL} imageStyle={{ height: 24, width: 24 }} viewStyle={{ justifyContent: 'flex-end', top: 28, right: 28 }}></ImageView>
                    <View style={_style.text}>
                        <TextView title="Kuta Beach" textStyle={{ color: "#FFFFFF", fontSize: 24, fontWeight: "400" }} styleContainer={{ marginLeft: 28 }}></TextView>
                        <View style={_style.address}>
                            <ImageView source={LOCATION} imageStyle={{ height: 13, width: 13 }} viewStyle={{ marginRight: 5 }}></ImageView>
                            <TextView title="Bali, Indonesia" textStyle={{ color: "#f1f1f1", fontSize: 13, fontWeight: "normal" }} styleContainer={{ marginTop: 0 }}></TextView>
                        </View>
                        <View style={[_style.address, { justifyContent: 'space-between',marginTop:0 }]}>
                            <View style={[_style.address, { marginLeft: 0,marginTop:10 }]}>
                                <TextView title="+100 " textStyle={{ color: "#f1f1f1", fontSize: 13, fontWeight: "bold" }} styleContainer={{ marginTop: 0 }}></TextView>
                                <TextView title="People have explored" textStyle={{ color: "#f1f1f1", fontSize: 13, fontWeight: "normal" }} styleContainer={{ marginTop: 0 }}></TextView>
                            </View>
                            <View style={[_style.address, { marginLeft: 0,marginTop:10 }]}>
                                <ImageView source={FLASHTWO} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginRight: -13 }}></ImageView>
                                <ImageView source={FLASHTHREE} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginRight: -13 }}></ImageView>
                                <ImageView source={FLASHFOUR} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginRight: -13 }}></ImageView>
                                <ImageView source={PICONE} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginRight: -13 }}></ImageView>
                                <ImageView source={FLASHTWO} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginRight: -13 }}></ImageView>
                            </View>
                        </View>
                        <View style={[_style.address,{marginTop:0}]}>
                            <ImageView source={FOURSTAR} imageStyle={{ height: 16, width: 95, borderColor: '#FFFFFF' }} viewStyle={{}}></ImageView>
                            <TextView title="4.8" textStyle={{ color: "#f1f1f1", fontSize: 13, fontWeight: "bold" }} styleContainer={{ marginTop: 0, marginLeft: 5 }}></TextView>
                        </View>
                    </View>

                </View>
            </View>
            <TextTitle left="What's included?" styleright={{opacity:0}}></TextTitle>
            
        </View>
 
        </ScrollView>
        
    )
}
const _style = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30
    },
    card: {

    },
    content: {
        borderRadius: 20,
        width: 335,
        height: 250,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        position: 'absolute',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    address: {
        flexDirection: 'row',
        marginLeft: 28,
        marginRight: 28,
        marginTop:20
    }, 
    text:{
        bottom:20
    }
})
export default Detail;