import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import tw from 'twrnc';

const Spinner: React.FC = () => {
  return (
    <View style={tw`flex-row items-center bg-zinc-100 py-1 px-2 rounded-md`}>
      <TouchableOpacity disabled>
        <FeatherIcon name='minus' size={16} />
      </TouchableOpacity>
      <Text style={tw`font-semibold text-base mx-2`}>1</Text>
      <TouchableOpacity disabled>
        <FeatherIcon name='plus' size={16} />
      </TouchableOpacity>
    </View>
  );
};

export default Spinner;
