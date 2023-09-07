import React, { useState } from 'react';
import { Total } from '../../components/Total';
import { StyleSheet, View } from 'react-native';
import { Header } from '../../components/Header';
import { ARROW, LINE } from '../../../assets/images';
import { TextField } from '../../components/TextField';
import { ImageView } from '../../components/ImageView';

const DetailBooking = () => {
    const [person, setPerson] = useState<string>('');
    const [contact, setContact] = useState<string>('');
    const [member, setMember] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [number, setNumber] = useState<string>('');


    const handlePerson = (value: string) => {
        setPerson(value);
    }
    const handleContact = (value: string) => {
        setContact(value);
    }
    const handleMember = (value: string) => {
        setMember(value);
    }
    const handleType = (value: string) => {
        setType(value);
    }

    const handleNumber = (value: string) => {
        setNumber(value);
    }

    return (
        <View style={_style.container}>
            <View>
                <Header title='Detail Booking' icon={ARROW} styleIcon={{ opacity: 0 }} styleView={{ marginBottom: 0 }}></Header>
                <TextField value={person}
                    label='Person Responsible'
                    onChange={handlePerson}
                    textStyle={{ width: 130 }} ></TextField>
                <TextField value={contact}
                    label='Contact info'
                    onChange={handleContact}
                    textStyle={{ width: 85 }} ></TextField>
                <TextField value={contact}
                    label='Member'
                    onChange={handleMember}
                    textStyle={{ width: 60 }}
                    stylearrow={{ opacity: 1 }}
                    text='2 member' ></TextField>
                <TextField value={contact}
                    label='Type ID'
                    onChange={handleType}
                    textStyle={{ width: 60 }}
                    stylearrow={{ opacity: 1 }}
                    text='ID card' ></TextField>
                <TextField value={number}
                    label='Number ID'
                    onChange={handleNumber}
                    textStyle={{ width: 75 }} ></TextField>
            </View>
            <View>
                <ImageView
                    source={LINE}
                    imageStyle={_style.line}
                    viewStyle={{ justifyContent: 'flex-start' }}
                />
                <Total title='Payment method' price='$1.490.00' text='Total:'></Total>
            </View>

        </View>

    )
}

const _style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 30,
    },
    line: {
        height: 4,
        width: 200,
        marginStart: -30,
    },
})

export default DetailBooking;