import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchView } from '../../components/SearchView';


const Search = () => {
    const [search, setSearch] = useState<string>('');

    const handleChangeText = (value: string) => {
        setSearch(value);
    }

    const handleSearch = () => {

    }
    return (
        <View style={_styles.container}>
            <SearchView placeholder='search' value={search} onChangetext={handleChangeText} onPress={handleSearch}></SearchView>
        </View>
    )
}

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:30,
        
    }
})

export default Search;