import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Spinner from './Spinner';
import { Product } from '../types/app';
import tw from 'twrnc';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

const ProductInCart: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <View
      style={tw`flex-row px-3 py-2 border bg-white border-zinc-200 rounded-xl mt-2`}
    >
      <View style={tw`w-18 h-28`}>
        <Image
          source={{
            uri: product?.imagePath,
          }}
          style={styles.image}
        />
      </View>
      <View style={tw`flex-1 ml-6 py-3 flex-col justify-between`}>
        <Text
          numberOfLines={2}
          style={tw`font-semibold text-base text-zinc-700`}
        >
          {product?.title}
        </Text>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`font-bold text-xl`}>{product?.price} ฿</Text>
          <Spinner />
        </View>
      </View>
    </View>
  );
};

export default ProductInCart;
