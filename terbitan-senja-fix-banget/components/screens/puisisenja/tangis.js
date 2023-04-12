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
          source={require('../../../assets/tangis.png')}
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
            {'Tangis'}
          </Text>
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Ke mana larinya anak tercinta\nyang diburu segenap penduduk kota?\nPaman Doblang! Paman Doblang!\nla lari membawa dosa\ntangannya dilumuri cemar noda\ntangisnya menyusupi belukar di rimba.'
               }
          </Text> 
           <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Sejak semalam orang kota menembaki\ndengan dendam tuntutan mati\ndan ia lari membawa diri.\nSeluruh subuh, seluruh pagi.'

                   }
          </Text>  
           <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Paman Doblang! Paman Doblang!\nKe mana larinya anak tercinta\ndi padang lalang mana\ndi bukit kapur mana\nmengapa tak lari di riba bunda?'

                   }
          </Text> 
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Paman Doblang! Paman Doblang!\nPesankan padanya dengan angin kemarau\nibunya yang tua menunggu di dangau.'

                   }
          </Text>  
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Kalau lebar nganga lukanya\nmulut bunda kan mengucupnya.\nKalau kotor warna jiwanya\nibu cuci di lubuk hati'


                   }
          </Text>  
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Cuma ibu yang bisa mengerti\nia membunuh tak dengan hati.\nKalau memang hauskan darah manusia\nsuruhlah minum darah ibunya.'

                   }
          </Text> 
           <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Paman Doblang! Paman Doblang!\nKatakan, ibunya selalu berdoa.\nKalau ia kan mati jauh di rimba\nsuruh ingat marhum bapanya\nyang di sorga, di imannya..'

                   }
          </Text>   
           <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Dan di dangau ini ibunya menanti\ndengan rambut putih dan debar hati.\nPaman Doblang! Paman Doblang!\nKalau di rimba rembulan pudar duka\nkatakan, itulah wajah ibunya.'

                   }
          </Text> 
            <Text style={{ textAlign: 'left', marginTop: 10 }}>
            {
              '(1957)'

                   }
          </Text>   
            <Text style={{ textAlign: 'right', marginTop: 10 }}>
            {
              ' — W.S. Rendra'

                   }
          </Text>       
        </View>
      </ScrollView>
    </View>
  );
};

export default Dasboard;
