import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import FlashOne from '../screens/Onboarding/FlashOne';
import FlashTwo from '../screens/Onboarding/FlashTwo';
import FlashThree from '../screens/Onboarding/FlashThree';
import FlashFour from '../screens/Onboarding/FashFour';
import Login from '../screens/Login-Register/Login';
import Successfully from '../screens/Login-Register/Successfully';
import Verification from '../screens/Login-Register/Verification';
import InputEmail from '../screens/Login-Register/InputEmail';
import FogotPassword from '../screens/Login-Register/FogotPassword';
import FavoritePlace from '../screens/Login-Register/FavoritePlace';
import CreatePassword from '../screens/Login-Register/CreatePassword';
import CreateNewPassword from '../screens/Login-Register/CreateNewPassword';
import CreateAccount from '../screens/Login-Register/CreateAccount';
import Search from '../screens/Home-Detail/Search';
import Filter from '../screens/Search-Category/Filter';
import Notification from '../screens/MyTrip-WishList-Profile/Notification';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './TabNavigator';
import Detail from '../screens/Home-Detail/Detail';
import DetailFavorite from '../screens/Home-Detail/DetailFavorite';
import BookingSuccessfully from '../screens/Booking/BookingSuccessfully';
import DetailBooking from '../screens/Booking/DetailBooking';
import Payment from '../screens/Booking/Payment';
import PaymentMethods from '../screens/Booking/PaymentMethods';
import Home from '../screens/Home-Detail/Home';
import Category from '../screens/Search-Category/Category';

type FlashOneProps = {}
type FlashTwoProps = {}
type FlashThreeProps = {}
type FlashFourProps = {}
type LoginProps = {}
type SuccessfullyProps = {}
type VerificationProps = {}
type InputEmailProps = {}
type FogotPasswordProps = {}
type FavoritePlaceProps = {}
type CreatePasswordProps = {}
type CreateNewPasswordProps = {}
type CreateAccountProps = {}
type SearchProps = {}
type FilterProps = {}
type ProfileProps = {}
type NotificationProps = {}
type TabNavigatorProps = {}
type DetailProps = {}
type DetailFavoriteProps = {}
type BookingSuccessfullyProps = {}
type DetailBoookingProps = {}
type PaymentProps = {}
type PaymentMethodsProps = {}
type HomeProps = {}
type CategoryProps = {}


export type StackHome = {
    FlashOne: FlashOneProps | undefined;
    FlashTwo: FlashTwoProps | undefined;
    FlashThree: FlashThreeProps | undefined;
    FlashFour: FlashFourProps | undefined;
    Login: LoginProps | undefined;
    Successfully: SuccessfullyProps | undefined;
    Profile: ProfileProps | undefined;
    Verification: VerificationProps | undefined;
    InputEmail: InputEmailProps | undefined;
    FogotPassword: FogotPasswordProps | undefined;
    FavoritePlace: FavoritePlaceProps | undefined;
    CreatePassword: CreatePasswordProps | undefined;
    CreateNewPassword: CreateNewPasswordProps | undefined;
    CreateAccount: CreateAccountProps | undefined;
    Search: SearchProps | undefined;
    Filter: FilterProps | undefined;
    Notification: NotificationProps | undefined;
    TabNavigator: TabNavigatorProps | undefined;
    Detail: DetailProps | undefined;
    DetailFavorite: DetailFavoriteProps | undefined;
    BookingSuccessfully: BookingSuccessfullyProps | undefined;
    DetailBooking: DetailBoookingProps | undefined;
    Payment: PaymentProps | undefined;
    PaymentMethods: PaymentMethodsProps | undefined;
    Home: HomeProps|undefined;
    Category:CategoryProps|undefined;

}

const Stack = createNativeStackNavigator<StackHome>();

const _StackHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="FlashTwo"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="FlashOne" component={FlashOne} />
                <Stack.Screen name="FlashTwo" component={FlashTwo} />
                <Stack.Screen name="FlashThree" component={FlashThree} />
                <Stack.Screen name="FlashFour" component={FlashFour} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Successfully" component={Successfully} />
                <Stack.Screen name="Verification" component={Verification} />
                <Stack.Screen name="InputEmail" component={InputEmail} />
                <Stack.Screen name="FogotPassword" component={FogotPassword} />
                <Stack.Screen name="FavoritePlace" component={FavoritePlace} />
                <Stack.Screen name="CreatePassword" component={CreatePassword} />
                <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                <Stack.Screen name="TabNavigator" component={TabNavigator} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Filter" component={Filter} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="DetailFavorite" component={DetailFavorite} />
                <Stack.Screen name="BookingSuccessfully" component={BookingSuccessfully} />
                <Stack.Screen name="DetailBooking" component={DetailBooking} />
                <Stack.Screen name="Payment" component={Payment} />
                <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export const StackHome = React.memo(_StackHome);

