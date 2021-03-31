import React from "react";
import { View } from "react-native";

import Login from './Login';
import Profile from './Profile';

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../Redux/userSlice";

const User = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const params = { goToBusinessPage: true }

    return (
        <View>
            {
                isLoggedIn
                ?
                <Login route={params} />
                :
                <Profile />
            }
        </View>
    )
}

export default User;