import React, { useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigate } from 'react-router-native';
import { Navbar, Carousel, Searchbar, ProductCard } from '../components';
import { getAllProducts } from '../services/product';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../app/appSlice';
import { Product } from '../types/app';
import { AppDispatch } from '../app/store';
import tw from 'twrnc';
import { checkFilteredSearchEngine } from '../utils/search';

export default function Home() {
  const searchInput = useSelector((state: any) => state.app.searchInput);
  const products = useSelector(
    (state: any) => state.app.products as Product[] | null
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchInput) {
      getAllProducts().then((res) => {
        dispatch(setProducts(res.data));
      });
    } else {
      dispatch(
        setProducts(
          products?.filter((product) =>
            checkFilteredSearchEngine(product.title, searchInput)
          )
        )
      );
    }
  }, [searchInput]);

  const navigateToProductPage = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <SafeAreaView style={tw`h-full mx-5 relative`}>
      <ScrollView>
        <Searchbar />
        <View style={tw`mt-8 mb-5`}>
          <Text style={tw`font-semibold text-2xl`}>Hello Danny &#128525;</Text>
          <Text style={tw`text-base text-zinc-400`}>Lets gets somethings?</Text>
        </View>
        <Carousel />
        <View style={tw`mt-6`}>
          <Text style={tw`font-semibold text-xl`}>All Products</Text>
        </View>
        <View style={tw`flex-row flex-wrap justify-between mt-2 mb-6`}>
          {products?.map((product) => (
            <TouchableOpacity
              key={product.id}
              onPress={() => navigateToProductPage(product.id)}
            >
              <ProductCard
                title={product.title}
                image={product.imagePath}
                price={product.price}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  );
}
