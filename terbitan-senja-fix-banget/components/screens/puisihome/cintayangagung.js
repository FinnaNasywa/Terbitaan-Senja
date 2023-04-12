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
          source={require('../../../assets/CINTA.jpg')}
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
            {'Cinta yang Agung'}
          </Text>
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Adalah ketika kamu menitikkan air mata \ndan masih peduli terhadapnya.. \nAdalah ketika dia tidak mempedulikanmu dan kamu masih \nmenunggunya dengan setia..  \nAdalah ketika dia mulai mencintai orang lain \ndan kamu masih bisa tersenyum sembari berkata'
               }
          </Text>
             <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              '‘Aku turut berbahagia untukmu’ \nApabila cinta tidak berhasil…bebaskan dirimu… \nBiarkan hatimu kembali melebarkan sayapnya \ndan terbang ke alam bebas lagi'
                }
          </Text>
             <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Ingatlah…bahwa kamu mungkin menemukan cinta dan kehilangannya.. \ntapi..ketika cinta itu mati..kamu tidak perlu mati bersamanya \nOrang terkuat bukan mereka yang selalu menang.. \nmelainkan mereka yang tetap tegar ketika \nmereka jatuh'
            }
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dasboard;
