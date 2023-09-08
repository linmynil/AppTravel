import React from 'react';
import { Dimensions, ImageSourcePropType, ScrollView, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { ImageView } from './ImageView';
import { TextView } from './TextView';

type ItemData = {
    id: string;
    image: ImageSourcePropType;
    check: boolean;
    title: string;
};

type ItemProps = {
    item: ItemData;
    onPress: () => void;
};
const Item = ({ item, onPress }: ItemProps) => {
    const check = item.check
    return (
    <TouchableOpacity onPress={onPress} style={[_styles.item, { borderColor: check ? '#17AF83' : '#f0f0f0' },{ borderWidth: check ? 2 : 1 }]}>
        <ImageView
            source={item.image}
            imageStyle={{width:35,height:35}}
        />
        <TextView title={item.title} textStyle={{ color: "#000000", fontSize: 17, fontWeight: "500" }} styleContainer={{marginTop:0 }}></TextView>            
    </TouchableOpacity>)

};

export type ScrollListProps = {
    data:ItemData[];
    onPress:(index:number)=>void;
    viewStyle?:StyleProp<ViewStyle>
}

const _List: React.FC<ScrollListProps> = (props) => {
    const {data,onPress } = props;
    return (
        <View style={StyleSheet.flatten([_styles.container,props.viewStyle])} >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {data.map((item: ItemData, index: number) => (
                    <Item item={item} key={item.id} onPress={() => {onPress(index)}} />
                ))}
            </ScrollView>
        </View>
    );
}

const _styles = StyleSheet.create({
    container:{},
    item: {
        marginHorizontal: 5,
        borderColor: "#f1f1f1",
        borderWidth: 1,
        width: Dimensions.get('window').width * 0.35,
        height:55,
        borderRadius: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },


})
export const CategoryList = React.memo(_List);