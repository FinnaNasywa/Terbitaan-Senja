import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { globalStyle } from '../../globalStyle';
import CustomCard from '../form/layout/card';
import CustomCardBox from '../form/layout/cardBox';
import { AntDesign } from '@expo/vector-icons';

const Dasboard = ({ navigation }) => {
  const listHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={(globalStyle.container, { backgroundColor: 'F6F6F6' })}>
      <View style={{ backgroundColor: '#FE8253', flexDirection: 'row' }}>
        <AntDesign
          name="left"
          size={25}
          style={{
            marginTop: 40,
            marginLeft: 20,
            color: 'white',
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate('Dasboard')}
        />
        <Text
          style={{
            marginTop: 42,
            marginLeft: 10,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 10,
          }}>
          {'Biografi'}
        </Text>
      </View>
      <ScrollView style={{ padding: 10, backgroundColor: '#F6F6F6' }}>
        <View
          style={{
            height: 200,
            width: 314,
            backgroundColor: 'white',
            marginTop: 10,
            borderRadius: 10,
          }}>
          <Image
            source={require('../../assets/chairilanwr2.png')}
            style={{
              width: 314,
              height: 134,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{'Chairil Anwar'}</Text>

           
            <View
              style={{
                marginLeft: 123,
                backgroundColor: '#999999',
                height: 30,
                width: 50,
                padding: 5,
                borderRadius: 5,
              }}>
               <TouchableOpacity
            onPress={() => navigation.navigate('Chairil')}>
              <Text style={{ fontWeight: 'bold', marginLeft: 3 }}>
                {'Baca'}
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 200,
            width: 314,
            backgroundColor: 'white',
            marginTop: 10,
            borderRadius: 10,
          }}>
          <Image
            source={require('../../assets/sapardi1.png')}
            style={{
              width: 314,
              height: 134,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20, }}>
            <Text style={{ fontWeight: 'bold' }}>{'Sapardi Djoko\nDamono'}</Text>

            <View
              style={{
                marginLeft: 120,
                backgroundColor: '#999999',
                height: 30,
                width: 50,
                padding: 5,
                borderRadius: 5,
              }}>
              <TouchableOpacity
            onPress={() => navigation.navigate('Sapardi')}>
              <Text style={{ fontWeight: 'bold', marginLeft: 3 }}>
                {'Baca'}
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 200,
            width: 314,
            backgroundColor: 'white',
            marginTop: 10,
            borderRadius: 10,
          }}>
          <Image
            source={require('../../assets/wijitukul.png')}
            style={{
              width: 314,
              height: 134,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{'Wiji Thukul'}</Text>

            <View
              style={{
                marginLeft: 140,
                backgroundColor: '#999999',
                height: 30,
                width: 50,
                padding: 5,
                borderRadius: 5,
              }}>
              <TouchableOpacity
            onPress={() => navigation.navigate('Thukul')}>
              <Text style={{ fontWeight: 'bold', marginLeft: 3 }}>
                {'Baca'}
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View
          style={{
            height: 200,
            width: 314,
            backgroundColor: 'white',
            marginTop: 10,
            borderRadius: 10,
          }}>
          <Image
            source={require('../../assets/image3.png')}
            style={{
              width: 314,
              height: 134,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{'W.S Rendra'}</Text>

            <View
              style={{
                marginLeft: 137,
                backgroundColor: '#999999',
                height: 30,
                width: 50,
                padding: 5,
                borderRadius: 5,
              }}>
              <TouchableOpacity
            onPress={() => navigation.navigate('Willibrordus')}>
              <Text style={{ fontWeight: 'bold', marginLeft: 3 }}>
                {'Baca'}
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View
          style={{
            height: 200,
            width: 314,
            backgroundColor: 'white',
            marginTop: 10,
            borderRadius: 10,
          }}>
          <Image
            source={require('../../assets/sitorsitumorang2.png')}
            style={{
              width: 314,
              height: 134,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{'Sitor Situmorang'}</Text>

            <View
              style={{
                marginLeft: 97,
                backgroundColor: '#999999',
                height: 30,
                width: 50,
                padding: 5,
                borderRadius: 5,
              }}>
              <TouchableOpacity
            onPress={() => navigation.navigate('Sitor')}>
              <Text style={{ fontWeight: 'bold', marginLeft: 3 }}>
                {'Baca'}
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dasboard;
