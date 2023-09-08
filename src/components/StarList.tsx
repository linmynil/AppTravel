import React from 'react';
import { Dimensions, ImageSourcePropType, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ImageView } from './ImageView';
import { TextView } from './TextView';
import { TICK } from '../../assets/images';

type ItemStar = {
    id: string;
    image: ImageSourcePropType;
    check: boolean;
};
type ItemProps = {
    item: ItemStar;
    onPress: () => void;
};
const Item = ({ item, onPress }: ItemProps) => {
    const check = item.check
    return (<TouchableOpacity onPress={onPress} style={[_styles.item,{ borderWidth: check ? 2 : 1 }, { borderColor: check ? '#17AF83' : '#f0f0f0' }]}>
        <View style={_styles.row}>
        <ImageView
            source={item.image}
            imageStyle={[_styles.icon]}
        />
        </View>
        <ImageView
            source={TICK}
            imageStyle={[_styles.tick, { display: check ? "flex" : "none" }]}
            viewStyle={{
             position: 'absolute',
                right: 20,
                top: 18,
             
            }}
        />
    </TouchableOpacity>)

};

export type PaymentListProps={
    data:ItemStar[];
    onPress:(index:number)=>void;
}

const _StarList: React.FC<PaymentListProps> = (props) => {
    const{data,onPress} = props; 
    return (
        <View>
           <ScrollView
                showsHorizontalScrollIndicator={false}>
                {data.map((item: ItemStar, index: number) => (
                    <Item item={item} key={item.id} onPress={() => {onPress(index)}} />
                ))}
            </ScrollView>
        </View >

    )
}

const _styles=StyleSheet.create({ 
    icon: {
        width: 140,
        height: 20,
        marginRight:25
    },
    tick: {
        width: 24,
        height: 24,
        display: 'none',
    },
    item: {
        marginBottom:20,
        borderColor: "#f1f1f1",
        borderWidth: 1,
        width: Dimensions.get('window').width * 0.84,
        height:65,
        borderRadius: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingHorizontal:25
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
    }
})

export const StarList = React.memo(_StarList)