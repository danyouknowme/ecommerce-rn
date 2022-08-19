import React from "react";
import { useNavigate } from "react-router-native";
import { TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";

const HomeButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <TouchableOpacity style={tw`bg-zinc-300 rounded`} onPress={() => navigate("/")}>
      <FontAwesome name="home" size={36} color="#141414" style={tw`p-1`} />
    </TouchableOpacity>
  );
};

export default HomeButton;
