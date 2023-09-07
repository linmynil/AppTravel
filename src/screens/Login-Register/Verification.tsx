import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { TextView } from '../../components/TextView';
import { ImageView } from '../../components/ImageView';
import { ARROW, LINE } from '../../../assets/images';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { Header } from '../../components/Header';
const Verification = () => {

    const [OTP, setOTP] = useState<string>('');

    const handleChangeOTP = (value: string) => {
        setOTP(value);
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
                    <TextView title="OTP Vetification " ></TextView>
                        <OTPInputView
                            style={{ width: '100%', height: 100, marginTop:40 }}
                            pinCount={4}
                            code={OTP} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                            onCodeChanged = {handleChangeOTP}
                            autoFocusOnLoad
                            codeInputFieldStyle={_styles.underlineStyleBase}
                            codeInputHighlightStyle={_styles.underlineStyleHighLighted}
                            onCodeFilled={(code) => {
                                console.log(`Code is ${code}, you are good to go!`)
                            }}
                        />
                   
                    <View style={_styles.row} >
                        <TextView title="Send code reload in" textStyle={{ color: "#c7c7c7", fontSize: 14, fontWeight: "normal" }}></TextView>
                        <TextView title="03:42" textStyle={{ color: "#c7c7c7", fontSize: 14, fontWeight: "normal" }}></TextView>
                    </View>

                </View>
                <ImageView
                    source={LINE}
                    imageStyle={_styles.line}
                    viewStyle={{ justifyContent: 'flex-start' }}
                />
                <Button title='Submit' styleView={{ marginBottom: 40 }} stylePressable={{width:330}} ></Button>
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
        width: 400,
        marginStart: -30,
        marginBottom:20
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 40
    },
    underlineStyleBase: {
        width: 70,
        height: 55,
        borderWidth: 1,
        borderColor: "#c7c7c7",
        borderRadius: 15,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "#FCD240",
    },
})
export default Verification;