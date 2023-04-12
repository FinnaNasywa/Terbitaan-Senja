import React from 'react';
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { globalStyle } from '../../../globalStyle';
import { AntDesign } from '@expo/vector-icons';

const Dasboard = ({ navigation }) => {
  const listHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={(globalStyle.container, { backgroundColor: '#F6F6F6' })}>
      <View>
        <ImageBackground
          source={require('../../../assets/KAPAL.jpg')}
          style={{
              width: 317,
              height: 220,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
          <AntDesign
            name="left"
            size={25}
            style={{
              backgroundColor: 'white',
              width: 30,
              height: 30,
              marginTop: 20,
              marginLeft: 20,
              color: 'black',
              marginBottom: 10,
              borderRadius: 50,
              padding: 2,
            }}
            onPress={() => navigation.navigate('Dasboard')}
          />
        </ImageBackground>
      </View>

      <ScrollView style={{ padding: 10, marginTop: 10 }}>
        <View
          style={{
            marginTop: 5,
            borderRadius: 10,
            backgroundColor: '#E2E2E2',
            padding: 10,
          }}>
          <Text style={{marginTop: 10, marginBottom: 10, textAlign: 'center', fontWeight: 'bold' }}>
            {'Senja di Pelabuhan Kecil'}
          </Text>
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Ini kali tidak ada yang mencari cinta\ndiantara gudang, rumah tua, pada cerita\ntiang serta temali. Kapal, perahu tiada berlaut\nmenghembus diri dalam mempercaya mau berpaut\nGerimis mempercepat kelam. Ada juga kelepak elang\nmenyinggung muram, desir hari lari berenang'
               }
          </Text>
             <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'menemu bujuk pangkal akanan. Tidak bergerak\ndan kini tanah dan air tidur hilang ombak.\nTiada lagi. Aku sendiri. Berjalan\nmenyisir semenanjung, masih pengap harap\nsekali tiba di ujung dan sekalian selamat jalan\ndari pantai keempat, sedu penghabisan bisa terdekap'
                }
          </Text>
  
        </View>
      </ScrollView>
    </View>
  );
};

export default Dasboard;
