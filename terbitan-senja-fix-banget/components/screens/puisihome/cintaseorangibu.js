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
          source={require('../../../assets/Ibu.jpg')}
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
            {'Cinta Seorang Ibu'}
          </Text>
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Cinta seorang ibu adalah sesuatu yang berarti\nyang tidak ada yang bisa menjelaskan,\nCinta seorang ibu terbuat dari pengabdian yang mendalam\ndan pengorbanan dari rasa sakit,\nCinta seorang ibu tidak ada habisnya dan tidak egois\ndan bertahan apa pun yang terjadi,\nKarena tidak ada yang bisa menghancurkannya\natau mengambil cinta itu pergi,'
               }
          </Text>
             <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Cinta seorang ibu sabar dan pemaaf\nketika semua orang lain meninggalkan,\nDan cinta seorang ibu tidak pernah gagal atau terputus-putus\nmeski hati sedang patah,\nDan cinta seorang ibu bersinar dengan segala keindahannya\ndari permata yang paling langka dan paling cemerlang,\nIni jauh melampaui definisi,\nCinta seorang ibu menentang semua penjelasan,'
                }
          </Text>
             <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Dan itu masih menjadi rahasia\nseperti misteri penciptaan,\nBanyak keajaiban yang luar biasa\nmanusia tidak bisa mengerti\nDan bukti menakjubkan lainnya\ndari tangan penuntun Tuhan yang lembut.'
            }
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dasboard;
