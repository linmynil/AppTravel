import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';
import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { TextView } from '../../components/TextView';
import { ImageView } from '../../components/ImageView';
import { ARROW, LINE } from '../../../assets/images';
import { Header } from '../../components/Header';

const CreateAccount = () => {

    const [fistName, setFistName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    const handleChangeFistName = (value: string) => {
        setFistName(value);
    }
    const handleChangeLastName = (value: string) => {
        setLastName(value);
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={_styles.KeyboardAvoidingView}>
            <View style={_styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#FFFFFF"
                    barStyle='dark-content'
                />
                <View style={_styles.header}>
               <Header title='' icon={ARROW} styleIcon={{opacity:0}}></Header>
                <TextView title='Create Your Account' textStyle={{ color: "#BABABA", fontSize: 17, fontWeight: "400" }} styleContainer={{ alignItems: 'flex-start' }}></TextView>
                <TextView title="What's is your name? " ></TextView>
                <TextField label='FistName' value={fistName} onChange={handleChangeFistName} textStyle={{ width: 70 }} styleView={{ marginTop: 50 }}></TextField>
                <TextField label='LastName' value={lastName} onChange={handleChangeLastName} textStyle={{ width: 70 }} ></TextField>
                      
                </View>
                <ImageView
                    source={LINE}
                    imageStyle={_styles.line}
                    viewStyle={{ justifyContent: 'flex-start' }}
                />      
                <Button title='Input Email' styleView={{marginBottom:40}} stylePressable={{width:330}} ></Button>
                </View>               
        </KeyboardAvoidingView>

    );
}
const _styles = StyleSheet.create({
    KeyboardAvoidingView: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        marginStart: 30,
        marginEnd: 30,
    },
    header:{
        flex: 1,
        justifyContent: 'flex-start',
        marginTop:20,
    },
    line: {
        height: 4,
        width: 100,
        marginStart: -30,
        marginBottom:20
    },

})
export default CreateAccount;