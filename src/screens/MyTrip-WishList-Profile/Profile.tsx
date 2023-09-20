import React, { useState } from 'react';
import { Alert, Dimensions, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextView } from '../../components/TextView';
import { CardProfile } from '../../components/CardProfile';
import { ImageView } from '../../components/ImageView';
import { FAQ, LANGUAGE, PICONE, PROFILE, RING } from '../../../assets/images';
import { Total } from '../../components/Total';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackHome } from '../../Navigation/StackHome';
type PropsType = NativeStackScreenProps<StackHome, "Profile">;
const Profile:React.FC<PropsType>= (props) => {
    const { navigation } = props;

    const [modalVisible, setModalVisible] = useState(false);
    const handleModal = () => {
        setModalVisible(true);
    }
    return (
        <View style={_styles.container}>
            <TextView title="Your Profile " textStyle={{ fontSize: 30 }} styleContainer={{ marginTop: 50, marginBottom: 20 }} ></TextView>
            <View style={_styles.row}>
                <ImageView source={PICONE} imageStyle={{ width: 50, height: 50, borderRadius: 30 }} viewStyle={{ marginRight: 20 }}></ImageView>
                <View style={_styles.column}>
                    <View style={_styles.row} >
                        <TextView title='Hello, ' textStyle={{ color: "#000000", fontSize: 18, fontWeight: "bold" }} styleContainer={{ marginTop: 0 }}></TextView>
                        <TextView title='Pristia' textStyle={{ color: "#000000", fontSize: 18, fontWeight: "bold" }} styleContainer={{ marginTop: 0 }}></TextView>
                    </View>
                    <Text style={_styles.text}>Semarang Inedosia</Text>
                </View>
            </View>
            <ScrollView>
                <CardProfile title='Personal Information' image={PROFILE}></CardProfile>
                <CardProfile title='Notification' image={RING} styleImage={{ width: 27, height: 27 }} onPress={()=>{navigation.navigate("Notification")}}></CardProfile>
                <CardProfile title='FAQ' image={FAQ} styleImage={{ width: 21 }}></CardProfile>
                <CardProfile title='Dark Mode' image={PROFILE} toggle={true}></CardProfile>
                <CardProfile title='Language' image={LANGUAGE} ></CardProfile>
                <CardProfile title='Logout' image={PROFILE} styleImage={{ opacity: 0 }} onPress={handleModal}></CardProfile>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={_styles.background}>
                        <View style={_styles.centeredView}>
                            <View style={_styles.modalView}>
                                <Text style={_styles.modalText}>Logout</Text>
                                <View style={_styles.row}>
                                    <Text style={_styles.text}>Are you sure you want to logout of</Text>
                                    <Text style={_styles.modalText} >Pristia Candra's</Text>
                                </View>
                                <Text style={_styles.text}> account?</Text>
                                <Text style={_styles.textStyle}>Hide Modal</Text>
                                <Total left='Logout' title='Cancel' onPressLeft={()=>{navigation.navigate("Login")}}onPressRight={() => setModalVisible(!modalVisible)}></Total>
                            </View>
                        </View>
                    </View>

                </Modal>
            </ScrollView>
        </View>
    );
}
const _styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor:"#FFFFFF"
    },
    text: {
        color: '#BABABA',
        fontSize: 13,
        marginRight: 7,

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: 45
    },
    background: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
      },
      centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 0.3,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        fontSize: 15,
        color: 'black',
        opacity: 1,
        fontWeight: 'bold'
      },  
    });

export default Profile;