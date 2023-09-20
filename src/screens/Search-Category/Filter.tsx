import React, { useCallback, useState } from 'react';
import { Total } from '../../components/Total';
import { ImageSourcePropType, ScrollView, StyleSheet, View } from 'react-native';
import { Header } from '../../components/Header';
import { ARROW, DONE, FIVESTAR, FLY, FOURSTAR, HOTEL, ONESTAR, THREESTAR, TWOSTAR } from '../../../assets/images';
import { TextTitle } from '../../components/TextTitle';
import { ScrollList } from '../../components/ScrollList';
import { StarList } from '../../components/StarList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackHome } from '../../Navigation/StackHome';
type PropsType = NativeStackScreenProps<StackHome, "Filter">;
const Filter:React.FC<PropsType>= (props) => {
    const { navigation } = props;

    type ItemData = {
        id: string;
        image: ImageSourcePropType;
        check: boolean;
        title: string;
    };
    const [data, setData] = React.useState<ItemData[]>(
        [
            {
                id: '1',
                image: DONE,
                check: false,
                title: 'All'
            },
            {
                id: '2',
                image: FLY,
                check: false,
                title: 'Flight'
            },
            {
                id: '3',
                image: HOTEL,
                check: false,
                title: 'Hotel'
            },
        ]
    );


    const handleSelectIncluded = (index: number) => {
        const item = data[index];
        item.check = !item.check;
        const newData = [...data];
        newData[index] = item;
        setData(newData);
    }

    type ItemStar = {
        id: string;
        image: ImageSourcePropType;
        check: boolean;
    };
    const [star, setStar] = React.useState<ItemStar[]>(
        [{
            id: '1',
            image: FIVESTAR,
            check: false,
        },
        {
            id: '2',
            image: FOURSTAR,
            check: false,
        },
        {
            id: '3',
            image: THREESTAR,
            check: false,

        },
        {
            id: '4',
            image: TWOSTAR,
            check: false,

        },
        {
            id: '5',
            image: ONESTAR,
            check: false,

        },
        ]
    );


    const handleSelectStar = (index: number) => {
        const item = star[index];
        item.check = !item.check;
        const newStar = [...star];
        newStar[index] = item;
        setStar(newStar)
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={_style.container}>
            <View>
                <Header title='Filter' icon={ARROW} styleIcon={{ opacity: 0 }} styleView={{ marginBottom: 0 }} onPressBack={()=>{navigation.goBack()}}></Header>
                <TextTitle left="Range Price" styleright={{ opacity: 0 }}></TextTitle>

              



                <TextTitle left="Star Review" styleright={{ opacity: 0 }}></TextTitle>
                <StarList data={star} onPress={handleSelectStar} ></StarList>
                <TextTitle left="Included" styleright={{ opacity: 0 }} styleContainer={{ marginTop: 10 }}></TextTitle>
                <ScrollList data={data} onPress={handleSelectIncluded}></ScrollList>
            </View>
            <View >
                <Total left='Clear All' title='Apply' viewContainer={{ marginTop: 40 }} ></Total>
            </View>
        </ScrollView>

    )
}

const _style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingStart: 30,
        backgroundColor:"#FFFFFF"
    },
    line: {
        height: 4,
        width: 200,
        marginStart: -30,
    },
})

export default Filter;