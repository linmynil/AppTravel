import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CALENDAR, TICKET } from '../../assets/images';
import { ImageView } from './ImageView';

type ItemData = {
    id: string,
    title: string,
    price: string,
    date: string,
}
export type ListTripProps = {
    data: ItemData[];
}

type ItemProps = {
    item: ItemData;
};
const Item = ({ item }: ItemProps) => {
    return (
        <View style={_styles.ticket}>
            <Image style={_styles.image} source={TICKET}></Image>
            <View style = {_styles.content}>
                <Text style={_styles.text}>{item.title}</Text>
                <Text style={_styles.price}>{item.price}</Text>
                <View style={_styles.row}>
                    <ImageView source={CALENDAR} imageStyle={{ width: 19, height: 19 }}></ImageView>
                    <Text style={_styles.date}>{item.date}</Text>
                </View>
            </View>
        </View>
    );
};

const _List: React.FC<ListTripProps> = (props) => {
    const { data } = props;
    return (
        <View>
            <ScrollView
                showsHorizontalScrollIndicator={false}>
                {data.map((item: ItemData) => (
                    <Item item={item} key={item.id} />
                ))}
            </ScrollView>
        </View>
    )
}

const _styles = StyleSheet.create({
    ticket: {
        borderWidth: 2,
        width: Dimensions.get('window').width * 0.84,
        borderColor: "#f7f7f7",
        height: 140,
        marginBottom:20,
        borderRadius: 20
    },
    content:{
        height: 140,
        flexDirection:'column',
        justifyContent:'space-around',
        paddingHorizontal:20,
        paddingVertical:20
    },
    image: {
        height: 143,
        width: 100,
        position: 'absolute',
        right: 25,
        top: -4,
        borderRadius: 20

    }, text: {
        fontSize: 17,
        color: 'black',
        opacity: 1,
        fontWeight: '600'
    },
    price: {
        color: '#F7623D',
        fontSize: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    date: {
        color: '#BABABA',
        fontSize: 13,
        marginRight: 7
    }
})

export const ListTip = React.memo(_List)