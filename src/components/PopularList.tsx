
import React from 'react';
import { Dimensions, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageView } from './ImageView';
import { TextView } from './TextView';
import { HEART, HEARTW } from '../../assets/images';

type ItemPopular = {
    id: string;
    image: ImageSourcePropType;
    title: string;
    price: string;
    star: ImageSourcePropType;
    point: string;
    text: string;
    check: boolean;
};
type ItemProps = {
    item: ItemPopular;
    onPress: () => void;
};
const Item = ({ item, onPress }: ItemProps) => {
    const check = item.check
    return (
        <TouchableOpacity onPress={onPress} style={_styles.item}>
            <View style={_styles.row} >
                <ImageView
                    source={item.image}
                    imageStyle={[_styles.image]}
                />
                <View  style={_styles.column}>
                    <TextView title={item.title} textStyle={{ color: "#000000", fontSize: 17, fontWeight: "500" }} styleContainer={{ marginTop: 0 }}></TextView>
                    <Text style={_styles.price}>{item.price}</Text>
                    <View style={_styles.row}>
                        <ImageView source={item.star} imageStyle={{ height: 16, width: 95, borderColor: '#FFFFFF' }} viewStyle={{}}></ImageView>
                        <TextView title="4.8" textStyle={{ color: "black", fontSize: 13, fontWeight: "bold" }} styleContainer={{ marginTop: 0, marginLeft: 5 }}></TextView>
                    </View>
                    <Text numberOfLines={2} style={_styles.text}>{item.text}</Text>
                </View>
            </View>
            <ImageView
                source={check
                    ? HEART
                    : HEARTW}
                imageStyle={_styles.heart}
                viewStyle={{
                    position: 'absolute',
                    right: 20,
                    top: 20,

                }}
            />
        </TouchableOpacity>)

};

export type PopularListProps = {
    data: ItemPopular[];
    onPress: (index: number) => void;
}

const _PopularList: React.FC<PopularListProps> = (props) => {
    const { data, onPress } = props;
    return (
        <View>
            <ScrollView
                showsHorizontalScrollIndicator={false}>
                {data.map((item: ItemPopular, index: number) => (
                    <Item item={item} key={item.id} onPress={() => { onPress(index) }} />
                ))}
            </ScrollView>
        </View >

    )
}

const _styles = StyleSheet.create({
    image: {
        width: 80,
        height: 100,
        marginRight: 20,
        borderRadius: 10
    },
    heart: {
        width: 24,
        height: 24,
    },
    item: {
        marginBottom: 20,
        borderColor: "#f1f1f1",
        borderWidth: 1,
        width: Dimensions.get('window').width * 0.84,
        height: 140,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 25
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent:'space-between',
        height: 100,
        width: Dimensions.get('window').width - 200,
    },
    price: {
        color: '#F7623D',
        fontSize: 15,
    },
    text: {
        color: '#BABABA',
        fontSize: 13,
        marginRight: 7,

    }
})

export const PopularList = React.memo(_PopularList)