import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

const DURATION = 400;
export default function WomenNavbar({navigation}) {
  const onPressHandlerMen = () => {
    navigation.navigate('Home');
  };
  const onPressHandlerCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <>
      <Animatable.View
        animation="fadeInDown"
        delay={DURATION + 5 * 10}
        style={{
          flexDirection: 'row',
          columnGap: 5,
          paddingBottom: 20,
          paddingTop: 20,
        }}>
        <Image
          style={{width: 50, height: 50, borderRadius: 10}}
          source={require('../../../assets/image.png')}
        />
        <View>
          <Text style={{color: '#000080'}}>Hello</Text>
          <Text style={{color: '#191970', fontSize: 22}}>Islam</Text>
        </View>
      </Animatable.View>
      <Animatable.View
        animation="fadeInDown"
        delay={DURATION + 25 * 10}
        style={{flexDirection: 'row', alignItems: 'center', columnGap: 20}}>
        <View style={{position: 'absolute', left: 10, zIndex: 1}}>
          <MaterialCommunityIcons
            name="store-search"
            color={'#191970'}
            size={25}
          />
        </View>
        <TextInput
          placeholder="Search Products"
          style={{
            backgroundColor: '#fff',
            width: '80%',
            height: 45,
            borderRadius: 10,
            borderWidth: 0,
            paddingLeft: 25,
          }}
        />
        <View
          style={{
            backgroundColor: '#191970',
            height: 45,
            width: 45,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <MaterialCommunityIcons
            name="table-settings"
            color={'#fff'}
            size={30}
          />
        </View>
      </Animatable.View>
      <Animatable.View
        animation="fadeInDown"
        delay={DURATION + 45 * 10}
        style={{
          flexDirection: 'row',
          columnGap: 10,
          paddingTop: 20,
          paddingBottom: 20,
        }}>
        <TouchableOpacity onPress={onPressHandlerMen}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="face-man-shimmer-outline"
              color={'#000'}
              size={20}
            />
            <Text style={{color: '#000'}}>MEN'S</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#191970',
              padding: 10,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="face-man-shimmer-outline"
              color={'#fff'}
              size={20}
            />
            <Text style={{color: '#fff'}}>WOMEN'S</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressHandlerCart}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="cart-outline"
              color={'#000'}
              size={20}
            />
            <Text style={{color: '#000'}}>Cart</Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </>
  );
}

const styles = StyleSheet.create({});
