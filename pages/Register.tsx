import React from "react";
import { useNavigate } from "react-router-native";
import { View, Text, SafeAreaView, TextInput, Pressable, TouchableOpacity } from "react-native";
import { HomeButton } from "../components";
import tw from "twrnc";

const Register: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SafeAreaView style={tw`h-full relative bg-zinc-200 flex flex-col justify-center`}>
      <View style={tw`absolute top-12 left-4`}>
        <HomeButton />
      </View>
      <View style={tw`flex items-center`}>
        <Text style={tw`text-4xl font-semibold text-stone-600`}>Let's Start!</Text>
        <Text style={tw`text-xl text-stone-500`}>Glad about your interest!</Text>
      </View>
      <View style={tw`flex items-center w-4/5 mx-auto my-10`}>
        <TextInput
          style={tw`my-2 px-3 bg-slate-100 rounded-lg text-base w-full h-12`}
          placeholder="Username"
        />
        <TextInput
          style={tw`my-2 px-3 bg-slate-100 rounded-lg text-base w-full h-12`}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={tw`my-2 px-3 bg-slate-100 rounded-lg text-base w-full h-12`}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <TextInput
          style={tw`my-2 px-3 bg-slate-100 rounded-lg text-base w-full h-12`}
          placeholder="Fullname"
        />
        <TextInput
          style={tw`my-2 px-3 bg-slate-100 rounded-lg text-base w-full h-12`}
          placeholder="Email"
        />
      </View>
      <Pressable
        onPress={() => console.log("click")}
        style={tw`w-4/5 mx-auto h-12 bg-red-400 flex items-center justify-center rounded-lg`}
      >
        <Text style={tw`text-white text-base font-semibold`}>Sign Up</Text>
      </Pressable>
      <View style={tw`flex items-center mt-10`}>
        <View style={tw`flex flex-row justify-center`}>
          <Text>Already have an account?</Text>
          <TouchableOpacity style={tw`ml-2`} onPress={() => navigate("/login")}>
            <Text style={tw`text-sky-600`}>Sign In now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
