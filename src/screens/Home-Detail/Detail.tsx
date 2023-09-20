import React from 'react';
import { Header } from '../../components/Header';
import {  CAR, FIVESTAR, FLASHFOUR, FLASHTHREE, FLASHTWO, FLY, FOREST, FOURSTAR, HEART, HOTEL, LOCATION, MAP, MOUNTIAN, PICONE, TICKDETAIL } from '../../../assets/images';
import { Dimensions, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageView } from '../../components/ImageView';
import { TextView } from '../../components/TextView';
import { TextTitle } from '../../components/TextTitle';
import { ScrollList } from '../../components/ScrollList';
import { Button } from '../../components/Button';
import { Total } from '../../components/Total';
import { ReviewList } from '../../components/ReviewList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackHome } from '../../Navigation/StackHome';
type ItemData = {
    id: string;
    image: ImageSourcePropType;
    check: boolean;
    title: string;
};
type PropsType = NativeStackScreenProps<StackHome, "Detail">;
const Detail:React.FC<PropsType>= (props) => {
    const { navigation } = props;
    const [data, setData] = React.useState<ItemData[]>(
        [{
            id: '1',
            image: FLY,
            check: false,
            title: 'Flight'
        },
        {
            id: '2',
            image: HOTEL,
            check: false,
            title: 'Hotel'
        },
        {
            id: '3',
            image: CAR,
            check: false,
            title: 'Transion'
        }]
    );


    const handleSelectFavorite = (index: number) => {
        const item = data[index];
        item.check = !item.check;
        const newData = [...data];
        newData[index] = item;
        setData(newData);
    }


    type ItemReview = {
        id: string,
        avatar:ImageSourcePropType;
        name: string,
        star: ImageSourcePropType;
        day: string,
        comment:string
    }
    const [review, setReview] = React.useState<ItemReview[]>(
        [{
            id: '1',
            avatar:PICONE,
            name:'Yelena Belova',
            star:FIVESTAR,
            day:'Today',
            comment:"Pretty nice. The entrance is quite far from the parking lot but wouldn't be much of a problem if it wasnt raining. Love the interior :)"
        },
        {
            id: '2',
            avatar:PICONE,
            name:'Mark Travor',
            star:FIVESTAR,
            day:'Today',
            comment:"A really great place and amazing work place. I really love staying there! Will definitely come back!"
        },
        {
            id: '3',
            avatar:PICONE,
            name:'James Mulner',
            star:FIVESTAR,
            day:'Today',
            comment:"Ketut offering supports to almost every cases, always reachable and was really helpful, definitely value for money stay!"
        },

    ]
    );
    return (
        <ScrollView style={_styles.full}>
            <View style={_styles.container}>
                <Header title='Kuta Beach' icon={HEART} onPressBack={()=>{navigation.goBack()}}></Header>
                <View>
                    <ImageView source={PICONE} imageStyle={{ width: 335, height: 250, resizeMode: 'cover', borderRadius: 20 }}></ImageView>
                    <View style={_styles.content}>
                        <ImageView source={TICKDETAIL} imageStyle={{ height: 24, width: 24 }} viewStyle={{ justifyContent: 'flex-end', top: 28, right: 28 }}></ImageView>
                        <View style={_styles.text}>
                            <TextView title="Kuta Beach" textStyle={{ color: "#FFFFFF", fontSize: 24, fontWeight: "400" }} styleContainer={{ marginLeft: 28 }}></TextView>
                            <View style={_styles.address}>
                                <ImageView source={LOCATION} imageStyle={{ height: 13, width: 13 }} viewStyle={{ marginRight: 5 }}></ImageView>
                                <TextView title="Bali, Indonesia" textStyle={{ color: "#f1f1f1", fontSize: 13, fontWeight: "normal" }} styleContainer={{ marginTop: 0 }}></TextView>
                            </View>
                            <View style={[_styles.address, { justifyContent: 'space-between', marginTop: 0 }]}>
                                <View style={[_styles.address, { marginLeft: 0, marginTop: 10 }]}>
                                    <TextView title="+100 " textStyle={{ color: "#f1f1f1", fontSize: 13, fontWeight: "bold" }} styleContainer={{ marginTop: 0 }}></TextView>
                                    <TextView title="People have explored" textStyle={{ color: "#f1f1f1", fontSize: 13, fontWeight: "normal" }} styleContainer={{ marginTop: 0 }}></TextView>
                                </View>
                                <View style={[_styles.address, { marginLeft: 0, marginTop: 10 }]}>
                                    <ImageView source={FLASHTWO} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginRight: -13 }}></ImageView>
                                    <ImageView source={FLASHTHREE} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginRight: -13 }}></ImageView>
                                    <ImageView source={FLASHFOUR} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginRight: -13 }}></ImageView>
                                    <ImageView source={PICONE} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginRight: -13 }}></ImageView>
                                    <ImageView source={FLASHTWO} imageStyle={{ height: 30, width: 30, borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, resizeMode: 'cover' }} viewStyle={{ marginRight: -13 }}></ImageView>
                                </View>
                            </View>
                            <View style={[_styles.address, { marginTop: 0 }]}>
                                <ImageView source={FOURSTAR} imageStyle={{ height: 16, width: 95, borderColor: '#FFFFFF' }} viewStyle={{}}></ImageView>
                                <TextView title="4.8" textStyle={{ color: "#f1f1f1", fontSize: 13, fontWeight: "bold" }} styleContainer={{ marginTop: 0, marginLeft: 5 }}></TextView>
                            </View>
                        </View>

                    </View>
                </View>
                <TextTitle left="What's included?" styleright={{ opacity: 0 }}></TextTitle>

                <ScrollList data={data} onPress={handleSelectFavorite}></ScrollList>
                <TextTitle left="About Trip" styleright={{ opacity: 0 }}></TextTitle>
                <Text style={_styles.doc}>Bali is an island in Indonesia known for its verdant volcaoes, unique rice terraces, beaches, and beautiful coral reefs. Before becoming a tourist attraction, Kuta was a trading port where local products were traded to buyers from outside Bali.{'\n'} {'\n'}See beautiful Bali and help us keep it that way by joining this EcoTour of a Ball village. All proceeds from the EcoTour are donated to the Tangkas Village Recycling Center. Expert Friendly Service</Text>
                <TextTitle left="Gallery Photo" styleright={{ opacity: 0 }}></TextTitle>
                <View style={_styles.photo}>
                    <ImageView source={FLASHTWO} imageStyle={{ height: 95, width: 95, borderRadius: 15, resizeMode: 'cover' }} ></ImageView>
                    <ImageView source={FLASHTHREE} imageStyle={{ height: 95, width: 95, borderRadius: 15, resizeMode: 'cover' }} ></ImageView>
                    <View>
                        <ImageView source={FLASHFOUR} imageStyle={{ height: 95, width: 95, borderRadius: 15, resizeMode: 'cover' }} ></ImageView>
                        <TextView title="+20 " textStyle={{ color: "#ffffff", fontSize: 27,fontWeight:'bold' }} styleContainer={{position:'absolute',top:15,left:15  }}></TextView>
                    </View>
                </View>
                <TextTitle left="Location" styleright={{ opacity: 0 }}></TextTitle>
                <Image source={MAP} style={_styles.map}></Image>
                <TextTitle left="Review" star='(99)' right='4,8'></TextTitle>
                <ReviewList data={review}></ReviewList>
                <Total title='Booking' price=' /Person' text='$750.00' textStyle={{color:'#F7623D',fontSize:15,fontWeight:'bold'}} priceStyle={{ color:'#BABABA',fontSize:13, marginRight:7, fontWeight:'normal'}}></Total>
            </View>
        </ScrollView>

    )
}
const _styles = StyleSheet.create({
    full: {
        backgroundColor: '#fafafa'
    },
    container: {
        flex: 1,
        marginHorizontal: 30,
    },
    content: {
        borderRadius: 20,
        width: 335,
        height: 250,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    address: {
        flexDirection: 'row',
        marginLeft: 28,
        marginRight: 28,
        marginTop: 20
    },
    text: {
        bottom: 20
    },
    doc: {
        textAlign: 'left',
        lineHeight: 25,
        color: 'black',
        fontSize: 13,
    },
    photo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    map:{
        width:Dimensions.get('window').width *0.84,
        height:160,
        borderRadius:20
    },


})
export default Detail;