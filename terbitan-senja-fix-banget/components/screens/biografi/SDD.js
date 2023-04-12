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
          source={require('../../../assets/sapardi1.png')}
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
              'Kilas balik ke Surakarta, penyair kebanggaan Indonesia ini lahir pada tanggal 20 Maret 1940, di mana masa muda beliau dihabiskan di kota tersebut.\nKecintaannya menulis dimulai sejak bangku SMA, di mana karyanya sudah sering diterbitkan di majalah. Dan ketika menempuh kuliah bidang bahasa Inggris di Universitas Gadjah Mada (UGM), beliau semakin menggeluti dunia menulis. Selama periode ini Pak Sapardi juga terlibat dalam siaran radio dan teater.'
              }
          </Text>
              <Text style={{ textAlign: 'justify', marginTop: 10 }}>
            {
              'Karir sastra beliau pun berkembang, Pak Sapardi sempat menjadi Direktur Pelaksana Yayasan Indonesia yang menerbitkan majalah sastra Horison. Dan sudah tak terhitung berapa banyak penghargaan yang dianugerahkan kepada beliau.\nKecintaannya pada dunia sastra pun ia dedikasikan dengan mengajar di sejumlah tempat, termasuk Madiun, Solo, Universitas Diponegoro Semarang, Fakultas Sastra Universitas Indonesia, Institut Kesenian Jakarta, dan sempat menjadi dekan dan guru besar'
                }
          </Text>
              <Text style={{ textAlign: 'justify', marginTop: 10 }}>
            {
              'Saat itu, Pak Sapardi yang duduk di kelas 2 SMA menemukan buku kumpulan puisi yang ditulis W.S. Rendra. Setelah membaca sajak-sajaknya, beliau terkesima dan mengungkapkan jika menulis puisi tidaklah gampang, tapi bisa dengan bahasa yang sederhana dan mudah dipahami orang.'
            }
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default biografi;
