import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-native';

const Navbar: React.FC = () => {
  const page = useSelector((state: any) => state.app.page as string);
  const navigate = useNavigate();

  const navigateToAnotherPage = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <View style={tw`flex-row justify-between items-center`}>
      <View style={tw`flex-row items-center bg-red-200 px-3 py-2 rounded-lg`}>
        <FontAwesomeIcon name='home' size={22} color='#b91c1c' />
        {page === 'home' && (
          <Text style={tw`ml-2 text-red-700 font-semibold`}>Home</Text>
        )}
      </View>
      <TouchableOpacity onPress={() => navigateToAnotherPage('favourite')}>
        <FontAwesomeIcon name='heart' size={22} color='#bdbdbd' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToAnotherPage('cart')}>
        <FontAwesomeIcon name='shopping-cart' size={22} color='#bdbdbd' />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesomeIcon name='user' size={22} color='#bdbdbd' />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
