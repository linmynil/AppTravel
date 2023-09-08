import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { ImageView } from '../../components/ImageView';
import { ARROWD, ARROWW, FLASHFOUR, FLASHTHREE, FLASHTWO, HEART, LOCATION, LOGOWHITE, PICONE, STAR, TICKDETAIL } from '../../../assets/images';
import { Dimensions } from 'react-native';
import { TextView } from '../../components/TextView';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Total } from '../../components/Total';

const DetailFavorite = () => {
    return (
        <View style={_style.container} >
            <StatusBar translucent={true} backgroundColor='transparent'></StatusBar>
            <ImageView source={PICONE} viewStyle={{ position: 'relative' }} imageStyle={{ height: Dimensions.get('window').height * 1.05 }} ></ImageView>
            <View style={_style.content}>
                <Header arrow={ARROWW} icon={HEART} styleView={{marginBottom:100}}></Header>
                <View style={_style.column}>
                    <View style={_style.row}>
                        <TextView title="FAVORITE PLACE" textStyle={{ color: "#FFFFFF", fontSize: 12, fontWeight: "bold" }} styleContainer={{ marginTop: 0 }}></TextView>
                        <ImageView source={TICKDETAIL} imageStyle={{ height: 24, width: 24 }}></ImageView>
                    </View>
                    <TextView title="Kuta Beach" textStyle={{ color: "#FFFFFF", fontSize: 35, fontWeight: "500" }} styleContainer={{marginTop:-10, marginBottom:-10}} ></TextView>
                    <View style={_style.row}>
                        <ImageView source={LOCATION} imageStyle={{ height: 16, width: 16 }}></ImageView>
                        <Text style={_style.address}>Bali, Indonesia</Text>
                    </View>
                    <View style={[_style.rowtwo,{marginTop:-10}]}>
                        <View style={_style.row}>
                            <Text style={[_style.address, { fontWeight: 'bold' }]}>+100</Text>
                            <Text style={_style.address}>People have explore</Text>
                        </View>
                        <View style={_style.row}>
                            <ImageView source={FLASHTWO} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginLeft: -10 }}></ImageView>
                            <ImageView source={FLASHTHREE} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginLeft: -10 }}></ImageView>
                            <ImageView source={FLASHFOUR} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginLeft: -10 }}></ImageView>
                            <ImageView source={PICONE} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginLeft: -10 }}></ImageView>
                            <ImageView source={FLASHTWO} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginLeft: -10 }}></ImageView>
                        </View>
                    </View>
                    <View style={_style.row}>
                        <View style={_style.line1}>
                            <View style={[_style.line, { width: 50, backgroundColor: "white",marginRight:-1 }]}>
                            </View>
                            <View style={[_style.line, { width: 50 }]}>
                            </View>
                        </View>
                        <View style={_style.line}>
                        </View>
                        <View style={_style.line}>
                        </View>
                    </View>
                    <Text style={_style.address}>Bali is an island in Indonesia known for its verdant volcaoes, unique rice terraces, beaches, and beautiful coral reefs. Before becoming a tourist attraction, Kuta was a trading port where local products were traded to buyers from outside Bali.</Text>
                    <View style={_style.rowtwo}>
                        <View style={_style.row}>
                            <ImageView source={STAR} imageStyle={{ height: 24, width: 24 }}></ImageView>
                            <Text style={[_style.address, { fontWeight: 'bold', fontSize: 18 }]}>4.8</Text>
                        </View>
                        <ImageView source={ARROWD} imageStyle={{ height: 30, width: 30 }}></ImageView>
                    </View>
                </View>
                <Total title='Booking' price=' /Person' text='$245.00' textStyle={{color:'#FFFFFF',fontSize:15,fontWeight:'bold'}} priceStyle={{ color:'#FFFFFF',fontSize:13, marginRight:7, fontWeight:'normal'}} viewContainer={{backgroundColor:''}}></Total>
            </View>

        </View>


    );
}
const _style = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: Dimensions.get("window").width * 1,
        height: Dimensions.get("window").height * 1.03,
        paddingHorizontal: 30,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowtwo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    column:{
        flexDirection: 'column',
        height: Dimensions.get("window").height * 0.6,
        justifyContent: 'space-around'
    },
    line1: {
        flexDirection: 'row',
        width: Dimensions.get("window").width * 0.26,
        marginRight:7,
    },
    line: {
        backgroundColor: '#c7c7c7',
        height: 2,
        width: Dimensions.get("window").width * 0.26,
        marginRight:7,
    },
    address: {
        color: 'white',
        fontSize: 14,
        lineHeight:25,
        fontWeight:'500'
    }
})
export default DetailFavorite;