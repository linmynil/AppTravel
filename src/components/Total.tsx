import React from 'react';
import { Dimensions, StyleProp, StyleSheet, Text, TextProps, View } from 'react-native';
import { Button } from './Button';

export type PaymentProps = {
    title: string;
    price?: string;
    text?:string;
    left?: string;
    textStyle?:StyleProp<TextProps>;
    priceStyle?:StyleProp<TextProps>;
    onPressLeft?: () => void;
    onPressRight?: () => void;
}

const _Payment: React.FC<PaymentProps> = (props) => {
    const { title, price, left,text, onPressLeft, onPressRight } = props;
    return left ?
        (
            <View  style={_styles.container}>
                <Button title={left}
                    stylePressable={{ width: Dimensions.get('window').width * 0.4, backgroundColor: 'white', borderColor: "#d6d6d6", borderWidth: 1 }}
                     onPress={onPressLeft}></Button>
                <Button title={title}
                    stylePressable={{ width: Dimensions.get('window').width * 0.4 }} onPress={onPressRight}></Button>
            </View >
        ) :
        (
            <View style={_styles.container}>
                <View style={_styles.row}>
                    <Text style={StyleSheet.flatten([_styles.text,props.textStyle])}>{text}</Text>
                    <Text style={StyleSheet.flatten([_styles.price,props.priceStyle])}>{price}</Text>
                </View>
                <Button title={title} stylePressable={{ width: Dimensions.get('window').width * 0.5 }}></Button>
            </View >
        );

}

const _styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems: 'center',
      width:Dimensions.get('window').width*0.86,
      height:90,
      backgroundColor:'#FFFFFF',

    },
    row:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width: Dimensions.get('window').width * 0.3,
    },
    text:{
        color:'#BABABA',
        fontSize:13,
        marginRight:7
    },
    price:{
        color:'#F7623D',
        fontSize:14,
        fontWeight:'bold'
    }
})
export const Total = React.memo(_Payment);