import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { useDispatch } from "react-redux";
import { HomeButton } from "../components";
import { postLoginUser } from "../services/auth";
import { setAuthUser } from "../app/appSlice";
import Feather from "react-native-vector-icons/Feather";
import tw from "twrnc";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isHidingPassword, setIsHidingPassword] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickButton = () => {
    postLoginUser(username, password).then((res) => {
      dispatch(setAuthUser(res.data));
      navigate("/");
    });
  };

  return (
    <SafeAreaView style={tw`h-full relative bg-zinc-200 flex flex-col justify-center`}>
      <View style={tw`absolute top-12 left-4`}>
        <HomeButton />
      </View>
      <View style={tw`flex items-center`}>
        <Text style={tw`text-4xl font-semibold text-stone-600`}>Hello Again!</Text>
        <Text style={tw`text-xl text-stone-500`}>Welcome back you've been missed!</Text>
      </View>
      <View style={tw`flex items-center w-4/5 mx-auto my-10`}>
        <TextInput
          style={tw`my-2 px-3 bg-slate-100 rounded-lg text-base w-full h-12`}
          placeholder="Username"
          autoCapitalize="none"
          onChangeText={(text: string) => setUsername(text)}
        />
        <View style={tw`relative my-2 bg-slate-100 rounded-lg w-full`}>
          <TextInput
            style={tw`w-full h-12 px-3 text-base`}
            placeholder="Password"
            secureTextEntry={isHidingPassword}
            onChangeText={(text: string) => setPassword(text)}
          />
          <TouchableOpacity
            style={tw`absolute top-4 right-4`}
            onPress={() => setIsHidingPassword(!isHidingPassword)}
          >
            <Feather
              style={tw`text-slate-600`}
              name={isHidingPassword ? "eye-off" : "eye"}
              size={18}
            />
          </TouchableOpacity>
        </View>
        <View style={tw`flex flex-row justify-end w-full my-2`}>
          <Text style={tw`text-slate-600 font-semibold`}>Recovery Password</Text>
        </View>
        <TouchableOpacity
          onPress={handleClickButton}
          style={tw`w-full h-12 bg-red-400 flex items-center justify-center rounded-lg mt-6`}
        >
          <Text style={tw`text-white text-base font-semibold`}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex items-center`}>
        <View style={tw`flex flex-row justify-center`}>
          <Text>Doesn't have any account?</Text>
          <TouchableOpacity style={tw`ml-2`} onPress={() => navigate("/register")}>
            <Text style={tw`text-sky-600`}>Sign up now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
