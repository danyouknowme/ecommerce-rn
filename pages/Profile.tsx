import React from "react";
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { BackButton } from "../components";
import { IUser } from "../types/user";
import { setAuthUser, setCarts } from "../app/appSlice";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import tw from "twrnc";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  image: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },
});

const Profile: React.FC = () => {
  const authUser = useSelector((state: any) => state.app.authUser as IUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickLogout = () => {
    dispatch(setAuthUser(null));
    dispatch(setCarts([]));
    navigate("/");
  };

  return (
    <SafeAreaView style={tw`h-full mx-5 relative flex flex-col`}>
      <BackButton />
      <View style={tw`flex-1 flex items-center justify-end`}>
        <View style={tw`flex items-center justify-center w-60 h-60 rounded-full border border-4`}>
          <Image
            source={{
              uri: "https://img.freepik.com/premium-vector/cute-corgi-dog-sitting-cartoon_42750-786.jpg",
            }}
            style={styles.image}
          />
        </View>
        <Text style={tw`mt-10 text-3xl font-semibold`}>{authUser.full_name}</Text>
      </View>
      <View style={tw`flex-1 flex justify-between`}>
        <View>
          <View style={tw`flex flex-row items-center mt-8`}>
            <FontAwesome name="user-circle" size={36} />
            <Text style={tw`ml-4 text-xl`}>{authUser.username}</Text>
          </View>
          <View style={tw`flex flex-row items-center mt-4`}>
            <Fontisto name="email" size={36} />
            <Text style={tw`ml-4 text-xl`}>{authUser.email}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={tw`flex items-center justify-center bg-red-400 rounded-lg`}
          onPress={handleClickLogout}
        >
          <Text style={tw`py-4 text-lg font-semibold text-slate-100`}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
