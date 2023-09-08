
import React from 'react';
import { Dimensions, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageView } from './ImageView';
import { TextView } from './TextView';
import { HEART, HEARTW, LOCATION } from '../../assets/images';

type ItemFavorite = {
    id: string;
    image: ImageSourcePropType;
    title: string;
    address: string;
    star: ImageSourcePropType;
    point: string;
    check: boolean;
};
type ItemProps = {
    item: ItemFavorite;
    onPress: () => void;
};
const Item = ({ item, onPress }: ItemProps) => {
    const check = item.check
    return (
        <TouchableOpacity onPress={onPress} style={_styles.item}>
            <ImageView
                source={item.image}
                imageStyle={[_styles.image]}
            />
            <View style={_styles.column} >
                <Text style={_styles.title}>{item.title}</Text>
                <View style={_styles.row}>
                    <ImageView source={LOCATION} imageStyle={{ height: 16, width: 16 }}></ImageView>
                    <Text style={_styles.address}>{item.address}</Text>
                </View>
                <View style={_styles.row}>
                    <ImageView source={item.star} imageStyle={{ height: 13, width: 85 }}></ImageView>
                    <Text style={[_styles.address,{fontWeight:'bold'}]}>{item.point}</Text>
                </View>
            </View>
            <View style={_styles.heart}>
                <ImageView
                    source={check
                        ? HEART
                        : HEARTW}
                    imageStyle={{ width: 16, height: 16 }}
                />
            </View>

        </TouchableOpacity>)

};

export type FavoriteListProps = {
    data: ItemFavorite[];
    onPress: (index: number) => void;
}

const _FavoriteList: React.FC<FavoriteListProps> = (props) => {
    const { data, onPress } = props;
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {data.map((item: ItemFavorite, index: number) => (
                    <Item item={item} key={item.id} onPress={() => { onPress(index) }} />
                ))}
            </ScrollView>
        </View >

    )
}

const _styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        borderRadius: 20,
        width: Dimensions.get('window').width * 0.45,
        height: 220,
    },
    heart: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 20,
        top: 20,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        width: Dimensions.get('window').width * 0.45,
        height: 220,
        borderRadius: 20,
        marginRight: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:3
    },
    column: {
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        width: Dimensions.get('window').width * 0.45,
        borderRadius: 20,
        height: 220,
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingHorizontal: 13,
        paddingVertical:15
    },
    title: {
        color: 'white',
        fontSize: 20,
        paddingVertical:5,
        fontWeight:'500'
    },
    address: {
        color: 'white',
        fontSize: 13,
        marginLeft: 7,
    }
})

export const FavoriteList = React.memo(_FavoriteList)