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
          source={require('../../../assets/duka.png')}
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
            onPress={() => navigation.navigate('Senja')}
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
            {'Dukamu Abadi'}
          </Text>
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Dukamu adalah dukaku\nAir matamu adalah air mataku\nKesedihan abadimu\nMembuat bahagiamu sirna\nHIngga keakhir tirai hidupmu\nDukamu tetap abadi'
               }
          </Text> 
           <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Bagaimana bisa aku terokai perjalanan hidup ini \nBerbekalkan sejuta dukamu\nMengiringi setiap langkahku\nMenguja semangat jituku\nKarena dukamu adalah dukaku'

                   }
          </Text>  
            <Text style={{ textAlign: 'left', marginTop: 10 }}>
            {
              '(1969)'

                   }
          </Text>   
            <Text style={{ textAlign: 'right', marginTop: 10 }}>
            {
              ' — Sapardi Djoko Damono'

                   }
          </Text>       
        </View>
      </ScrollView>
    </View>
  );
};

export default Dasboard;
