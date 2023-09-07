import React from 'react';
import { Dimensions, ImageSourcePropType, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ImageView } from './ImageView';
import { TextView } from './TextView';
import { TICK } from '../../assets/images';

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
    return (<TouchableOpacity onPress={onPress} style={[_styles.item,{ borderWidth: check ? 2 : 1 }, { borderColor: check ? '#17AF83' : '#f0f0f0' }]}>
        <View style={_styles.row}>
        <ImageView
            source={item.image}
            imageStyle={[_styles.icon]}
        />
        <TextView title={item.title} textStyle={{ color: "#000000", fontSize: 17, fontWeight: "500" }} styleContainer={{ alignItems: 'center',marginTop:-3 }}></TextView>      
        </View>
        <ImageView
            source={TICK}
            imageStyle={[_styles.tick, { display: check ? "flex" : "none" }]}
            viewStyle={{
             position: 'absolute',
                right: 25,
                top: 30,
             
            }}
        />
    </TouchableOpacity>)

};

export type PaymentListProps={
    data:ItemData[];
    onPress:(index:number)=>void;
}

const _PaymentList: React.FC<PaymentListProps> = (props) => {
    const{data,onPress} = props; 
    return (
        <View>
           <ScrollView
                showsHorizontalScrollIndicator={false}>
                {data.map((item: ItemData, index: number) => (
                    <Item item={item} key={item.id} onPress={() => {onPress(index)}} />
                ))}
            </ScrollView>
        </View >

    )
}

const _styles=StyleSheet.create({ 
    icon: {
        width: 30,
        height: 30,
        marginRight:25
    },
    tick: {
        width: 24,
        height: 24,
        display: 'none',

    },
    item: {
        marginTop:35,
        borderColor: "#f1f1f1",
        borderWidth: 1,
        width: Dimensions.get('window').width * 0.84,
        height:90,
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

export const PaymentList = React.memo(_PaymentList)