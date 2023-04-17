import {StyleSheet, TouchableOpacity, FlatList, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image} from 'react-native-animatable';
import {addToCart, clear, less} from '../../Redux/CartSlice';
import BottomSheet from './BottomSheet';
import * as Animatable from 'react-native-animatable';

const DURATION = 400;
export default function Cart({navigation, trip, route}) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((a, p) => {
    return a + p.price * p.quantity;
  }, 0);
  const Shipping = cart.reduce((a, p) => {
    return a + p.quantity * 1;
  }, 0);
  const Total = cart.reduce((a, p) => {
    return totalPrice + Shipping;
  }, 0);
  return (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        backgroundColor: 'rgb(238 242 255)',
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          paddingTop: 20,
          marginBottom: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <MaterialCommunityIcons
              color={'black'}
              name="step-backward"
              size={25}
            />
            <Text>Back</Text>
          </View>
        </TouchableOpacity>
        <Text style={{color: '#00020d', fontSize: 17, fontWeight: '700'}}>
          My Cart
        </Text>
        <TouchableOpacity onPress={() => dispatch(clear())}>
          <Text style={{color: 'red'}}>(Remove)</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item, id) => id.toString()}
        data={cart}
        renderItem={({item}) => (
          <Animatable.View
            animation="fadeInRight"
            delay={DURATION + 5 * 10}
            style={{
              backgroundColor: 'rgb(224 231 255)',
              width: '100%',
              borderRadius: 10,
              marginTop: 30,
              paddingLeft: 20,
              paddingTop: 10,
              paddingBottom: 15,
              alignItems: 'center',
              flexDirection: 'row',
              columnGap: 20,
            }}>
            <Image
              resizeMode="contain"
              source={{uri: item.img}}
              style={{
                width: 80,
                height: '100%',
                borderRadius: 20,
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 10,
                  width: 200,
                  color: '#00020d',
                  fontWeight: '700',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: '#00020d',
                  fontWeight: '700',
                  paddingTop: 5,
                  paddingBottom: 5,
                }}>
                Color: {item.color}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{fontSize: 20, color: '#000C66', fontWeight: '700'}}>
                  ${item.price.toFixed(2)}
                </Text>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: '#00020d',
                    height: 25,
                    width: 80,
                    borderRadius: 20,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    columnGap: 18,
                    marginLeft: 80,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (item.quantity > 1) {
                        dispatch(less(item));
                      }
                    }}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Animatable.View>
        )}
      />
      <BottomSheet totalPrice={totalPrice} Total={Total} Shipping={Shipping} />
    </View>
  );
}

const styles = StyleSheet.create({});
