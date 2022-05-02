import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import tw from 'twrnc';
import { ICarouselItemProps } from '../types/app';

const discountData = [
  {
    message: '30% off during covid 19',
    imageUrl:
      'https://www.cdiscountadvertising.com/wp-content/uploads/2021/03/young-woman-in-yellow-leather-jacket-copy-space.png',
    color: 'red',
    lastObject: false,
  },
  {
    message: '50% off before covid 19',
    imageUrl:
      'https://www.fantzei.com/wp-content/uploads/2022/02/dlpng_com_Girl_holding_a_series_of_shop_476623.png',
    color: 'blue',
    lastObject: false,
  },
  {
    message: '70% off after covid 19',
    imageUrl:
      'https://www.primal.com.my/wp-content/themes/primal-my/assets/img/google-shopping-1297.png',
    color: 'teal',
    lastObject: true,
  },
];

const CarouselItem: React.FC<ICarouselItemProps> = ({
  message,
  imageUrl,
  color,
  lastObject,
}) => {
  return (
    <View
      style={tw.style(
        'w-72 h-38 rounded-2xl p-5 flex-col',
        !lastObject && 'mr-5',
        color && `bg-${color}-400`
      )}
    >
      <View style={tw`w-4/5 flex-1 flex-col items-start justify-between`}>
        <Text style={tw`text-xl font-bold uppercase text-white`}>
          {message}
        </Text>
        <TouchableOpacity
          onPress={() => Alert.alert(message)}
          style={tw`bg-white rounded-3xl`}
        >
          <Text
            style={tw.style(
              'px-6 py-3 font-bold',
              color && `text-${color}-900`
            )}
          >
            Get Now
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={tw`w-28 h-32 absolute right-2 bottom-0`}
      />
    </View>
  );
};

const Carousel: React.FC = () => {
  return (
    <ScrollView horizontal>
      <View style={tw`flex-row`}>
        {discountData.map((disc, index) => (
          <CarouselItem
            message={disc.message}
            imageUrl={disc.imageUrl}
            color={disc.color}
            lastObject={disc.lastObject}
            key={index}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Carousel;
