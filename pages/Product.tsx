import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigate, useParams } from "react-router-native";
import { getProductById } from "../services/product";
import { Product } from "../types/app";
import { BackButton } from "../components";
import tw from "twrnc";
import { useSelector, useDispatch } from "react-redux";
import { setCarts } from "../app/appSlice";
import { ICart } from "../types/app";

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: "65%",
    height: "65%",
    resizeMode: "contain",
    top: 85,
    left: 65,
  },
});

export default function Cart() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const carts = useSelector((state: any) => state.app.carts as ICart[]);
  const authUser = useSelector((state: any) => state.app.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      getProductById(productId).then((res) => {
        setProduct(res.data);
      });
    }
  }, []);

  const addProductToCart = () => {
    if (!authUser) {
      navigate("/login");
    }
    dispatch(setCarts([...carts, { product: product, quantity: 1 }]));
  };

  return (
    <SafeAreaView style={tw`h-full relative bg-zinc-100`}>
      <View style={tw`ml-4 z-10`}>
        <BackButton />
      </View>
      <View style={tw`relative w-full h-3/5 bg-white rounded-b-full -mt-12`}>
        <Image
          source={{
            uri: product?.imagePath,
          }}
          style={styles.image}
        />
      </View>
      <View style={tw`flex-col mt-6 mx-6`}>
        <Text style={tw`font-semibold text-lg`}>{product?.title}</Text>
        <View style={tw`flex-row justify-between items-center mt-4`}>
          <Text style={tw`font-bold text-xl`}>{product?.price} ฿</Text>
          {product && product.amount > 0 && (
            <Text style={tw`font-semibold`}>Available in stock</Text>
          )}
        </View>
        <View style={tw`flex-col mt-4`}>
          <Text style={tw`font-semibold text-xl`}>About</Text>
          <Text style={tw`mt-2`}>{product?.description}</Text>
        </View>
        <TouchableOpacity
          style={tw`mt-6 w-full bg-red-400 items-center rounded-2xl`}
          onPress={addProductToCart}
        >
          <Text style={tw`py-3 text-lg font-semibold text-white`}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
