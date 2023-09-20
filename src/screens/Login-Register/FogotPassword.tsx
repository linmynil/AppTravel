import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';
import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { TextView } from '../../components/TextView';
import { ImageView } from '../../components/ImageView';
import { ARROW} from '../../../assets/images';
import { Header } from '../../components/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackHome } from '../../Navigation/StackHome';
type PropsType = NativeStackScreenProps<StackHome, "FogotPassword">;
const FogotPassword:React.FC<PropsType>= (props) => {
    const { navigation } = props;


    const [email, setEmail] = useState<string>('');

    const handleChangeEmail = (value: string) => {
        setEmail(value);
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
                <Header title='' icon={ARROW} styleIcon={{opacity:0}} onPressBack={()=>{navigation.goBack()}} ></Header>
                    <TextView title='Input Your Email' textStyle={{ color: "#BABABA", fontSize: 17, fontWeight: "400" }} styleContainer={{ alignItems: 'flex-start' }}></TextView>
                    <TextView title="Forgot Your Password? " ></TextView>
                    <TextField label='Email' value={email} onChange={handleChangeEmail} styleView={{ marginTop: 50 }}></TextField>
                </View>
                <Button title='Submit' styleView={{ marginBottom: 40}}stylePressable={{width:330}} onPress={()=>{navigation.navigate("CreateNewPassword")}} ></Button>
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
        paddingHorizontal:30, 
        backgroundColor:'#FFFFFF'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 20,
    },

})
export default FogotPassword;