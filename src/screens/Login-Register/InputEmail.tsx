import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';
import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { TextView } from '../../components/TextView';
import { ImageView } from '../../components/ImageView';
import { ARROW, LINE } from '../../../assets/images';
import { ToggleButton } from '../../components/ToggleButton';
import { Header } from '../../components/Header';

const InputEmail = () => {

    const [email, setEmail] = useState<string>('');

    const handleChangeEmail = (value: string) => {
        setEmail(value);
    }

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                    <TextView title="And, your Email? " ></TextView>
                    <TextField label='Email' value={email} onChange={handleChangeEmail} styleView={{ marginTop: 50 }}></TextField>
                    <View style={_styles.row} >
                        <TextView title="I'd like to received marketing and policy communication from travel and its partners." textStyle={{ color: "#c7c7c7", fontSize: 14, fontWeight: "normal" }}></TextView>
                        <ToggleButton value={isEnabled} onChange={toggleSwitch}></ToggleButton>
                    </View>

                </View>
                <ImageView
                    source={LINE}
                    imageStyle={_styles.line}
                    viewStyle={{ justifyContent: 'flex-start' }}
                />
                <Button title='Create Password' styleView={{ marginBottom: 40}}stylePressable={{width:330}} ></Button>
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
    line: {
        height: 4,
        width: 200,
        marginStart: -30,
        marginBottom:20
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginStart:10,
        marginBottom: 40
    },

})
export default InputEmail;