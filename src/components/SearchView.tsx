import React from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import { ImageView } from './ImageView';
import { SEARCH } from '../../assets/images';
import { Pressable } from 'react-native';

export type SearchProps = {
    placeholder: string;
    value: string;
    onPress?: () => void;
    onChangetext?: (value:string) => void;
}

const _Search: React.FC<SearchProps> = (props) => {
    const { placeholder, value, onPress, onChangetext } = props;

    return (
        <View style={_styles.search}>
            <TextInput placeholder={placeholder} value={value} onChangeText={onChangetext}></TextInput>
            <Pressable onPress={onPress}>
             <ImageView source={SEARCH} imageStyle={{ width: 24, height: 24 }}></ImageView>
            </Pressable>           
        </View>

    )
}

const _styles = StyleSheet.create({
    search: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:15,
      backgroundColor:'#f7f7f7',
      borderRadius:20,
      width: Dimensions.get('window').width*0.84,
      height:50,marginVertical:30

    }
})

export const SearchView = React.memo(_Search)