import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {addToCart} from '../../Redux/CartSlice';
import {useDispatch} from 'react-redux';

const DURATION = 400;
export default function TextSalontListDetails({trip, navigation}) {
  const dispatch = useDispatch();
  return (
    <View style={styles.bg}>
      <ScrollView>
        <Animatable.View style={{paddingRight: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              marginTop: 15,
            }}>
            <Animatable.Text
              animation="fadeInLeft"
              delay={DURATION + 70 * 10}
              style={styles.name}>
              {trip.name}
            </Animatable.Text>
            <Animatable.View
              animation="fadeInRight"
              delay={DURATION + 80 * 10}
              style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons color={'#000C66'} name="star" size={22} />
              <MaterialCommunityIcons color={'#000C66'} name="star" size={22} />
              <MaterialCommunityIcons color={'#000C66'} name="star" size={22} />
              <MaterialCommunityIcons color={'#000C66'} name="star" size={22} />
              <MaterialCommunityIcons
                color={'#00020d'}
                name="star-outline"
                size={22}
              />
            </Animatable.View>
          </View>
          <Animatable.View
            animation="fadeInLeft"
            delay={DURATION + 80 * 10}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 20,
            }}>
            <Text style={{color: '#00020d', fontSize: 16, fontWeight: '600'}}>
              Color: {trip.color}
            </Text>
            <Text style={{fontSize: 16, color: '#000C66', fontWeight: '600'}}>
              (288 Reviews)
            </Text>
          </Animatable.View>
          <View
            style={{
              backgroundColor: '#00020d',
              height: 1,
              marginTop: 20,
            }}></View>
          <Animatable.View
            animation="fadeInUp"
            delay={DURATION + 120 * 10}
            style={{paddingTop: 20}}>
            <Text
              style={{
                color: '#000C66',
                fontSize: 18,
                fontWeight: '600',
                paddingBottom: 5,
              }}>
              Product Description
            </Text>
            <Text style={{lineHeight: 20}}>{trip.product}</Text>
          </Animatable.View>
          <Animatable.View
            animation="fadeInUp"
            delay={DURATION + 150 * 10}
            style={{
              backgroundColor: '#000C66',
              height: 80,
              width: '100%',
              borderRadius: 20,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: 15,
              marginTop: 20,
              marginBottom: 20,
            }}>
            <Text style={{color: 'white', fontSize: 30, paddingLeft: 20}}>
              ${trip.price}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart');
                dispatch(addToCart(trip));
              }}
              style={{
                borderWidth: 1,
                backgroundColor: '#fff',
                width: 70,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#000C66', fontWeight: '700', fontSize: 18}}>
                Cart
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 13,
    color: '#040720',
    width: '65%',
    lineHeight: 20,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 220 * 0.8,
    resizeMode: 'contain',
  },
  icon: {
    width: 38 * 0.8,
    height: 38 * 0.8,
    resizeMode: 'contain',
  },
  iconBox: {
    backgroundColor: '#000',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    position: 'absolute',
    bottom: 0,
    width: 400,
    height: 250,
    transform: [{translateY: 0}],
    borderRadius: 32,
    padding: 8,
    paddingLeft: 20,
    paddingTop: 20,
  },
});
