import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import tw from 'twrnc';

interface SpinnerProps {
  count: number;
  setCount: (value: number) => void;
}

const Spinner: React.FC<SpinnerProps> = ({ count, setCount }) => {
  return (
    <View style={tw`flex-row items-center bg-zinc-100 py-1 px-2 rounded-md`}>
      <TouchableOpacity
        disabled={count === 0}
        onPress={() => setCount(count - 1)}
      >
        <FeatherIcon name='minus' size={16} />
      </TouchableOpacity>
      <Text style={tw`font-semibold text-base mx-2`}>{count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <FeatherIcon name='plus' size={16} />
      </TouchableOpacity>
    </View>
  );
};

export default Spinner;
