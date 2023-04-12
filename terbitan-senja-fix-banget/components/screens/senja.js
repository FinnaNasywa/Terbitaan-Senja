import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  
} from 'react-native';
import { globalStyle } from '../../globalStyle';
import { AntDesign } from '@expo/vector-icons';

const biografi = ({ navigation }) => {
  const listHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={(globalStyle.container, { backgroundColor: '#F6F6F6' })}>
      <View style={{ backgroundColor: '#FE8253' , flexDirection: 'row' }}>
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
          {'Senja'}
        </Text>
      </View>
  
      <ScrollView>
        <View style={{ padding: 10, marginTop: 10 }}>
         <TouchableOpacity
            style={{ marginTop: 5 }}
            onPress={() => navigation.navigate('Tangis')}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: 310,
                height: 80,
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                source={require('../../assets/tangis.png')}
                style={{ width: 60, height: 60, borderRadius: 10 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                  {'Tangis'}
                </Text>
                <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 5 }}>
                  {
                    'Ke mana larinya anak tercinta\nyang diburu segenap penduduk kota? '
                  }
                </Text>
              </View>
            </View>
          </TouchableOpacity>

           <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('Hujan')}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: 310,
                height: 80,
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                source={require('../../assets/hujan.png')}
                style={{ width: 60, height: 60, borderRadius: 10 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                  {'Hujan Bulan Juni'}
                </Text>
                <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 5 }}>
                  {
                    'Tak ada yang lebih tabah\nDari hujan bulan Juni'
                  }
                </Text>
              </View>
            </View>
          </TouchableOpacity>

           <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('Derai')}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: 310,
                height: 80,
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                source={require('../../assets/derai.png')}
                style={{ width: 60, height: 60, borderRadius: 10 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                  {'Derai Derai Cemara'}
                </Text>
                <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 5 }}>
                  {
                    'Cemara menderai sampai jauh\nTerasa hari akan jadi malam'
                  }
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('Gugur')}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: 310,
                height: 80,
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                source={require('../../assets/gugur.png')}
                style={{ width: 60, height: 60, borderRadius: 10 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                  {'Gugur Bunga'}
                </Text>
                <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 5 }}>
                  {
                    'Bunga gugur di atas nyawa yang gugur\ngugurlah semua yang bersamanya '
                  }
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('Duka')}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: 310,
                height: 80,
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                source={require('../../assets/duka.png')}
                style={{ width: 60, height: 60, borderRadius: 10 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                  {'Duka-mu Abadi'}
                </Text>
                <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 5 }}>
                  {'Dukamu adalah dukaku\nAir matamu adalah air mataku'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('Doa')}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: 310,
                height: 80,
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                source={require('../../assets/doa.png')}
                style={{ width: 60, height: 60, borderRadius: 10 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                  {'Doa'}
                </Text>
                <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 5 }}>
                  {
                    'Tuhanku\ndalam termanggu'
                  }
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('Indonesia')}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: 310,
                height: 80,
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                source={require('../../assets/indo.png')}
                style={{ width: 60, height: 60, borderRadius: 10 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                  {'Kembalikan Indonesia Kepadaku'}
                </Text>
                <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 5 }}>
                  {
                    'Hari depan Indonesia adalah \ndua ratus juta mulut yang menganga,'
                  }
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('Merapi')}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: 310,
                height: 80,
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                source={require('../../assets/merapi.png')}
                style={{ width: 60, height: 60, borderRadius: 10 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                  {'Lereng Merapi'}
                </Text>
                <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 5 }}>
                  {
                    'Kutahu sudah, sebelum pergi dari sini\nAku akan rindu balik pada semua ini'
                  }
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default biografi;
