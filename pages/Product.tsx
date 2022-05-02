import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useParams } from 'react-router-native';
import { getProductById } from '../services/product';
import { Product } from '../types/app';
import { BackButton } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: '65%',
    height: '65%',
    resizeMode: 'contain',
    top: 85,
    left: 65,
  },
});

export default function Cart() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [rating, setRating] = useState<Product['rating']>();

  useEffect(() => {
    if (productId) {
      getProductById(productId).then((res) => {
        setProduct(res.data);
        setRating(res.data.rating);
      });
    }
  }, []);

  return (
    <SafeAreaView style={tw`h-full relative bg-zinc-100`}>
      <View style={tw`ml-4 z-10`}>
        <BackButton />
      </View>
      <View style={tw`relative w-full h-3/5 bg-white rounded-b-full -mt-12`}>
        <Image
          source={{
            uri: product?.image,
          }}
          style={styles.image}
        />
      </View>
      <View style={tw`flex-col mt-6 mx-6`}>
        <Text style={tw`font-semibold text-lg`}>{product?.title}</Text>
        <View style={tw`flex-row items-center mt-2 mb-4`}>
          {rating?.rate &&
            [...Array(5)].map((_, index) => {
              return index + 1 <= Math.round(rating?.rate) ? (
                <Ionicons name='star' size={20} key={index} color='#D5AB55' />
              ) : (
                <Ionicons name='star' size={20} key={index} color='#d4d4d8' />
              );
            })}
          <Text style={tw`ml-6 text-base text-zinc-600`}>
            ({rating?.count} Reviews)
          </Text>
        </View>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`font-bold text-xl`}>${product?.price}</Text>
          <Text style={tw`font-semibold`}>Available in stock</Text>
        </View>
        <View style={tw`flex-col mt-4`}>
          <Text style={tw`font-semibold text-xl`}>About</Text>
          <Text numberOfLines={4} style={tw`mt-2`}>
            {product?.description}
          </Text>
        </View>
        <TouchableOpacity
          style={tw`mt-6 w-full bg-red-400 items-center rounded-2xl`}
        >
          <Text style={tw`py-3 text-lg font-semibold text-white`}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
