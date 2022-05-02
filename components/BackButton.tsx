import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Link } from 'react-router-native';
import tw from 'twrnc';

const BackButton = () => {
  return (
    <Link to='/'>
      <Ionicons name='arrow-back' size={36} style={tw`absolute left-0 top-0`} />
    </Link>
  );
};

export default BackButton;
