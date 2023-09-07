import React, { useState } from 'react';
import { Dimensions, Image, ImageSourcePropType, ImageStyle, Pressable, StyleProp, StyleSheet, Text } from 'react-native';
import Toggle from 'react-styled-toggle';
import { ToggleButton } from './ToggleButton';

export type CardProfileProps = {
    title: string,
    image: ImageSourcePropType;
    onPress?: () => void;
    styleImage?: StyleProp<ImageStyle>;
    toggle?: boolean;
}

const _Card: React.FC<CardProfileProps> = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { title, image, onPress, toggle } = props;
    return toggle ? (
        <Pressable onPress={onPress} style={_styles.row}>
            <Text style={_styles.text}>{title}</Text>
            <ToggleButton value={isEnabled} onChange={toggleSwitch}></ToggleButton>
        </Pressable>
    )
        : (

            <Pressable onPress={onPress} style={_styles.row}>
                <Text style={_styles.text}>{title}</Text>
                <Image source={image} style={StyleSheet.flatten([_styles.icon, props.styleImage])}></Image>
            </Pressable>
        );

}

const _styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: 'black',
        opacity: 1,
        fontWeight: '500'
    },
    icon: {
        height: 20,
        width: 20,
        opacity: 1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderColor: "#D6D6D6",
        borderWidth: 1,
        width: Dimensions.get('window').width * 0.84,
        height: 65,
        borderRadius: 20,
        marginTop: 25
    },
})


export const CardProfile = React.memo(_Card);