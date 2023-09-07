import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ListTip } from '../../components/ListTrip';
import { TextView } from '../../components/TextView';
import { SearchView } from '../../components/SearchView';
const Mytrip = () => {
    const [search, setSearch] = useState<string>('');

    const handleChangeText = (value: string) => {
        setSearch(value);
    }

    const handleSearch = () => {

    }
    type ItemData={
        id: string;
        title:string,
        price:string,
        date:string,
     }
    const [data, setData] = React.useState<ItemData[]>(
        [{
            id: '1',
            title: 'Kuta Beach',
            price:'$ 1.145.00',
            date:'13 jun 2021 - 15 jun 2021'
        },
        {
            id: '2',
            title: 'Kuta Beach',
            price:'$ 145.00',
            date:'13 jun 2021 - 15 jun 2021'
        }]
    );
    return (
      <View style={_styles.container}>
        <TextView title="List Your Trip " textStyle={{fontSize:30}} styleContainer={{marginTop:30}} ></TextView>
        <SearchView placeholder='Search destination' value={search} onChangetext={handleChangeText} onPress={handleSearch}></SearchView>
        <ListTip data={data}></ListTip>
      </View>  
    );
}
const _styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:30
    },
    
})
export default Mytrip;