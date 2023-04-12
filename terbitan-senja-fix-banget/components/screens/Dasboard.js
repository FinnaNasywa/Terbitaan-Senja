import React from 'react';
import { ScrollView, Image, TouchableOpacity, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Dasboard = ({ navigation }) => {
  const listHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={{ backgroundColor: 'F6F6F6' }}>
      <View style={{ width: '100%' }}>
        <Image
          source={require('../../assets/bunga.png')}
          style={{ width: '100%', height: 180 }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          marginTop: 20,
          marginLeft: 10,
          width: '100%',
        }}>
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: 'white',
            borderRadius: 50,
            padding: 10,
            marginLeft: 20,
            alignItems: 'center',
          }}>
          <AntDesign
            name="filetext1"
            style={{ fontSize: 30, marginTop: 5 }}
            onPress={() => navigation.navigate('Senja')}
          />
          <Text style={{ fontSize: 12, marginTop: 15, fontWeight: 'bold' }}>
            Senja
          </Text>
        </View>

        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: 'white',
            borderRadius: 50,
            padding: 10,
            marginLeft: 40,
            alignItems: 'center',
          }}>
          <AntDesign
            name="table"
            style={{ fontSize: 30, marginTop: 5 }}
            onPress={() => navigation.navigate('Materi')}
          />
          <Text style={{ fontSize: 12, marginTop: 15, fontWeight: 'bold' }}>
            Materi
          </Text>
        </View>

        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: 'white',
            borderRadius: 50,
            padding: 10,
            marginLeft: 40,
            alignItems: 'center',
          }}>
          <AntDesign
            name="user"
            style={{ fontSize: 30, marginTop: 5 }}
            onPress={() => navigation.navigate('Biografi')}
          />
          <Text style={{ fontSize: 12, marginTop: 15, fontWeight: 'bold' }}>
            Biografi
          </Text>
        </View>
      </View>

      <ScrollView>
        <View style={{ padding: 10, marginTop: 10 }}>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('CYA')}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: '100%',
                height: 80,
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                source={require('../../assets/CINTA.jpg')}
                style={{ width: 60, height: 60, borderRadius: 10 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                  {'Cinta yang Agung'}
                </Text>
                <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 5 }}>
                  {
                    'Tapi..ketika cinta itu mati.. \nkamu tidak perlu mati bersamanya'
                  }
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('SPK')}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: '100%',
                height: 80,
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                source={require('../../assets/KAPAL.jpg')}
                style={{ width: 60, height: 60, borderRadius: 10 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                  {'Senja di Pelabuhan Kecil'}
                </Text>
                <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 5 }}>
                  {
                    'Kapal, perahu tiada berlaut menghembus \nDiri dalam mempercayai mau berpaut'
                  }
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('GURU')}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: '100%',
                height: 80,
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                source={require('../../assets/GURU.jpg')}
                style={{ width: 60, height: 60, borderRadius: 10 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                  {'Guruku'}
                </Text>
                <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 5 }}>
                  {
                    'Ketika aku kecil dan menjadi muridnya \nDialah di mataku orang terbesar dan terpintar'
                  }
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('CSI')}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: '100%',
                height: 80,
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                source={require('../../assets/Ibu.jpg')}
                style={{ width: 60, height: 60, borderRadius: 10 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                  {'Cinta Seorang Ibu'}
                </Text>
                <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 5 }}>
                  {
                    'Dan bukti menakjubkan lainnya \ndari tangan penuntun Tuhan yang lembut'
                  }
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('ST')}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: '100%',
                height: 80,
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                source={require('../../assets/SAHABAT.jpg')}
                style={{ width: 60, height: 60, borderRadius: 10 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
                  {'Sahabat Tersayang'}
                </Text>
                <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 5 }}>
                  {'Tak pernah sekalipun menyerah \nTuk sampai sebuah tujuan'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dasboard;
