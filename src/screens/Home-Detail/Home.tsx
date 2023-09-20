import React, { useState } from 'react';
import { Image, ImageSourcePropType, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BEACH, BROMO, CAMPING, FISHING, FOREST, FOURSTAR, KUTARESORT, MANDALIKA, MOUNTIAN, OCEAN, PICONE, RING } from '../../../assets/images';
import { TextView } from '../../components/TextView';
import { SearchView } from '../../components/SearchView';
import { TextTitle } from '../../components/TextTitle';
import { CategoryList } from '../../components/CategoryList';
import { PopularList } from '../../components/PopularList';
import { FavoriteList } from '../../components/FavoriteList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackHome } from '../../Navigation/StackHome';

type PropsType = NativeStackScreenProps<StackHome, "Home">;
type ItemData = {
    id: string;
    image: ImageSourcePropType;
    check: boolean;
    title: string;
};
const Home:React.FC<PropsType>= (props) => {
    const { navigation } = props;
    const handleNotification = () => {
       navigation.navigate("Notification")
    }
    const [search, setSearch] = useState<string>('');

    const handleChangeText = (value: string) => {
        setSearch(value);
    }

    const handleSearch = () => {

    }

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


    type ItemFavorite = {
        id: string;
        image: ImageSourcePropType;
        title: string;
        address: string;
        star: ImageSourcePropType;
        point: string;
        check: boolean;
    };

    const [favorite, setFavorite] = React.useState<ItemFavorite[]>(
        [{
            id: '1',
            image: PICONE,
            title: 'Kuta Beach',
            address:'Bali, Indonesia',
            star:FOURSTAR,
            point:'4.8',
            check: true,
        },
        {
            id: '2',
            image: BROMO,
            title: 'Bromo Mountian',
            address:'Jawa Ti, Indonesia',
            star:FOURSTAR,
            point:'4.0',
            check: true,
        },
       ]
    );
    const handleDetail = (index: number) => {
        navigation.navigate("DetailFavorite")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={_styles.container}>
            <View style={[_styles.row,{marginEnd:30, marginTop:30,}]}>
                <View style={_styles.row}>
                    <Image source={PICONE} style={_styles.avatar}></Image>
                    <Text style={_styles.name} >Hello, Pristia !</Text>
                </View>
                <Pressable onPress={handleNotification}>
                    <Image source={RING} style={_styles.notification} ></Image>
                </Pressable>
            </View>
            <TextView title="Where do you " textStyle={{fontSize:30}} ></TextView>
            <TextView title="want to explore today?" textStyle={{fontSize:30}} styleContainer={{marginTop:0}} ></TextView>
            <SearchView placeholder='Search destination' value={search} onChangetext={handleChangeText} onPress={handleSearch}></SearchView>
            <View>
            <TextTitle left='Choose Category' right='See all' styleContainer={{marginTop:0,marginEnd:30}} 
            onPressRight={()=>{navigation.navigate("Category")}} 
            ></TextTitle>
            <CategoryList data={data} onPress={handleSelectCategory} ></CategoryList>
            </View>         
            <TextTitle left='Favorite Place' right='Explore' styleContainer={{marginEnd:30}} 
            // onPressRight={()=>{navigation.navigate("BookingStack")}}
            ></TextTitle>
            <FavoriteList data={favorite} onPress={handleDetail}></FavoriteList>
            <TextTitle left='Popular Package' right='See All' styleContainer={{marginEnd:30}} 
            // onPressRight={()=>{navigation.navigate("")}}
            ></TextTitle>
            <PopularList data={popular} onPress={handleSelectPopular}></PopularList>
        </ScrollView>
    );
}
const _styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFFFFF',
        paddingStart:30,
        paddingTop:20
    },
    row: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:5
    },
    name:{
        fontSize:16,
        color:'black',
        opacity:1,
        fontWeight:'600'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginRight: 15
    },
    notification: {
        height: 30,
        width: 30
    }
})

export default Home;