import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.86;
const ITEM_HEIGHT = height * 1.47;
const DURATION = 400;

const ImageTop = ({trip}) => {
  return (
    <ScrollView
      decelerationRate={'fast'}
      snapToInterval={ITEM_WIDTH + 20}
      snapToAlignment={'center'}
      style={{backgroundColor: '#fff'}}
      horizontal={true}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
          marginLeft: 20,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            width: ITEM_WIDTH,
            borderRadius: 18,
            borderWidth: 10,
            borderColor: '#fff',
            shadowOpacity: 1,
            elevation: 12,
            shadowRadius: 20,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            borderRadius: 18,
          }}>
          <Image
            resizeMode="contain"
            source={{uri: trip.img}}
            style={styles.image}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            width: ITEM_WIDTH,
            borderRadius: 18,
            borderWidth: 10,
            borderColor: '#fff',
            shadowOpacity: 1,
            elevation: 12,
            shadowRadius: 20,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            borderRadius: 18,
          }}>
          <Image
            resizeMode="contain"
            source={{uri: trip.img2nd}}
            style={styles.image}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ImageTop;

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT / 2.7,
    borderRadius: 17,
  },
});
