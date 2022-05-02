import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { BackButton, ProductInCart } from '../components';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { ICart } from '../types/app';

export default function Cart() {
  const carts = useSelector((state: any) => state.app.carts as ICart[]);
  const totalPriceList = carts.map((cart) => cart.product.price);

  return (
    <SafeAreaView style={tw`h-full relative bg-zinc-100`}>
      <ScrollView style={tw`mx-5`}>
        <View style={tw`z-10`}>
          <BackButton />
        </View>
        <View>
          <Text style={tw`text-2xl font-semibold text-center`}>My cart</Text>
        </View>
        <View style={tw`flex-col mt-4 mb-6`}>
          {carts?.map((cart, index) => (
            <ProductInCart key={index} product={cart?.product} />
          ))}
        </View>
      </ScrollView>
      <View style={tw`flex-col mx-5`}>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-2xl`}>Total</Text>
          <Text style={tw`text-2xl font-bold text-red-500`}>
            ${totalPriceList.reduce((a, b) => a + b, 0)}
          </Text>
        </View>
        <TouchableOpacity style={tw`bg-red-400 rounded-xl items-center mt-6`}>
          <Text style={tw`py-3 font-semibold text-base text-white`}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
