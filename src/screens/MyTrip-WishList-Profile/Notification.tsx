import React from 'react';
import { Dimensions, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/Header';
import { ARROW, DOTRED, NOTIONE, NOTITWO, PROMO } from '../../../assets/images';
import { ImageView } from '../../components/ImageView';
import { TextView } from '../../components/TextView';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackHome } from '../../Navigation/StackHome';
type PropsType = NativeStackScreenProps<StackHome, "Notification">;
type ItemData = {
    id: string;
    image: ImageSourcePropType;
    check: boolean;
    title: string;
    text: string
};

type ItemProps = {
    item: ItemData;
    onPress: () => void;
};

const Item = ({ item, onPress }: ItemProps) => {
    const check = item.check;
    console.log(check);
    return (
        <TouchableOpacity onPress={onPress} style={_styles.item}>
            <View style={_styles.circle}>
                <ImageView
                    source={item.image}
                    imageStyle={[_styles.icon]}
                />
            </View>
            <View style={_styles.column}>
                <TextView title={item.title}
                    textStyle={{ fontSize: 17, color: 'black', fontWeight: '600' }}
                    styleContainer={{ alignItems: 'center', marginTop: 5 }}></TextView>
                <Text numberOfLines={1} style={_styles.text}>{item.text}</Text>
            </View>
            <ImageView
                source={DOTRED}
                imageStyle={[_styles.dot, {opacity: check ? 1 : 0 }]}
                viewStyle={{
                    position: 'absolute',
                    right: -5,
                    top: 30,
                }}
            />
        </TouchableOpacity>)

};


const Notification:React.FC<PropsType> = (props) => {
    const { navigation } = props;
    const [data, setData] = React.useState<ItemData[]>(
        [{
            id: '1',
            image: NOTIONE,
            check: true,
            title: 'Your ticket is ready',
            text: 'Your ticket is ready, check sghjkk'
        },
        {
            id: '2',
            image: PROMO,
            check: false,
            title: 'Promo Travel',
            text: 'Get summer special promo dfggbh'
        },
        {
            id: '3',
            image: NOTITWO,
            check: false,
            title: 'Your Booking Successfully',
            text: 'You have been booking successfully'
        }]
    );

    const handleNotification=(index: number) => {
        const item = data[index];
        item.check = !item.check;
        const newData = [...data];
        newData[index] = item;
        setData(newData);
        console.log(item)
    }


    return (
        <View style={_styles.container}>
            <View>
                <Header title='Notification' icon={ARROW} styleIcon={{ opacity: 0 }} styleView={{ marginBottom: 0 }} onPressBack={() => navigation.goBack()}></Header>
                <ScrollView
                    showsHorizontalScrollIndicator={false}>
                    {data.map((item: ItemData, index: number) => (
                        <Item item={item} key={item.id} onPress={()=>handleNotification(index)} />
                    ))}
                </ScrollView>

            </View>

        </View>

    )
}

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor:'#FFFFFF', 
    },
    icon: {
        width: 30,
        height: 30,
    },
    dot: {
        width: 16,
        height: 16,
        opacity:1
    },
    item: {
        marginVertical: 10,
        width: Dimensions.get('window').width * 0.84,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    circle: {
        width: 50,
        height: 50,
        backgroundColor: '#FCF3CF',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    text: {
        color: '#BABABA',
        fontSize: 15
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 220,
    }
})

export default Notification;