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
          source={require('../../../assets/SAHABAT.jpg')}
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
            {'Sahabat Tersayang'}
          </Text>
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Bergandeng tangan ke mana pun kita berjalan\nBerjalan menyusuri lorong kecil pun jalanan besar\nTak pernah sekalipun menyerah\nTuk sampai sebuah tujuan\nErat sungguh kala itu kau pegang tanganku\nBegitupun aku memoriku masih ingat betul\nKala itu kita masih begitu polosnya'
               }
          </Text>
             <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Berjalan tak peduli itu duri\nhutan lebat, ataupun berliku\nKita terjang begitu saja\nAkupun tak takut apapun itu\nKarna aku tak sendiri\nAda kamu sahabatku…\nAku percaya padamu\nMenyusuri jalan yang berliku\nMengambil keputusan tanpa pemikiran panjang'
                }
          </Text>
             <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Berjalan dan berlari\nDengan begitu yakinnya\nTak peduli hujan pun gelap malam\nTeringat pada tujuan nan jauh di sana\nDemi itu saja\nDan kini kita telah sampai, sahabat\nLakukan apa yang kau impikan\nAkupun demikian\nMari kita lukis kembali perjalanan hidup\nDi tanah rantauan ini.'
            }
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dasboard;
