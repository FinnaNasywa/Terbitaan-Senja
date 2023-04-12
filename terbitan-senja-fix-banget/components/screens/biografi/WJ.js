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
          source={require('../../../assets/wijitukul.png')}
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
              'Wiji Thukul adalah tokoh sastrawan yang dielu-elukan di Indonesia atas karya sastranya yang selalu dijadikan sebagai simbol perlawanan. Ketika duduk di bangku sekolah, Wiji Thukul sudah menunjukan ketertarikannya akan dunia sastra dengan menulis puisi dan bergabung dalam sebuah kelompok teater. Bersama teman-temannya dalam kelompok teater tersebut, Beliau telah berkeliling ke berbagai tempat dengan melakukan sebuah musikalisasi puisi yang diiringi musik.'
               }
          </Text>
              <Text style={{ textAlign: 'justify', marginTop: 10 }}>
            {
              'Pada tahun 1988, sajak-sajak ciptaannya berhasil diterbitkan dalam media cetak, baik itu di dalam maupun luar negeri. Sebut saja sajaknya yang berjudul Keadilan (Yogyakarta), Inside Indonesia (Australia), Tanah Air (Belanda), dan masih banyak lagi. Tidak hanya menulis puisi saja, tetapi Beliau juga menulis cerpen, esai, hingga resensi puisi.'
               }
          </Text>
              <Text style={{ textAlign: 'justify', marginTop: 10 }}>
            {
              'Puisi-puisi karya Wiji Thukul disebut sebagai simbol perlawanan kepada rezim otoritarianisme. Karyanya yang paling terkenal adalah berjudul “Aku Ingin Jadi Peluru”.\nSosok Wiji Thukul benar-benar dinilai sebagai seorang militan yang cerdas dalam menggerakkan masyarakat akan perlawanan kepada orde baru melalui puisi-puisinya. Akhir hayat dari Wiji Thukul dapat disebut tragis karena Beliau dianggap sebagai tokoh yang melawan rezim Orde Baru dan ada banyak dugaan bahwa Beliau diculik oleh militer.'
            }
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default biografi;
