import {StyleSheet, ScrollView, TextInput, Text, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const DURATION = 400;
export default function BottomSheet({totalPrice, Shipping, Total}) {
  return (
    <View
      style={{
        height: 350,
        paddingTop: 20,
      }}>
      <Animatable.View animation="fadeInLeft" delay={DURATION + 15 * 10}>
        <TextInput
          placeholder="Promo Code"
          style={{
            borderRadius: 10,
            borderWidth: 1,
            height: 65,
            paddingLeft: 15,
            borderColor: '#BDBDBD',
          }}
        />
        <View
          style={{
            backgroundColor: 'rgb(79 70 229)',
            width: 70,
            height: 50,
            position: 'absolute',
            right: 5,
            top: 8,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', fontWeight: '700'}}>Apply</Text>
        </View>
      </Animatable.View>
      <Animatable.View
        animation="fadeInRight"
        delay={DURATION + 45 * 10}
        style={{paddingTop: 20, rowGap: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: '700'}}>Sub Total:</Text>
          <Text style={{color: '#000C66', fontWeight: '700', fontSize: 20}}>
            $ {totalPrice}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: '700'}}>Shipping:</Text>
          <Text style={{color: '#000C66', fontWeight: '700', fontSize: 20}}>
            $ {Shipping}
          </Text>
        </View>
      </Animatable.View>
      <View style={{backgroundColor: '#000', height: 1, marginTop: 20}}></View>
      <Animatable.View
        animation="fadeInDown"
        delay={DURATION + 125 * 10}
        style={{
          backgroundColor: 'rgb(79 70 229)',
          width: '100%',
          borderRadius: 30,
          marginTop: 20,
          marginBottom: 30,
          paddingTop: 30,
          paddingBottom: 30,
          paddingLeft: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          rowGap: 20,
        }}>
        <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>
          Total: ${Total.toFixed(0)}
        </Text>
        <View
          style={{
            backgroundColor: '#fff',
            marginLeft: 20,
            width: 200,
            height: 50,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#000C66', fontSize: 17, fontWeight: '700'}}>
            Proceed To Checkout
          </Text>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({});
