import {StyleSheet, Text, Dimensions, View, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Image} from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WomenNavbar from './WomenNavbar';
import * as Animatable from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.86;
const ITEM_HEIGHT = height * 1.47;
const DURATION = 400;
const DataWomen = ({navigation}) => {
  const {productWomen} = useSelector(state => state.user);
  return (
    <View>
      <FlatList
        numColumns={2}
        keyExtractor={(item, id) => id.toString()}
        data={productWomen}
        ListHeaderComponent={
          <View>
            <WomenNavbar navigation={navigation} />
            <Animatable.View
              animation="fadeInLeft"
              delay={DURATION + 130 * 10}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 20,
                columnGap: 5,
              }}>
              <Text style={{color: '#000C66', fontSize: 30}}>Find results</Text>
              <Text style={{marginTop: 10}}>(14 Items)</Text>
            </Animatable.View>
          </View>
        }
        renderItem={({item}) => (
          <Animatable.View
            style={{
              width: '50%',
              height: '100%',
              rowGap: 5,
              paddingBottom: 20,
              marginRight: 3,
            }}
            animation="fadeInUp"
            delay={DURATION + 100 * 10}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SalonListDetails', {trip: item});
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  width: ITEM_WIDTH / 1.8,
                  borderRadius: 18,
                  borderWidth: 10,
                  borderColor: '#fff',
                  shadowOpacity: 1,
                  elevation: 5,
                  shadowRadius: 20,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  borderRadius: 18,
                }}>
                <Image
                  resizeMode="contain"
                  source={{uri: item.img}}
                  style={styles.image}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  color: 'rgb(30 27 75)',
                  width: 145,
                  paddingTop: 8,
                  paddingBottom: 5,
                  paddingLeft: 5,
                  lineHeight: 15,
                  fontWeight: '600',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  color: 'rgb(79 70 229)',
                  width: '70%',
                  paddingBottom: 2,
                  fontWeight: '600',
                  paddingLeft: 5,
                }}>
                COLOR: {item.color}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000C66',
                  width: '70%',
                  paddingLeft: 5,
                }}>
                ${item.price}
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        )}
      />
    </View>
  );
};

export default DataWomen;

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT / 3.7,
    borderRadius: 17,
  },
});
