import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';
import { Pressable, StatusBar, StyleSheet, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TextView } from '../../components/TextView';
import { ImageView } from '../../components/ImageView';
import { FB, GG, IG, LOGOBLACK } from '../../../assets/images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackHome } from '../../Navigation/StackHome';
type PropsType = NativeStackScreenProps<StackHome, "Login">;
const Login:React.FC<PropsType>= (props) => {
    const { navigation } = props;

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [checkboxState, setCheckboxState] = useState(false);
    const checkRemember = () => {
        setCheckboxState(!checkboxState);
    }

    const handleChangePass = (value: string) => {
        setPassword(value);
    }
    const handleChangeName = (value: string) => {
        setEmail(value);
    }
    return (
        <View style={_styles.login}>
        <View style={_styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#FFFFFF"
                barStyle='dark-content'
            />
            <ImageView
                source={LOGOBLACK}
                imageStyle={_styles.icon}
            />
            <TextField label='Email' value={email} onChange={handleChangeName} styleView={{ marginTop: 70 }}></TextField>
            <TextField label='Password' value={password} onChange={handleChangePass} hidden='pass' textStyle={{ width: 70 }} ></TextField>
            <View style={_styles.row}>
                <View style={_styles.checkbox}>
                    <BouncyCheckbox
                        size={24}
                        fillColor="#c7c7c7"
                        unfillColor="#FFFFFF"
                        iconStyle={{ borderRadius: 6, borderColor: "#FCD240" }}
                        innerIconStyle={{ borderRadius: 6, borderWidth: 1 }}
                        onPress={checkRemember}
                        isChecked={checkboxState}
                    />
                    <TextView title='Remember me' textStyle={{ color: "#c7c7c7", fontSize: 15, fontWeight: "normal" }}></TextView>
                </View>
                <Pressable onPress={() => {navigation.navigate("FogotPassword");}}>
                <TextView title='Fogot password' textStyle={{ color: "#c7c7c7", fontSize: 15, fontWeight: "normal" }} ></TextView>
                </Pressable>
                
            </View>

            <Button title='Create Account' stylePressable={{ backgroundColor: 'white', borderColor: "#d6d6d6", borderWidth: 1,width:330 }} styleView={{marginBottom:20}} onPress={() => {navigation.navigate("CreateAccount");}}></Button>
            <Button title='Sign in' styleView={{marginBottom:20}} stylePressable={{width:330}}  onPress={() => {navigation.navigate("Successfully");}} ></Button>

            <View style={[_styles.row,{marginTop:40}]}>
                <View style={_styles.card}>
                    <ImageView
                        source={IG}
                        imageStyle={_styles.iconcard}
                    />
                </View>
                <View style={_styles.card}>
                    <ImageView
                        source={GG}
                        imageStyle={_styles.iconcard}
                    />
                </View>
                <View style={[_styles.card,{marginRight:0}]}>
                    <ImageView
                        source={FB}
                        imageStyle={_styles.iconcard}
                    />
                </View>
            </View>



        </View>
        </View>


    );
}
const _styles = StyleSheet.create({
    login: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
    container:{
        marginHorizontal:30,
    },
    icon: {
        height: 35,
        width: 120,
        marginTop:70,
        
    },
    iconcard: {
        height: 24,
        width: 24,
    },
    card: {
        height: 50,
        width: 50,
        backgroundColor:"#f0f0f0",
        alignItems: "center",
        justifyContent: "center",
        borderRadius:30,
        marginRight:60
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        marginBottom: 40
    },
    checkbox: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginRight: 80
    }
})
export default Login;