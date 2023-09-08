import React from 'react';
import { Dimensions, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CALENDAR, TICKET } from '../../assets/images';
import { ImageView } from './ImageView';

type ItemReview = {
    id: string,
    avatar: ImageSourcePropType;
    name: string,
    star: ImageSourcePropType;
    day: string,
    comment: string
}
export type ListTripProps = {
    data: ItemReview[];
}

type ItemProps = {
    item: ItemReview;
};
const Item = ({ item }: ItemProps) => {
    return (
        <View style={_styles.container}>
            <View style={_styles.row}>
                <Image source={item.avatar} style={_styles.avatar} ></Image>
                <View style={_styles.column}>
                    <View style={_styles.title}>
                        <Text style={_styles.name}>{item.name}</Text>
                        <Text style={_styles.day}>{item.day}</Text>
                    </View>
                    <ImageView source={item.star} imageStyle={{ width: 80, height: 14 }} viewStyle={{ justifyContent: 'flex-start' }}></ImageView>
                </View>
            </View>
            <Text style={_styles.comment}>{item.comment}</Text>
        </View>

    );
};

const _List: React.FC<ListTripProps> = (props) => {
    const { data } = props;
    return (
        <View>
            <ScrollView
                showsHorizontalScrollIndicator={false}>
                {data.map((item: ItemReview) => (
                    <Item item={item} key={item.id} />
                ))}
            </ScrollView>
        </View>
    )
}

const _styles = StyleSheet.create({
    container: {
        marginBottom: 25
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    column:{
        flexDirection:'column',
        justifyContent:'space-between',
        height: 40,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginRight: 20
    },

    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width * 0.71
    },
    day: {
        color: '#BABABA',
        fontSize: 13,
        marginRight: 7

    },
    name: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    },
    comment: {
        fontSize: 13,
        marginLeft: 63,
        marginTop:10,
        lineHeight:20
    }
})

export const ReviewList = React.memo(_List)