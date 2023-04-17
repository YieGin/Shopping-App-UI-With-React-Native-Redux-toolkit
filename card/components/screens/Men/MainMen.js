import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import DataMen from './DataMen';

export default function MainMen({navigation}) {
  return (
    <View
      style={{
        paddingLeft: 10,
        backgroundColor: 'rgb(238 242 255)',
      }}>
      <DataMen navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
