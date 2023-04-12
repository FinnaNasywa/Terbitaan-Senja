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
          source={require('../../../assets/chairilanwr2.png')}
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
              'Chairil Anwar adalah penyair terkemuka di Indonesia yang sudah melahirkan 96 karya, termasuk 70 puisi. Salah satu karyanya yang paling fenomenal adalah puisi bertajuk Aku yang di dalamnya termuat tulisan "Aku ini binatang jalang". Lewat karya tersebut, Chairil Anwar pun dijuluki oleh teman-temannya sebagai "Si Binatang Jalang". \nSatu-satunya ciri umum dari semua karya Chairil Anwar adalah intensitas yang mencerminkan semua aspek kehidupannya. Puisi-puisi buatannya meskipun terkadang terlihat menggembirakan, umumnya mencerminkan ketakutan akan kematian atau depresi.'
 }
          </Text>
          <Text style={{ textAlign: 'justify', marginTop: 10 }}>
            {
              'Selain itu, karya-karya Chairil Anwar juga bersifat multitafsir, dimana setiap pembaca dapat mengambil makna sesuai yang mereka pahami atau inginkan. Sebagai penulis yang beraliran ekspresionisme, Chairil Anwar kerap membuat karya tulis dengan menggunakan bahasa sehari-hari.\nSebelum usianya menginjak 27 tahun, Chairil Anwar sudah menderita beberapa penyakit. Sejak tanggal 22 April 1949 hingga 28 April 1949, ia dirawat di RSCM karena penyakit tifus. Kendati demikian, Chairil sebenarnya sudah lama menderita penyakit paru-paru dan infeksi, sehingga timbullah penyakit usus.'
               }
          </Text>
               <Text style={{ textAlign: 'justify', marginTop: 10 }}>
            {
              'Chairil Anwar wafat tanggal 28 April 1949. Jenazahnya dikebumikan di Taman Pemakaman Umum Karet Bivak, Jakarta. Belum dapat diketahui dengan pasti penyebab kematiannya. Menurut dugaan, Chairil Anwar wafat karena penyakit TBC.'
            }
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default biografi;
