import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import TextSalontListDetails from './TextSalontListDetails';
import {Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageTop from './ImageTop';

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.86;
const ITEM_HEIGHT = height * 1.47;

const DURATION = 400;
export default function SalonListDetails({navigation, route}) {
  const {trip} = route.params;
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Animatable.View animation="fadeInRight" delay={DURATION + 5 * 10}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{
                flexDirection: 'row',
                height: 50,
                paddingTop: 20,
                marginBottom: 20,
                paddingLeft: 10,
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                color={'black'}
                name="step-backward"
                size={25}
              />
              <Text>Back</Text>
            </View>
          </TouchableOpacity>
          <ImageTop trip={trip} />
        </Animatable.View>
        <TextSalontListDetails trip={trip} navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH / 1,
    height: ITEM_HEIGHT / 3.3,
  },
});
