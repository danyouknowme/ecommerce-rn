import React from 'react';
import { View, Text } from 'react-native';
import tailwind from 'tailwind-rn';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-native';

const Navbar: React.FC = () => {
  const page = useSelector((state: any) => state.app.page as string);

  return (
    <View style={tailwind('flex-row justify-between items-center')}>
      <View
        style={tailwind(
          'flex-row items-center bg-red-200 px-3 py-2 rounded-lg'
        )}
      >
        <FontAwesomeIcon name='home' size={22} color='#b91c1c' />
        {page === 'home' && (
          <Text style={tailwind('ml-2 text-red-700 font-semibold')}>Home</Text>
        )}
      </View>
      <Link to='/favourite'>
        <View>
          <FontAwesomeIcon name='heart' size={22} color='#bdbdbd' />
        </View>
      </Link>
      <Link to='/cart'>
        <View>
          <FontAwesomeIcon name='shopping-cart' size={22} color='#bdbdbd' />
        </View>
      </Link>
      <View>
        <FontAwesomeIcon name='user' size={22} color='#bdbdbd' />
      </View>
    </View>
  );
};

export default Navbar;
