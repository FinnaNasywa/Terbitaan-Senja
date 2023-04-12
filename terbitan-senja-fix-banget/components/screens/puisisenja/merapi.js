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
          source={require('../../../assets/merapi.png')}
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
            {'Lereng Merapi'}
          </Text>
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Kutahu sudah, sebelum pergi dari sini\nAku akan rindu balik pada semua ini\nSunyi yang kutakuti sekarang\nRona lereng gunung menguapPada cerita cemara berdesir'
               }
          </Text> 
           <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Sedu cinta penyair\nRindu pada elusan mimpi\nPencipta candi Prambanan\nMengalun kemari dari dataran '

                   }
          </Text>  
           <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Dan sekarang aku mengerti\nJuga di sunyi gunung\nJauh dari ombak menggulung\nDalam hati manusia sendiri\nOmbak lautan rindu\nSemakin nyaring menderu'

                   }
          </Text>  
            <Text style={{ textAlign: 'left', marginTop: 10 }}>
            {
              '(1949)'

                   }
          </Text>   
            <Text style={{ textAlign: 'right', marginTop: 10 }}>
            {
              '— Sitor Situmorang'

                   }
          </Text>       
        </View>
      </ScrollView>
    </View>
  );
};

export default Dasboard;
