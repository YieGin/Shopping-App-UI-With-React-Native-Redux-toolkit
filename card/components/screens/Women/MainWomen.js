import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import DataWomen from './DataWomen';

export default function MainWomen({navigation}) {
  return (
    <View
      style={{
        paddingLeft: 10,
        paddingRight: 5,
        backgroundColor: 'rgb(238 242 255)',
      }}>
      <DataWomen navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
