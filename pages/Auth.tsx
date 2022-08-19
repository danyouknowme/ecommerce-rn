import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { useNavigate } from "react-router-native";
import tw from "twrnc";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SafeAreaView style={tw`h-full relative bg-zinc-200`}>
      <View style={tw`h-full flex items-center`}>
        <View style={tw`absolute -top-12 h-3/5 w-full`}>
          <Image
            source={{
              uri: "https://media.discordapp.net/attachments/886828214763266052/1010087695193755718/Pngtreehand_drawn_jingdong_618_e-commerce_7455456.jpg",
            }}
            style={tw`w-full h-full rounded-3xl`}
          />
        </View>
        <View style={tw`absolute top-2/3 flex items-center`}>
          <Text style={tw`text-2xl font-medium`}>Ecommuay 🛍</Text>
          <Text>Online shopping platform</Text>
        </View>
        <View
          style={tw`absolute bottom-16 flex flex-row shadow bg-slate-100 rounded-md border border-zinc-100`}
        >
          <TouchableOpacity
            style={tw`w-32 py-4 bg-zinc-100 rounded-md`}
            onPress={() => navigate("/register")}
          >
            <Text style={tw`text-center`}>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`w-32 py-4 bg-zinc-200`} onPress={() => navigate("/login")}>
            <Text style={tw`text-center`}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
