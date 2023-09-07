import React from 'react';
import { Button } from '../../components/Button';
import { FlatList, ImageSourcePropType, StatusBar, StyleSheet,TouchableOpacity, View, Dimensions } from 'react-native';
import { TextView } from '../../components/TextView';
import { ImageView } from '../../components/ImageView';
import { BEACH, CAMPING, FISHING, FOREST,MOUNTIAN, OCEAN, TICK } from '../../../assets/images';

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
        <View>
        <ImageView
            source={item.image}
            imageStyle={[_styles.icon]}
        />
        <TextView title={item.title} textStyle={{ color: "#000000", fontSize: 20, fontWeight: "500" }} styleContainer={{ alignItems: 'center',marginTop:5 }}></TextView>
       
        </View>
        <ImageView
            source={TICK}
            imageStyle={[_styles.tick, { display: check ? "flex" : "none" }]}
            viewStyle={{
             position: 'absolute',
                right: 7,
                top: 7,
             
            }}
        />
    </TouchableOpacity>)

};
const FavoritePlace = () => {

    const [data, setData] = React.useState<ItemData[]>(
        [{
            id: '1',
            image: BEACH,
            check: false,
            title: 'Beach'
        },
        {
            id: '2',
            image: MOUNTIAN,
            check: false,
            title: 'Mountain'
        },
        {
            id: '3',
            image: FOREST,
            check: false,
            title: 'Forest'
        },
        {
            id: '4',
            image: OCEAN,
            check: false,
            title: 'Ocean'
        },
        {
            id: '5',
            image: CAMPING,
            check: false,
            title: 'Camping'

        },
        {
            id: '6',
            image: FISHING,
            check: false,
            title: 'Fishing'
        }]
    );

    const handleSelectFavorite = (index: number) => {
        const item = data[index];
        item.check = !item.check;
        const newData = [...data];
        newData[index] = item;
        setData(newData);
    }

    const renderItem = ({ item, index }: { item: ItemData, index: number }) => {

        return (
            <Item
                item={item}
                onPress={() => handleSelectFavorite(index)}
            />
        );
    };

    return (
       
        <View style={_styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#FFFFFF"
                barStyle='dark-content'
            />
            <TextView title="Where is your favorite place to explore? " styleContainer={{marginHorizontal: 30}}></TextView>
           
            <View style={_styles.header}>       
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>
        
            
            <Button title='Submit' styleView={{ marginBottom: 40 }} stylePressable={{width:330}} ></Button>
        </View>

    );
}
const _styles = StyleSheet.create({
    icon: {
        width: 70,
        height: 70,
    },
    tick: {
        width: 24,
        height: 24,
        display: 'none',

    },
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center'
    },
    item: {
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 16,
        borderColor: "#BABABA",
        borderWidth: 2,
        width: Dimensions.get('window').width * 0.35,
        height: Dimensions.get('window').width * 0.36,
        borderRadius: 20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize: 32,
        textAlign: 'center'
    },
})
export default FavoritePlace;