import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, TouchableOpacity, TextInput, Alert } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';
import { AppDispatch } from '../app/store';
import { setSearchInput } from '../app/appSlice';

const Searchbar: React.FC = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const searchInput = useSelector(
    (state: any) => state.app.searchInput as string
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={tw`flex-row items-center justify-between`}>
      <TouchableOpacity style={tw`bg-zinc-200 rounded p-2`}>
        <MCIcon name='apple-keyboard-command' size={18} color='#141414' />
      </TouchableOpacity>
      {openSearch && (
        <TextInput
          style={tw``}
          placeholder='Search for products...'
          value={searchInput}
          onChangeText={(text: string) => dispatch(setSearchInput(text))}
        />
      )}
      <TouchableOpacity
        style={tw`bg-zinc-200 rounded p-2`}
        onPress={() => setOpenSearch(!openSearch)}
      >
        <FontAwesomeIcon name='search' size={18} color='#141414' />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;
