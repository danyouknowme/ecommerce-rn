import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-native";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from "react-native";
import { HomeButton } from "../components";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import tw from "twrnc";
import { regex } from "../utils/regex";
import { postRegisterUser } from "../services/auth";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passwordCondition, setPasswordCondition] = useState({
    length: {
      status: false,
      message: "Password must be more than 6 characters",
    },
    match: {
      status: false,
      message: "Password and comfirm password should match",
    },
    email: {
      status: false,
      message: "Email must be consistent with the email format",
    },
  });

  useEffect(() => {
    if (password.length >= 6) {
      setPasswordCondition((prev) => ({ ...prev, length: { ...prev.length, status: true } }));
    } else {
      setPasswordCondition((prev) => ({ ...prev, length: { ...prev.length, status: false } }));
    }

    if (password === confirmPassword && password !== "") {
      setPasswordCondition((prev) => ({ ...prev, match: { ...prev.match, status: true } }));
    } else {
      setPasswordCondition((prev) => ({ ...prev, match: { ...prev.match, status: false } }));
    }

    if (regex.regExEmail.test(email)) {
      setPasswordCondition((prev) => ({ ...prev, email: { ...prev.email, status: true } }));
    } else {
      setPasswordCondition((prev) => ({ ...prev, email: { ...prev.email, status: false } }));
    }
  }, [password, confirmPassword, email]);

  const handleClickButton = () => {
    if (username === "" || password === "" || fullname === "" || email === "") {
      Alert.alert("Please enter all fields!");
      return;
    }
    if (
      !passwordCondition.length.status ||
      !passwordCondition.match.status ||
      !passwordCondition.email.status
    ) {
      Alert.alert("Please fill in the correct conditions!");
      return;
    }
    postRegisterUser(username, password, fullname, email).then(() => {
      navigate("/login");
    });
  };

  return (
    <SafeAreaView style={tw`h-full relative bg-zinc-200 flex flex-col justify-center`}>
      <View style={tw`absolute top-12 left-4`}>
        <HomeButton />
      </View>
      <View style={tw`flex items-center`}>
        <Text style={tw`text-4xl font-semibold text-stone-600`}>Let's Start!</Text>
        <Text style={tw`text-xl text-stone-500`}>Glad about your interest!</Text>
      </View>
      <View style={tw`flex items-center w-4/5 mx-auto my-6`}>
        <TextInput
          style={tw`my-2 px-3 bg-slate-100 rounded-lg text-base w-full h-12`}
          placeholder="Username"
          autoCapitalize="none"
          onChangeText={(text: string) => setUsername(text)}
        />
        <TextInput
          style={tw`my-2 px-3 bg-slate-100 rounded-lg text-base w-full h-12`}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text: string) => setPassword(text)}
        />
        <TextInput
          style={tw`my-2 px-3 bg-slate-100 rounded-lg text-base w-full h-12`}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={(text: string) => setConfirmPassword(text)}
        />
        <TextInput
          style={tw`my-2 px-3 bg-slate-100 rounded-lg text-base w-full h-12`}
          placeholder="Fullname"
          onChangeText={(text: string) => setFullname(text)}
        />
        <TextInput
          style={tw`my-2 px-3 bg-slate-100 rounded-lg text-base w-full h-12`}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text: string) => setEmail(text)}
        />
        <View style={tw`mt-2`}>
          {Object.values(passwordCondition).map((value, index) => {
            return (
              <View style={tw`flex flex-row items-center`} key={index}>
                <EvilIcons
                  name="check"
                  size={18}
                  color={`${value.status ? "#16a34a" : "#a1a1aa"}`}
                />
                <Text style={tw`${value.status ? "text-green-600" : "text-zinc-400"}`}>
                  {value.message}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <TouchableOpacity
        onPress={handleClickButton}
        style={tw`w-4/5 mx-auto h-12 bg-red-400 flex items-center justify-center rounded-lg`}
      >
        <Text style={tw`text-white text-base font-semibold`}>Sign Up</Text>
      </TouchableOpacity>
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
