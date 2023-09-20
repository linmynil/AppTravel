import React, { useState } from 'react';
import { ImageSourcePropType, StyleSheet, View } from 'react-native';
import { SearchView } from '../../components/SearchView';
import { BEACH, CAMPING, FILTER, FISHING, FOREST, FOURSTAR, KUTARESORT, MANDALIKA, MOUNTIAN, OCEAN, PICONE } from '../../../assets/images';
import { Header } from '../../components/Header';
import { CategoryList } from '../../components/CategoryList';
import { PopularList } from '../../components/PopularList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackHome } from '../../Navigation/StackHome';
type PropsType = NativeStackScreenProps<StackHome, "Category">;
const Category:React.FC<PropsType>= (props) => {
    const { navigation } = props;
    const [search, setSearch] = useState<string>('');

    const handleChangeText = (value: string) => {
        setSearch(value);
    }

    const handleSearch = () => {

    }
    type ItemData = {
        id: string;
        image: ImageSourcePropType;
        check: boolean;
        title: string;
    };
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


    const handleSelectCategory = (index: number) => {
        const item = data[index];
        item.check = !item.check;
        const newData = [...data];
        newData[index] = item;
        setData(newData);
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
    const [popular, setPopular] = React.useState<ItemPopular[]>(
        [{
            id: '7',
            image: PICONE,
            title: 'Kuta Beach',
            price:'$ 245.00',
            star:FOURSTAR,
            point:'4.8',
            text:'Bali is an island in Indonesia known for its verdant volocanohhjghjkjkghjk',
            check: true,
        },
        {
            id: '8',
            image: KUTARESORT,
            title: 'Kuta Resort',
            price:'$ 245.00',
            star:FOURSTAR,
            point:'4.8',
            text:'A resort is a place used for vacation, relaxation or as a day fghj',
            check: true,
        },
        {
            id: '9',
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
        const item = popular[index];
        item.check = !item.check;
        const newPopular = [...popular];
        newPopular[index] = item;
        setPopular(newPopular);
    }
    return (
        <View style={_styles.container}>
            <Header title='Category' icon={FILTER} styleView={{ marginBottom: -10 }} onPressBack={()=>{navigation.goBack()}} onPressIcon={()=>{navigation.navigate("Filter")}}></Header>
            <SearchView placeholder='Search destination' value={search} onChangetext={handleChangeText} onPress={handleSearch}></SearchView>
            <CategoryList data={data} onPress={handleSelectCategory} viewStyle={{marginBottom:30}}></CategoryList>
            <PopularList data={popular} onPress={handleSelectPopular}></PopularList>
        </View>
    );
}
const _styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart:30,
        backgroundColor:"#FFFFFF",
    },

})
export default Category;