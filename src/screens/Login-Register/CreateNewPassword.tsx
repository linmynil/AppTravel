import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';
import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { TextView } from '../../components/TextView';
import { ImageView } from '../../components/ImageView';
import { ARROW } from '../../../assets/images';
import { Header } from '../../components/Header';
const CreateNewPassword = () => {

    const [password, setPassword] = useState<string>('');


    const handleChangePass = (value: string) => {
        setPassword(value);
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
                    <Header title='' icon={ARROW} styleIcon={{ opacity: 0 }}></Header>
                    <TextView title='Fogot Password' textStyle={{ color: "#BABABA", fontSize: 17, fontWeight: "400" }} styleContainer={{ alignItems: 'flex-start' }}></TextView>
                    <TextView title="Create New Password " ></TextView>
                    <TextField label='Password' value={password} onChange={handleChangePass} hidden='pass' textStyle={{ width: 70 }} ></TextField>
                    <TextField label='Password' value={password} onChange={handleChangePass} hidden='pass' textStyle={{ width: 70 }} ></TextField>
                    <TextView title="Your password must include at least one symbol and be 8 or more characters long" textStyle={{ color: "#c7c7c7", fontSize: 14, fontWeight: "normal" }}></TextView>

                </View>

                <Button title='Save' styleView={{ marginBottom: 40 }} ></Button>
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
    header: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 20,
    },
})
export default CreateNewPassword;