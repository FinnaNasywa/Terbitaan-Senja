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
    <View style={(globalStyle.container, { backgroundColor: '#F6F6F6' })}>
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
          {'Materi'}
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
            source={require('../../assets/Pengertian.jpg')}
            style={{
              width: 314,
              height: 134,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{'Pengertian'}</Text>

           
            <View
              style={{
                marginLeft: 140,
                backgroundColor: '#FE8253',
                height: 30,
                width: 50,
                padding: 5,
                borderRadius: 5,
              }}>
               <TouchableOpacity
            onPress={() => navigation.navigate('Pengertian')}>
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
            source={require('../../assets/_JenisPuisi.jpg')}
            style={{
              width: 314,
              height: 134,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20, }}>
            <Text style={{ fontWeight: 'bold' }}>{'Jenis Puisi'}</Text>

            <View
              style={{
                marginLeft: 140,
                backgroundColor: '#FE8253',
                height: 30,
                width: 50,
                padding: 5,
                borderRadius: 5,
              }}>
              <TouchableOpacity
            onPress={() => navigation.navigate('Jenis')}>
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
            source={require('../../assets/ciri.png')}
            style={{
              width: 314,
              height: 134,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{'Ciri-Ciri Puisi'}</Text>

            <View
              style={{
                marginLeft: 120,
                backgroundColor: '#FE8253',
                height: 30,
                width: 50,
                padding: 5,
                borderRadius: 5,
              }}>
              <TouchableOpacity
            onPress={() => navigation.navigate('Ciri')}>
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
            source={require('../../assets/struktur.png')}
            style={{
              width: 314,
              height: 134,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{'Struktur Puisi'}</Text>

            <View
              style={{
                marginLeft: 130,
                backgroundColor: '#FE8253',
                height: 30,
                width: 50,
                padding: 5,
                borderRadius: 5,
              }}>
              <TouchableOpacity
            onPress={() => navigation.navigate('Struktur')}>
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
            source={require('../../assets/membuat.png')}
            style={{
              width: 314,
              height: 134,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{'Cara Membuat Puisi'}</Text>

            <View
              style={{
                marginLeft: 67,
                backgroundColor: '#FE8253',
                height: 30,
                width: 50,
                padding: 5,
                borderRadius: 5,
              }}>
              <TouchableOpacity
            onPress={() => navigation.navigate('Membuat')}>
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
            source={require('../../assets/membaca.png')}
            style={{
              width: 314,
              height: 134,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{'Cara Membaca Puisi'}</Text>

            <View
              style={{
                marginLeft: 67,
                backgroundColor: '#FE8253',
                height: 30,
                width: 50,
                padding: 5,
                borderRadius: 5,
              }}>
              <TouchableOpacity
            onPress={() => navigation.navigate('Membaca')}>
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
            source={require('../../assets/kuis.png')}
            style={{
              width: 314,
              height: 134,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{'Quiz Final'}</Text>

            <View
              style={{
                marginLeft: 128,
                backgroundColor: '#FE8253',
                height: 30,
                width: 55,
                padding: 5,
                borderRadius: 5,
              }}>
              <TouchableOpacity
          onPress={() => navigation.navigate('Finalquiz', { categoryId: 5 })}>
              <Text style={{ fontWeight: 'bold', marginLeft: 3 }}>
                {'Mulai'}
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
