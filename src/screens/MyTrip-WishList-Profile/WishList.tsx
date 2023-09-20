import React, { useState } from 'react';
import { ImageSourcePropType, StyleSheet, View } from 'react-native';
import { ListTip } from '../../components/ListTrip';
import { TextView } from '../../components/TextView';
import { SearchView } from '../../components/SearchView';
import { PopularList } from '../../components/PopularList';
import { FIVESTAR, FOURSTAR, KUTARESORT, MANDALIKA, PICONE } from '../../../assets/images';


const WishList = () => {
    const [search, setSearch] = useState<string>('');

    const handleChangeText = (value: string) => {
        setSearch(value);
    }

    const handleSearch = () => {

    }
    type ItemPopular = {
        id: string;
        image: ImageSourcePropType;
        title: string;
        price: string;
        star: ImageSourcePropType;
        point: string;
        text:string;
        check: boolean;
    };
    const [data, setData] = React.useState<ItemPopular[]>(
        [{
            id: '1',
            image: PICONE,
            title: 'Kuta Beach',
            price:'$ 245.00',
            star:FOURSTAR,
            point:'4.8',
            text:'Bali is an island in Indonesia known for its verdant volocanohhjghjkjkghjk',
            check: true,
        },
        {
            id: '2',
            image: KUTARESORT,
            title: 'Kuta Resort',
            price:'$ 245.00',
            star:FOURSTAR,
            point:'4.8',
            text:'A resort is a place used for vacation, relaxation or as a day fghj',
            check: true,
        },
        {
            id: '3',
            image: MANDALIKA,
            title: 'Flight',
            price:'$ 245.00',
            star:FOURSTAR,
            point:'4.8',
            text:'A resort is a place used for vacation, relaxation or as a day fghj',
            check: true,
        }]
    );
    const handleSelectPopular = (index: number) => {
        const item = data[index];
        item.check = !item.check;
        const newData = [...data];
        newData[index] = item;
        setData(newData);
    }
    return (
        <View style={_styles.container}>
            <TextView title="Your Wishlist " textStyle={{ fontSize: 30 }} styleContainer={{ marginTop: 50 }} ></TextView>
            <SearchView placeholder='Search destination' value={search} onChangetext={handleChangeText} onPress={handleSearch}></SearchView>
            <PopularList data={data} onPress={handleSelectPopular}></PopularList>
        </View>
    );
}
const _styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor:"#FFFFFF"
    },

})
export default WishList;