import React from 'react';
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { globalStyle } from '../../../globalStyle';
import { AntDesign } from '@expo/vector-icons';

const biografi = ({ navigation }) => {
  const listHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={(globalStyle.container, { backgroundColor: '#F6F6F6' })}>
      <View>
        <ImageBackground
          source={require('../../../assets/image3.png')}
          style={{
              width: 314,
              height: 134,
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
            onPress={() => navigation.navigate('Biografi')}
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

          <Text style={{ textAlign: 'justify', marginTop: 10 }}>
            {
              'Siapa yang tidak kenal dengan salah satu penyair terkenal di Indonesia yang memiliki nama asli Willibrordus Surendra Broto atau kerap dipanggil W.S Rendra ini? Yap, semua orang pasti mengetahui sosok penyair ini atas karya sastranya yang populer. Bahkan W.S Rendra juga mendapatkan julukan sebagai “Si Burung Merak” atas penampilannya sebagai deklarator yang selalu mempesona penonton.'
               }
          </Text>
              <Text style={{ textAlign: 'justify', marginTop: 10 }}>
            {'Pada tahun 1954, W.S Rendra berhasil diundang oleh Pemerintah Amerika Serikat untuk menghadiri adanya seminar mengenai kesusastraan di Universitas Harvard. Setelah itu, selama dua bulan, Beliau mengelilingi Amerika Serikat dengan tujuan supaya lebih dekat dengan kehidupan kesusastraan di sana.'
             }
          </Text>
              <Text style={{ textAlign: 'justify', marginTop: 10 }}>
            {'Sejak duduk di bangku sekolah, karya sastra ciptaannya berhasil dimuat dalam beberapa majalah. Tidak hanya menulis karya puisi saja, tetapi Beliau juga menulis drama dan dilakonkan oleh rekan-rekannya di sekolah, dengan judul “Kaki Palsu” pada tahun 1952.\nKarya-karya milik W.S Rendra yang paling terkenal adalah Odipus Sang Raja, Bip-Bop, Ia Punya Leher yang Indah, Ia Sudah Bertualang, dan masih banyak yang lainnya.'
            }
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default biografi;
