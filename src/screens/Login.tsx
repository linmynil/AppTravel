import React, { useState } from 'react';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';
import { StyleSheet } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';

const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false)


    const handleChangePass = (value: string) => {
        setPassword(value);
    }
    const handleChangeName = (value: string) => {
        setEmail(value);
    }
    return (
        <>
            <Button title='Next' ></Button>
            <TextField label='Email' value={email} onChange={handleChangeName} ></TextField>
            <TextField label='Password' value={password} onChange={handleChangePass} hidden='pass' textStyle={{ width: 70 }} ></TextField>
            {/* <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            /> */}
        </>

    );
}
const _styles = StyleSheet.create({

})
export default Login;