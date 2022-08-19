import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import tw from 'twrnc';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { IProductCardProps } from '../types/app';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

const ProductCard: React.FC<IProductCardProps> = ({ title, image, price }) => {
  return (
    <View
      style={tw`flex-col items-end w-42 p-1 bg-white rounded-2xl shadow border border-zinc-100 my-2`}
    >
      <TouchableOpacity style={tw`mt-2 mr-2`}>
        <FontAwesomeIcon name='heart' size={20} color='#bdbdbd' />
      </TouchableOpacity>
      <View style={tw`my-0 mx-auto w-32 h-32 my-4`}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
      <View style={tw`w-full bg-zinc-100 p-2 rounded-b-2xl`}>
        <Text numberOfLines={2} style={tw`text-lg font-semibold text-zinc-500`}>
          {title}
        </Text>
        <Text style={tw`text-xl font-extrabold`}>{price} ฿</Text>
      </View>
    </View>
  );
};

export default ProductCard;
