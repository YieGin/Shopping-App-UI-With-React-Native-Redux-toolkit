import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 1;
const ITEM_HEIGHT = height * 1.47;
export default function App() {
  return (
    <ScrollView
      decelerationRate={'fast'}
      snapToInterval={ITEM_WIDTH + 20}
      snapToAlignment={'center'}
      horizontal={true}
      style={{flex: 1}}>
      <View style={{width}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              width: ITEM_WIDTH / 1.2,
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
              resizeMode="stretch"
              source={require('./assets/1.png')}
              style={styles.image}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            width: ITEM_WIDTH / 1.2,
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
            resizeMode="stretch"
            source={require('./assets/2.png')}
            style={styles.image}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH / 1,
    height: ITEM_HEIGHT / 3.3,
  },
});
